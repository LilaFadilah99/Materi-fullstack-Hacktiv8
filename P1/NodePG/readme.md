# `Node Postgres`

## `Step menggunakan Package`
1. Inisialisasi NPM di project kita
    - `npm init` / `npm init -y`
2. Baru kita menginstall Package - package yang akan digunakan di Project kita.
    - `npm install <nama package>` 
3. Buat file dengan nama `.gitignore`, yang akan mengabaikan semua file atau folder yang nama nya kita tulis. termasuk `node_modules`.

<hr>

## `Step membuat project MVC + Callback + Node Postgres`
Buat struktur folder yang digunakan
  - `models`
  - `views`
  - `controllers`
  - `config` , untuk melakukan setup koneksi
  - `migrations` , untuk melakukan pembuatan table berserta propertinya
  - `seeders` , untuk melakukan proses input data ke table, jika diperlukan.

<hr>

## `NOTE :` 
- Untuk keterangan detail dimasing - masing proses, silahkan buka file yang bersangkutan.
- Setiap pool.query() hanya bisa menjalankan satu rangkaian query disatu waktu.
