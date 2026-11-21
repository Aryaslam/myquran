# MyQuran

A desktop Quran audio player built with Tauri v2 + Vite + vanilla JavaScript.

## Features

- **114 Surahs** with Arabic text and Indonesian translation
- **Streaming playback** from MP3Quran (Alafasy reciter by default)
- **Offline playback** - download surahs for offline listening
- **Verse-by-verse synchronization** - lyrics highlight in real-time with audio
- **Search** by surah name, number, or translation
- **Favorites** - bookmark surahs
- **Volume control** with persistence
- **Mini player** and full-screen player modes
- **Translation toggle** - show/hide Indonesian translation
- **Offline mode simulation** - test without network

## Data Sources

- **Audio & Timing**: MP3Quran API v3 (`https://mp3quran.net/api/v3/`)
- **Quran Text & Translation**: equran.id API v2 (`https://equran.id/api/v2/`)

## Storage

Downloaded surahs stored in `%APPDATA%\com.myquran.app\surah\<3-digit-id>\`:
- `audio.mp3` - audio file
- `surat.json` - surah text and translation from equran.id
- `timing.json` - ayah timing from MP3Quran
- `done.json` - completion marker

## Development

```bash
# Install dependencies
npm install

# Run dev server
npm run tauri dev

# Build for production
npm run tauri build
```

## Tech Stack

- **Frontend**: Vanilla JS (ES modules), Vite
- **Backend**: Tauri v2 (Rust)
- **Plugins**: `@tauri-apps/plugin-fs`, `@tauri-apps/plugin-http`
- **APIs**: `@tauri-apps/api` (path, core)
- **Fonts**: Inter, Noto Naskh Arabic (via Google Fonts)

## Project Structure

```
src/
├── config.js          # API endpoints and default reciter
├── data.js            # Data loading (local/remote audio, surah text, timing)
├── main.js            # Player logic, UI, playback, lyrics sync
├── styles.css         # All styling with design tokens
├── toast.js           # Error notifications with audio ding
└── index.html         # Main HTML structure
src-tauri/
├── Cargo.toml         # Rust dependencies
├── tauri.conf.json    # Tauri configuration
└── capabilities/
    └── default.json   # Filesystem and HTTP permissions
```

## Keyboard Shortcuts

- `Space` - Play/pause
- `Escape` - Close full player
- Click verse - Seek to that verse (when timing available)

## License

MIT
