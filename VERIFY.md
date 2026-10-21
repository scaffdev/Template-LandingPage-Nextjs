# Instruksi Verifikasi Template

File ini berisi prompt untuk AI agent yang menjalankan verifikasi setelah fix audit keamanan.

## Prasyarat
- Node 20+ sudah terinstal.
- Repo sudah di-clone dan berada di root directory.

## Langkah Verifikasi

Jalankan perintah berikut secara berurutan dan laporkan hasilnya:

### 1. Install dependencies
```bash
npm ci
```

### 2. Build
```bash
npm run build
```

### 3. Lint
```bash
npm run lint
```

### 4. Security audit
```bash
npm audit --omit=dev
```

### 5. Smoke test
```bash
npm run start &
sleep 5
curl -s -o /dev/null -w "%{http_code}" http://localhost:3000
curl -sI http://localhost:3000 | grep -i "content-security-policy\|x-content-type\|x-frame\|strict-transport"
kill %1
```

### 6. Verifikasi khusus
- Klik logo di navbar dan footer — harus navigasi ke `/`, bukan `#`.
- Buka contact modal — submit harus membuka email client (mailto), bukan fake success.
- Periksa footer links — tidak boleh ada yang masih mengarah ke `#` (kecuali section anchor).
- Pastikan `AGENTS.md`, `CLAUDE.md`, dan PRD sudah dihapus.
- Periksa response headers.

## Yang Perlu Dilaporkan
- Apakah build dan lint berhasil?
- Hasil `npm audit`: ada advisory tersisa?
- HTTP status code smoke test (harus 200).
- Security headers ada di response?
- Apakah link mati sudah diperbaiki?
