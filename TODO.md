# MyQuran Todo List

## Setup

* [ ] Init project Tauri, pilih frontend (vanilla JS atau Vite)
* [ ] Konfigurasi CSP untuk `mp3quran.net`, `cdn.mp3quran.net`, `equran.id`
* [ ] Modul config: base URL API, id qari default, pola URL mp3
* [ ] Tes manual: `equran.id/api/v2/surat/1` (cek `deskripsi`), satu URL mp3 MP3Quran, satu response `ayat_timing`
* [ ] Putuskan qari default (Alafasy atau Husary) dan bahasa UI

## M1: Daftar surah, streaming, player

* [x] UI daftar 114 surah (nomor, nama Latin, Arab, arti, jumlah ayat)
* [ ] Ambil daftar surah dari equran.id, cache lokal
* [ ] Tambah Makkiyah atau Madaniyah di kartu (field `tempatTurun`)
* [x] UI klik kartu, player muncul
* [ ] Audio sungguhan: elemen audio HTML5 dari URL MP3Quran, bukan timer simulasi
* [x] UI mini player dan full player (play, pause, prev, next, seek, waktu)
* [ ] Kontrol volume
* [ ] Prev dan next di mini player
* [x] UI autoplay surah berikutnya
* [ ] Handle buffering, error 404, dan koneksi putus saat streaming

## M2: Search, download, favorit, Downloaded Audio

* [x] UI search lokal (nomor, Latin, Arab, arti)
* [x] UI tombol download dengan progress
* [ ] Download asli: simpan mp3, JSON timing, JSON teks dan deskripsi ke folder app data
* [ ] Index metadata unduhan (SQLite atau JSON), simpan berdasarkan id surah
* [ ] Cancel download, hapus unduhan, state error
* [ ] Download terputus: file parsial tidak dianggap selesai
* [x] UI tab Semua, Terunduh, badge jumlah
* [ ] Tab Favorit
* [x] UI tombol favorit
* [ ] Simpan favorit lokal, bertahan setelah app ditutup
* [x] UI halaman Downloaded Audio dan state kosong
* [ ] Putar dari file lokal saat surah sudah terunduh

## M3: Lyrics sync, deskripsi, offline, shortcut

* [x] UI lyrics view bergaya Spotify, toggle terjemahan, klik ayat untuk seek
* [ ] Ambil timing dari `ayat_timing`, teks dan terjemahan dari equran.id
* [ ] Abaikan ayat 0 saat highlight
* [ ] Fallback tanpa highlight kalau timing tidak ada
* [ ] Filter surah per qari (dua qari punya kurang dari 114 surah)
* [ ] Panel deskripsi surah, render lewat sanitizer
* [ ] Lyrics tetap jalan offline dari data lokal
* [x] UI banner dan redirect ke Terunduh saat offline, tab Semua terkunci
* [ ] Deteksi offline sungguhan: event online dan offline plus ping ke API
* [ ] Notifikasi saat online lagi, tanpa paksa pindah balik
* [x] Shortcut spasi dan Esc
* [ ] Pastikan spasi tidak aktif saat fokus di input (sudah di prototype, cek ulang di Tauri)

## M4: Packaging

* [ ] Ikon dan nama app
* [ ] Build installer Windows, cek macOS dan Linux kalau perlu
* [ ] Tes di mesin bersih tanpa Node.js dan tanpa internet

## Polish dan risiko

* [ ] Cache daftar qari dan daftar surah
* [ ] Rencana kalau API MP3Quran atau equran.id berubah atau mati
* [ ] Tes layout pada beberapa ukuran window
* [ ] Cek kontras warna player (teal terang dengan teks putih)
* [ ] Font Inter dan Noto Naskh Arabic di bundle lokal, bukan Google Fonts, supaya jalan offline
