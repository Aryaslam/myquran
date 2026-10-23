
import { CFG } from './config.js';
import { remoteUrl, localAudioSrc, scanDownloaded, downloadSurah, loadLocalSurahData, fetchRemoteSurahData } from './data.js';
import { showError } from './toast.js';

const RAW=`Al-Fatihah|الفاتحة|Pembukaan|7
Al-Baqarah|البقرة|Sapi Betina|286
Ali 'Imran|آل عمران|Keluarga Imran|200
An-Nisa'|النساء|Wanita|176
Al-Ma'idah|المائدة|Hidangan|120
Al-An'am|الأنعام|Binatang Ternak|165
Al-A'raf|الأعراف|Tempat Tertinggi|206
Al-Anfal|الأنفال|Rampasan Perang|75
At-Taubah|التوبة|Pengampunan|129
Yunus|يونس|Nabi Yunus|109
Hud|هود|Nabi Hud|123
Yusuf|يوسف|Nabi Yusuf|111
Ar-Ra'd|الرعد|Guruh|43
Ibrahim|إبراهيم|Nabi Ibrahim|52
Al-Hijr|الحجر|Al-Hijr|99
An-Nahl|النحل|Lebah|128
Al-Isra'|الإسراء|Perjalanan Malam|111
Al-Kahf|الكهف|Gua|110
Maryam|مريم|Maryam|98
Taha|طه|Taha|135
Al-Anbiya'|الأنبياء|Para Nabi|112
Al-Hajj|الحج|Haji|78
Al-Mu'minun|المؤمنون|Orang Mukmin|118
An-Nur|النور|Cahaya|64
Al-Furqan|الفرقان|Pembeda|77
Asy-Syu'ara'|الشعراء|Para Penyair|227
An-Naml|النمل|Semut|93
Al-Qasas|القصص|Kisah|88
Al-'Ankabut|العنكبوت|Laba-laba|69
Ar-Rum|الروم|Bangsa Romawi|60
Luqman|لقمان|Luqman|34
As-Sajdah|السجدة|Sujud|30
Al-Ahzab|الأحزاب|Golongan yang Bersekutu|73
Saba'|سبأ|Kaum Saba'|54
Fatir|فاطر|Pencipta|45
Yasin|يس|Yasin|83
As-Saffat|الصافات|Barisan|182
Sad|ص|Sad|88
Az-Zumar|الزمر|Rombongan|75
Gafir|غافر|Maha Pengampun|85
Fussilat|فصلت|Dijelaskan|54
Asy-Syura|الشورى|Musyawarah|53
Az-Zukhruf|الزخرف|Perhiasan|89
Ad-Dukhan|الدخان|Kabut|59
Al-Jasiyah|الجاثية|Berlutut|37
Al-Ahqaf|الأحقاف|Bukit Pasir|35
Muhammad|محمد|Nabi Muhammad|38
Al-Fath|الفتح|Kemenangan|29
Al-Hujurat|الحجرات|Kamar|18
Qaf|ق|Qaf|45
Az-Zariyat|الذاريات|Angin yang Menerbangkan|60
At-Tur|الطور|Bukit Tursina|49
An-Najm|النجم|Bintang|62
Al-Qamar|القمر|Bulan|55
Ar-Rahman|الرحمن|Yang Maha Pengasih|78
Al-Waqi'ah|الواقعة|Hari Kiamat|96
Al-Hadid|الحديد|Besi|29
Al-Mujadalah|المجادلة|Gugatan|22
Al-Hasyr|الحشر|Pengusiran|24
Al-Mumtahanah|الممتحنة|Wanita yang Diuji|13
As-Saff|الصف|Barisan|14
Al-Jumu'ah|الجمعة|Hari Jumat|11
Al-Munafiqun|المنافقون|Orang Munafik|11
At-Tagabun|التغابن|Hari Pengungkapan Kesalahan|18
At-Talaq|الطلاق|Talak|12
At-Tahrim|التحريم|Pengharaman|12
Al-Mulk|الملك|Kerajaan|30
Al-Qalam|القلم|Pena|52
Al-Haqqah|الحاقة|Hari Kiamat|52
Al-Ma'arij|المعارج|Tempat Naik|44
Nuh|نوح|Nabi Nuh|28
Al-Jinn|الجن|Jin|28
Al-Muzzammil|المزمل|Orang yang Berselimut|20
Al-Muddassir|المدثر|Orang yang Berkemul|56
Al-Qiyamah|القيامة|Hari Kiamat|40
Al-Insan|الإنسان|Manusia|31
Al-Mursalat|المرسلات|Malaikat yang Diutus|50
An-Naba'|النبأ|Berita Besar|40
An-Nazi'at|النازعات|Malaikat yang Mencabut|46
'Abasa|عبس|Bermuka Masam|42
At-Takwir|التكوير|Menggulung|29
Al-Infitar|الانفطار|Terbelah|19
Al-Mutaffifin|المطففين|Orang yang Curang|36
Al-Insyiqaq|الانشقاق|Terbelah|25
Al-Buruj|البروج|Gugusan Bintang|22
At-Tariq|الطارق|Yang Datang di Malam Hari|17
Al-A'la|الأعلى|Yang Paling Tinggi|19
Al-Gasyiyah|الغاشية|Hari Pembalasan|26
Al-Fajr|الفجر|Fajar|30
Al-Balad|البلد|Negeri|20
Asy-Syams|الشمس|Matahari|15
Al-Lail|الليل|Malam|21
Ad-Duha|الضحى|Waktu Duha|11
Asy-Syarh|الشرح|Kelapangan|8
At-Tin|التين|Buah Tin|8
Al-'Alaq|العلق|Segumpal Darah|19
Al-Qadr|القدر|Kemuliaan|5
Al-Bayyinah|البينة|Bukti Nyata|8
Az-Zalzalah|الزلزلة|Guncangan|8
Al-'Adiyat|العاديات|Kuda Perang|11
Al-Qari'ah|القارعة|Hari Kiamat|11
At-Takasur|التكاثر|Bermegah Megahan|8
Al-'Asr|العصر|Masa|3
Al-Humazah|الهمزة|Pengumpat|9
Al-Fil|الفيل|Gajah|5
Quraisy|قريش|Suku Quraisy|4
Al-Ma'un|الماعون|Barang Berguna|7
Al-Kausar|الكوثر|Nikmat yang Banyak|3
Al-Kafirun|الكافرون|Orang Kafir|6
An-Nasr|النصر|Pertolongan|3
Al-Lahab|المسد|Gejolak Api|5
Al-Ikhlas|الإخلاص|Ikhlas|4
Al-Falaq|الفلق|Waktu Subuh|5
An-Nas|الناس|Manusia|6`;
const SURAH=RAW.trim().split('\n').map((l,i)=>{const [n,a,m,c]=l.split('|');return{id:i+1,n,a,m,c:+c}});

const FATIHAH=[
 ['بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ','Dengan nama Allah Yang Maha Pengasih, Maha Penyayang.',0],
 ['ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَـٰلَمِينَ','Segala puji bagi Allah, Tuhan seluruh alam.',6],
 ['ٱلرَّحْمَٰنِ ٱلرَّحِيمِ','Yang Maha Pengasih, Maha Penyayang.',13],
 ['مَـٰلِكِ يَوْمِ ٱلدِّينِ','Pemilik hari pembalasan.',18],
 ['إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ','Hanya kepada Engkaulah kami menyembah dan hanya kepada Engkaulah kami memohon pertolongan.',24],
 ['ٱهْدِنَا ٱلصِّرَٰطَ ٱلْمُسْتَقِيمَ','Tunjukilah kami jalan yang lurus,',33],
 ['صِرَٰطَ ٱلَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ ٱلْمَغْضُوبِ عَلَيْهِمْ وَلَا ٱلضَّآلِّينَ','yaitu jalan mereka yang telah Engkau beri nikmat, bukan jalan mereka yang dimurkai, dan bukan pula jalan mereka yang sesat.',44]
];

const P={
 play:'<path d="M8 5v14l11-7z" fill="currentColor" stroke="none"/>',
 pause:'<rect x="6" y="5" width="4" height="14" rx="1.2" fill="currentColor" stroke="none"/><rect x="14" y="5" width="4" height="14" rx="1.2" fill="currentColor" stroke="none"/>',
 prev:'<path d="M19 5v14L9 12z" fill="currentColor" stroke="none"/><path d="M5.5 5v14"/>',
 next:'<path d="M5 5v14l10-7z" fill="currentColor" stroke="none"/><path d="M18.5 5v14"/>',
 book:'<path d="M6 4h12v16.5l-6-4.5-6 4.5z"/>',
 bookF:'<path d="M6 4h12v16.5l-6-4.5-6 4.5z" fill="currentColor"/>',
 lyr:'<path d="M4 6h16M4 12h16M4 18h9"/>',
 down:'<path d="M12 4v11m0 0l-4.5-4.5M12 15l4.5-4.5M5 20h14"/>',
 chev:'<path d="M6 9l6 6 6-6"/>',
 check:'<path d="M5 12.5l4.5 4.5L19 7"/>',
 search:'<circle cx="11" cy="11" r="6.5"/><path d="M20 20l-4.2-4.2"/>',
 vol:'<path d="M3 9v6h4l5 5V4L7 9H3z"/><path d="M16.5 12a5.5 5.5 0 0 1 0 11"/><path d="M19 10a9 9 0 0 1 0 14"/>',
 volMuted:'<path d="M3 9v6h4l5 5V4L7 9H3z"/><line x1="23" y1="3" x2="15.5" y2="10.5"/><line x1="15.5" y1="3" x2="23" y2="10.5"/>'
};
const ic=n=>`<svg class="ic" viewBox="0 0 24 24">${P[n]}</svg>`;
const $=id=>document.getElementById(id);
const fmt=s=>{s=Math.max(0,Math.floor(s));return Math.floor(s/60)+':'+String(s%60).padStart(2,'0')};
const clamp=(v,a,b)=>Math.min(b,Math.max(a,v));
const norm=s=>String(s).toLowerCase().replace(/[\u064b-\u065f\u0670]/g,'').replace(/[^a-z0-9\u0600-\u06ff]/g,'');

const S={cur:-1,t:0,dur:0,playing:false,lines:[],book:new Set(),dl:new Map(),offline:false,tab:'all',q:'',lyr:false,idx:-1,drag:false,last:performance.now()};
const list=$('list'),hint=$('hint'),empty=$('empty'),lyIn=$('lyIn'),lyrics=$('lyrics'),stage=$('stage'),player=$('player'),mini=$('mini'),seek=$('seek');
let collapsed=true,settled=false;

// Audio element
let audio = new Audio();
let playToken = 0;

// Volume
let volume = 1;
let muted = false;
try { volume = parseFloat(localStorage.getItem('myquran.vol')) || 1; } catch {}
audio.volume = volume;

/* cards */
const els=SURAH.map((s,i)=>{
  const d=document.createElement('div');
  d.className='card';d.dataset.i=i;
  d.innerHTML=`<div class="in"><div class="num"><span>${s.id}</span></div><div class="tx"><div class="t1">${s.n}<span class="eq"><i></i><i></i><i></i></span></div><div class="t2">${s.m} · ${s.c} ayat</div></div><span class="chk">${ic('check')}</span><div class="ar ca" dir="rtl">${s.a}</div></div>`;
  list.appendChild(d);return d;
});

function stackInit(){
  els.forEach((e,i)=>{
    const lvl=Math.min(i,3);
    e.style.setProperty('--lvl',lvl);
    e.style.setProperty('--z',200-i);
    e.style.setProperty('--dl',Math.min(i,14)*40+'ms');
    if(i<12){
      e.style.setProperty('--dy',(-(i*96)+lvl*12)+'px');
      e.style.setProperty('--s',1-lvl*.045);
      e.style.setProperty('--o',i<4?1:0);
    }else{
      e.style.setProperty('--dy','0px');e.style.setProperty('--s',1);e.style.setProperty('--o',0);
    }
  });
  list.style.height=(84+36)+'px';
}
function settle(){list.style.height='auto';list.classList.add('settled');settled=true}
function expand(fromStack){
  if(!collapsed)return;collapsed=false;
  hint.style.opacity=0;setTimeout(()=>hint.hidden=true,500);
  if(fromStack){
    const vis=els.filter(e=>!e.hidden),last=vis[vis.length-1];
    list.style.height=(last.offsetTop+last.offsetHeight)+'px';
    list.classList.remove('collapsed');
    setTimeout(settle,1500);
  }else{
    list.classList.add('instant');
    list.classList.remove('collapsed');
    settle();
    void list.offsetWidth;
    list.classList.remove('instant');
  }
}

/* filter */
const isDone=id=>(S.dl.get(id)||{p:0}).p>=100;
function applyFilter(anim){
  const q=norm(S.q);let vis=0;
  SURAH.forEach((s,i)=>{
    const ok=(S.tab==='all'||isDone(s.id))&&(!q||norm(s.n).includes(q)||norm(s.m).includes(q)||norm(s.a).includes(q)||String(s.id)===q);
    els[i].hidden=!ok;
    if(ok){els[i].style.setProperty('--e',Math.min(vis,12));vis++}
  });
  const anyDl=[...S.dl.values()].some(d=>d.p>=100);
  empty.textContent=(S.tab==='dl'&&!anyDl)?'Belum ada surah yang diunduh. Buka sebuah surah lalu tekan tombol unduh di player.':'Surah tidak ditemukan.';
  empty.classList.toggle('show',vis===0);
  if(anim&&collapsed)expand(false);
  if(anim&&settled){
    els.forEach(e=>e.classList.remove('enter'));
    void list.offsetWidth;
    els.forEach(e=>{if(!e.hidden)e.classList.add('enter')});
  }
}
function setTab(t){
  if(t===S.tab)return;
  S.tab=t;$('tabs').dataset.tab=t;
  $('tabAll').classList.toggle('on',t==='all');$('tabDl').classList.toggle('on',t==='dl');
  applyFilter(true);
}

/* lyrics data */
function buildLinesFromData(s, suratData, timingData) {
  // Default fallback: no timing, just verses with translation
  const verses = [];
  if (suratData && suratData.data && Array.isArray(suratData.data.ayat)) {
    for (const a of suratData.data.ayat) {
      const v = a.nomorAyat || verses.length + 1;
      const ar = a.teksArab || '';
      const tr = a.teksIndonesia || '';
      verses.push({ ayah: v, ar, tr });
    }
  } else {
    // Minimal placeholder: just verse numbers
    for (let v = 1; v <= s.c; v++) {
      verses.push({ ayah: v, ar: `Ayah ${v}`, tr: `Verse ${v}` });
    }
  }

  // Map timing by ayah
  const timingMap = {};
  if (Array.isArray(timingData)) {
    for (const t of timingData) {
      if (t.ayah > 0) { // skip ayah 0
        timingMap[t.ayah] = { start: t.start_time / 1000, end: t.end_time / 1000 };
      }
    }
  }

  // Build lines with timing where available
  const lines = [];
  let maxEnd = 0;
  for (const v of verses) {
    const tm = timingMap[v.ayah];
    if (tm) {
      lines.push({ ar: v.ar, tr: v.tr, s: tm.start, e: tm.end });
      if (tm.end > maxEnd) maxEnd = tm.end;
    } else {
      lines.push({ ar: v.ar, tr: v.tr, s: null, e: null });
    }
  }

  return { dur: maxEnd || 0, list: lines };
}

function buildLines(s) {
  // This will be replaced by async loading in play()
  // Keep a minimal synchronous fallback for Al-Fatihah to avoid breaking existing UI before async loads.
  if (s.id === 1) {
    const dur = 58;
    return { dur, list: FATIHAH.map((l, i) => ({ ar: l[0], tr: l[1], s: l[2], e: i < FATIHAH.length - 1 ? FATIHAH[i + 1][2] : dur })) };
  }
  const n = Math.min(s.c, 12), dur = Math.max(20, Math.min(s.c * 8, 240)), step = dur / n;
  return { dur, list: Array.from({ length: n }, (_, i) => ({ ar: 'بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ', tr: `Ayat ${i + 1}. Teks contoh, data asli dari API.`, s: i * step, e: (i + 1) * step })) };
}
function placeLyrics(){
  const el=lyIn.children[Math.max(S.idx,0)];if(!el)return;
  lyIn.style.transform=`translateY(${lyrics.clientHeight*.42-(el.offsetTop+el.offsetHeight/2)}px)`;
}
function setActive(i){
  if(i===S.idx)return;S.idx=i;
  const c=lyIn.children;
  for(let k=0;k<c.length;k++){c[k].style.setProperty('--dist',Math.abs(k-i));c[k].classList.toggle('act',k===i)}
  placeLyrics();
}
function buildLyrics(){
  lyIn.innerHTML=S.lines.map((l,i)=>`<div class="ly" data-i="${i}" style="--dist:${i}"><div class="ar" dir="rtl">${l.ar}</div><div class="tr">${l.tr}</div></div>`).join('');
  S.idx=-1;
  lyIn.style.transition='none';
  setActive(0);
  void lyIn.offsetWidth;
  lyIn.style.transition='';
}

/* playback */
async function play(i) {
  playToken++;
  const token = playToken;
  S.cur = i;
  const s = SURAH[i];

  // Load surah data (text + timing)
  const downloaded = S.dl.has(s.id) && S.dl.get(s.id).p >= 100;
  let suratData = null;
  let timingData = null;
  try {
    if (downloaded) {
      const local = await loadLocalSurahData(s.id);
      if (token !== playToken) return;
      suratData = local.surat;
      timingData = local.timing;
    } else {
      const remote = await fetchRemoteSurahData(s.id);
      if (token !== playToken) return;
      suratData = remote.surat;
      timingData = remote.timing;
    }
  } catch (e) {
    if (token !== playToken) return;
    console.warn('Failed to load surah data:', e);
  }

  // Build lines with real data
  const b = buildLinesFromData(s, suratData, timingData);
  S.lines = b.list;
  S.dur = b.dur || 0;
  S.t = 0;
  S.playing = true;
  buildLyrics();
  ui();
  uiProg();

  let src;
  if (downloaded) {
    src = await localAudioSrc(s.id);
  } else {
    if (S.offline || !navigator.onLine) {
      showError('Tidak ada koneksi. Surah ini belum diunduh.');
      S.playing = false;
      ui();
      return;
    }
    src = await remoteUrl(s.id);
  }

  if (token !== playToken) return;
  audio.src = src;
  audio.currentTime = 0;

  const handlePlay = () => {
    if (token !== playToken) return;
    S.playing = true;
    ui();
  };
  const handlePause = () => {
    if (token !== playToken) return;
    S.playing = false;
    ui();
  };
  const handleEnded = () => {
    if (token !== playToken) return;
    next();
  };
  const handleError = () => {
    if (token !== playToken) return;
    const err = audio.error;
    let msg = 'Terjadi kesalahan saat memutar audio.';
    if (err) {
      if (err.code === 4) msg = 'Audio surah ini tidak ditemukan di server.';
      else if (err.code === 2) msg = 'Koneksi terputus. Buka tab Terunduh untuk memutar surah offline.';
    }
    audio.pause();
    S.playing = false;
    ui();
    showError(msg);
  };
  const handleLoadedMeta = () => {
    if (token !== playToken) return;
    S.dur = audio.duration || S.dur;
    uiProg();
  };
  const handleWaiting = () => {
    if (token !== playToken) return;
    $('mPlay').classList.add('buf');
    $('pPlay').classList.add('buf');
    if (!audio._bufTimer) {
      audio._bufTimer = setTimeout(() => {
        if (token !== playToken) return;
        audio.pause();
        S.playing = false;
        ui();
        showError('Koneksi terputus. Buka tab Terunduh untuk memutar surah offline.');
      }, 8000);
    }
  };
  const handleCanPlay = () => {
    if (token !== playToken) return;
    $('mPlay').classList.remove('buf');
    $('pPlay').classList.remove('buf');
    if (audio._bufTimer) { clearTimeout(audio._bufTimer); audio._bufTimer = null; }
  };

  audio.removeEventListener('play', handlePlay);
  audio.removeEventListener('pause', handlePause);
  audio.removeEventListener('ended', handleEnded);
  audio.removeEventListener('error', handleError);
  audio.removeEventListener('loadedmetadata', handleLoadedMeta);
  audio.removeEventListener('durationchange', handleLoadedMeta);
  audio.removeEventListener('waiting', handleWaiting);
  audio.removeEventListener('canplay', handleCanPlay);

  audio.addEventListener('play', handlePlay);
  audio.addEventListener('pause', handlePause);
  audio.addEventListener('ended', handleEnded);
  audio.addEventListener('error', handleError);
  audio.addEventListener('loadedmetadata', handleLoadedMeta);
  audio.addEventListener('durationchange', handleLoadedMeta);
  audio.addEventListener('waiting', handleWaiting);
  audio.addEventListener('canplay', handleCanPlay);

  try {
    await audio.play();
  } catch (e) {
    if (e.name !== 'AbortError') handleError();
  }
}

function toggle() {
  if (S.cur < 0) return;
  if (S.playing) audio.pause(); else audio.play().catch(e => { if (e.name !== 'AbortError') showError('Terjadi kesalahan saat memutar audio.'); });
}

function next() {
  play((S.cur + 1) % SURAH.length);
}

function prev() {
  if (S.cur < 0) return;
  if (S.t > 3) {
    audio.currentTime = 0;
    uiProg();
  } else {
    play((S.cur - 1 + SURAH.length) % SURAH.length);
  }
}

function tick(ts) {
  const dt = Math.min(.1, (ts - S.last) / 1000);
  S.last = ts;
  if (S.cur >= 0) uiProg();
  requestAnimationFrame(tick);
}

function uiProg() {
  if (!S.dur || !audio.duration) return;
  const cur = audio.currentTime;
  S.t = cur;
  const w = (S.dur ? cur / S.dur * 100 : 0) + '%';
  $('mFill').style.width = w;
  $('sFill').style.width = w;
  $('sThumb').style.left = w;
  const c = fmt(cur);
  if (c !== $('tCur').textContent) $('tCur').textContent = c;
  // binary search for active line (lines sorted by start time, nulls at end)
  let lo = 0, hi = S.lines.length - 1, k = 0;
  while (lo <= hi) {
    const mid = (lo + hi) >> 1;
    const s = S.lines[mid].s;
    if (s !== null && cur >= s) {
      k = mid;
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }
  setActive(k);
}

/* ui */
function ui(){
  const s=SURAH[S.cur];
  mini.classList.toggle('show',!!s);
  const pi=ic(S.playing?'pause':'play');
  $('mPlay').innerHTML=pi;$('pPlay').innerHTML=pi;
  $('mPrev').innerHTML=ic('prev');
  $('mNext').innerHTML=ic('next');
  $('mVol').innerHTML=ic(muted?'volMuted':'vol');
  $('tabDl').innerHTML='Terunduh'+((n=>n?` <span class="cnt">${n}</span>`:'')([...S.dl.values()].filter(d=>d.p>=100).length));
  els.forEach((e,i)=>{
    e.classList.toggle('playing',i===S.cur);
    e.classList.toggle('paused',i===S.cur&&!S.playing);
    e.classList.toggle('done',isDone(SURAH[i].id));
  });
  if(!s)return;
  $('mName').textContent=s.n;$('mSub').textContent=`${s.m} · ${s.c} ayat`;$('mAr').textContent=s.a;
  $('cAr').textContent=s.a;$('cName').textContent=s.n;$('cSub').textContent=`${s.m} · ${s.c} ayat`;
  $('pName').textContent=s.n;$('pAr').textContent=s.a;
  $('tDur').textContent=fmt(S.dur);
  const bk=S.book.has(s.id);
  $('mBook').innerHTML=ic(bk?'bookF':'book');$('pBook').innerHTML=ic(bk?'bookF':'book');
  $('mBook').classList.toggle('on',bk);$('pBook').classList.toggle('on',bk);
  const d=S.dl.get(s.id);
  $('pDl').innerHTML=!d?ic('down'):d.p<100?`<span>${d.p}%</span>`:ic('check');
  $('pDl').classList.toggle('on',!!d&&d.p>=100);
}
function setLyr(on){
  S.lyr=on;stage.classList.toggle('lyr',on);
  $('mLyr').classList.toggle('on',on);$('pLyr').classList.toggle('on',on);
  requestAnimationFrame(placeLyrics);
}
function openPlayer(withLyr){
  if(S.cur<0)return;
  if(withLyr)setLyr(true);
  player.classList.add('open');player.setAttribute('aria-hidden','false');
  requestAnimationFrame(placeLyrics);
}
function closePlayer(){player.classList.remove('open');player.setAttribute('aria-hidden','true')}
async function startDl(id) {
  if (S.dl.has(id)) return;
  S.dl.set(id, { p: 0 });
  ui();
  try {
    await downloadSurah(id, (p) => {
      const d = S.dl.get(id);
      if (d) { d.p = p; ui(); }
    });
    const d = S.dl.get(id);
    if (d) { d.p = 100; }
    applyFilter(false);
  } catch (e) {
    S.dl.delete(id);
    ui();
    showError('Gagal mengunduh surah. Coba lagi.');
  }
}

/* events */
list.addEventListener('click',e=>{
  if(collapsed){expand(true);return}
  const c=e.target.closest('.card');if(!c)return;
  const i=+c.dataset.i;
  if(i===S.cur)toggle();else play(i);
});
$('tabs').addEventListener('click',e=>{const b=e.target.closest('button');if(b&&!b.disabled)setTab(b.dataset.t)});
$('q').addEventListener('input',e=>{S.q=e.target.value;applyFilter(true)});
$('mOpen').onclick=()=>openPlayer(false);
$('mLyr').onclick=()=>openPlayer(true);
$('mBook').onclick=()=>{const id=SURAH[S.cur].id;S.book.has(id)?S.book.delete(id):S.book.add(id);ui()};
$('pBook').onclick=$('mBook').onclick;
$('mPlay').onclick=toggle;$('pPlay').onclick=toggle;
$('pPrev').onclick=prev;$('pNext').onclick=next;
$('pClose').onclick=closePlayer;
$('pLyr').onclick=()=>setLyr(!S.lyr);
$('pDl').onclick=()=>{if(S.cur>=0)startDl(SURAH[S.cur].id)};
$('mPrev').onclick=prev;
$('mNext').onclick=next;
$('mVol').onclick=toggleMute;
$('pVolBtn').onclick=toggleMute;
initVolSlider($('pVolSlider'), $('pVolFill'), $('pVolThumb'));
$('trTog').onclick=()=>{
  const off=stage.classList.toggle('notr');
  $('trTog').classList.toggle('on',!off);
  const t0=performance.now();
  (function f(){placeLyrics();if(performance.now()-t0<700)requestAnimationFrame(f)})();
};
lyIn.addEventListener('click',e=>{
  const l=e.target.closest('.ly');if(!l)return;
  const lineIdx = +l.dataset.i;
  const line = S.lines[lineIdx];
  if (line.s !== null && line.s !== undefined) {
    S.t = line.s;
    uiProg();
    if (audio.duration && !isNaN(line.s) && isFinite(line.s)) {
      audio.currentTime = clamp(line.s, 0, audio.duration);
    }
  }
});
function seekAt(e){const r=seek.getBoundingClientRect();S.t=clamp((e.clientX-r.left)/r.width,0,1)*S.dur;uiProg()}
seek.addEventListener('pointerdown',e=>{seek.setPointerCapture(e.pointerId);S.drag=true;seek.classList.add('drag');seekAt(e)});
seek.addEventListener('pointermove',e=>{if(S.drag)seekAt(e)});
const endDrag=()=>{
  S.drag=false;
  seek.classList.remove('drag');
  if (S.dur && audio.duration && !isNaN(S.t) && isFinite(S.t)) {
    audio.currentTime = clamp(S.t, 0, audio.duration);
  }
};
seek.addEventListener('pointerup',endDrag);
seek.addEventListener('pointercancel',endDrag);
window.addEventListener('resize',placeLyrics);
document.addEventListener('keydown',e=>{
  if(e.key==='Escape')closePlayer();
  if(e.code==='Space'&&S.cur>=0&&e.target.tagName!=='INPUT'){e.preventDefault();toggle()}
});

/* offline simulation */
let bt;
function banner(msg,cls,ms){
  const b=$('banner');b.textContent=msg;b.className='banner show '+cls;
  clearTimeout(bt);if(ms)bt=setTimeout(()=>b.classList.remove('show'),ms);
}
$('net').onclick=()=>{
  S.offline=!S.offline;
  document.body.classList.toggle('offline',S.offline);
  $('netTxt').textContent=S.offline?'Offline':'Online';
  $('tabAll').disabled=S.offline;
  if(S.offline){setTab('dl');banner('Mode offline. Hanya surah yang sudah diunduh.','off',0)}
  else banner('Kembali online.','on',2200);
};

/* init */
$('searchIc').innerHTML=ic('search');
$('hintIc').innerHTML=ic('chev');
$('pClose').innerHTML=ic('chev');
$('mLyr').innerHTML=ic('lyr');
$('pLyr').innerHTML=ic('lyr');
$('pPrev').innerHTML=ic('prev');
$('pNext').innerHTML=ic('next');
stackInit();
applyFilter(false);
ui();
scanDownloaded().then(ids => { ids.forEach(id => S.dl.set(id, {p:100})); applyFilter(false); ui(); }).catch(()=>{});
requestAnimationFrame(tick);

// Volume controls
function toggleMute() {
  muted = !muted;
  audio.muted = muted;
  ui();
}

function initVolSlider(sliderEl, fillEl, thumbEl) {
  if (!sliderEl) return;
  const setVol = (x) => {
    const rect = sliderEl.getBoundingClientRect();
    const pct = clamp((x - rect.left) / rect.width, 0, 1);
    volume = pct;
    muted = volume === 0;
    audio.volume = volume;
    try { localStorage.setItem('myquran.vol', String(volume)); } catch {}
    updateVolUI();
  };
  const updateVolUI = () => {
    const pct = muted ? 0 : volume;
    fillEl.style.width = (pct * 100) + '%';
    thumbEl.style.left = (pct * 100) + '%';
    $('mVol').innerHTML = ic(muted ? 'volMuted' : 'vol');
    $('pVolBtn').innerHTML = ic(muted ? 'volMuted' : 'vol');
  };
  let dragging = false;
  sliderEl.addEventListener('pointerdown', e => {
    sliderEl.setPointerCapture(e.pointerId);
    dragging = true;
    setVol(e.clientX);
  });
  window.addEventListener('pointermove', e => {
    if (dragging) setVol(e.clientX);
  });
  window.addEventListener('pointerup', () => { dragging = false; });
  sliderEl.addEventListener('pointercancel', () => { dragging = false; });
  updateVolUI();
}

// Window offline handler
window.addEventListener('offline', () => {
  if (S.playing && S.cur >= 0) {
    const downloaded = S.dl.has(SURAH[S.cur].id) && S.dl.get(SURAH[S.cur].id).p >= 100;
    if (!downloaded) {
      audio.pause();
      S.playing = false;
      ui();
      showError('Koneksi terputus. Buka tab Terunduh untuk memutar surah offline.');
    }
  }
});
