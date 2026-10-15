import { CFG } from './config.js';
import { fetch } from '@tauri-apps/plugin-http';
import { appDataDir, join } from '@tauri-apps/api/path';
import { readDir, exists, mkdir, open, writeTextFile, rename } from '@tauri-apps/plugin-fs';

const pad3 = (n) => String(n).padStart(3, '0');

let readsCache = null;

async function getFolderUrl() {
  if (!readsCache) {
    const res = await fetch(CFG.readsApi);
    const reads = await res.json();
    const r = reads.find(x => x.id === CFG.readId) ||
              reads.find(x => x.name.includes('Alafasy')) ||
              reads.find(x => x.name.includes('العفاسي')) ||
              reads[0];
    readsCache = r;
  }
  return readsCache.folder_url.endsWith('/') ? readsCache.folder_url : readsCache.folder_url + '/';
}

export function remoteUrl(id) {
  return getFolderUrl().then(url => `${url}${pad3(id)}.mp3`);
}

export async function localAudioSrc(id) {
  const base = await appDataDir();
  const path = await join(base, 'surah', pad3(id), 'audio.mp3');
  return `asset://localhost${path}`;
}

export async function scanDownloaded() {
  const base = await appDataDir();
  const surahDir = await join(base, 'surah');
  if (!(await exists(surahDir))) return [];
  const entries = await readDir(surahDir);
  const ids = [];
  for (const e of entries) {
    if (e.isDirectory) {
      const donePath = await join(surahDir, e.name, 'done.json');
      if (await exists(donePath)) {
        ids.push(parseInt(e.name, 10));
      }
    }
  }
  return ids;
}

export async function downloadSurah(id, onProgress) {
  const base = await appDataDir();
  const surahDir = await join(base, 'surah', pad3(id));
  await mkdir(surahDir, { recursive: true });

  // fetch equran
  const equranRes = await fetch(`${CFG.equranApi}/${id}`);
  const equranData = await equranRes.json();
  await writeTextFile(await join(surahDir, 'surat.json'), JSON.stringify(equranData));

  // fetch timing
  const timingRes = await fetch(`${CFG.timingApi}?surah=${id}&read=${CFG.readId}`);
  const timingData = await timingRes.json();
  await writeTextFile(await join(surahDir, 'timing.json'), JSON.stringify(timingData));

  // stream mp3
  const audioUrl = await remoteUrl(id);
  const audioRes = await fetch(audioUrl);
  const total = Number(audioRes.headers.get('content-length') || 0);
  const partPath = await join(surahDir, 'audio.mp3.part');
  const file = await open(partPath, { write: true, create: true, truncate: true });
  const reader = audioRes.body.getReader();
  let received = 0;
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    await file.write(value);
    received += value.length;
    if (total > 0 && onProgress) onProgress(Math.min(100, Math.round(received / total * 100)));
  }
  await file.close();
  const finalPath = await join(surahDir, 'audio.mp3');
  await rename(partPath, finalPath);
  await writeTextFile(await join(surahDir, 'done.json'), JSON.stringify({ id, time: Date.now() }));
}