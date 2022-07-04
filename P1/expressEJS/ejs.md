# `EJS`

## `Apa itu EJS ?`
EJS adalah salah satu template engine yang bisa digunakan oleh javascript, dimana fungsi dari sebuah template engine adalah sebagai sebuah sistem yang digunakan untuk menyususun sebuah html yang dijadikan sebuah response.

<br>

## `Step menggunakan EJS dengan Express`
1. Install EJS dengan perintah `npm install ejs`
2. Set `EJS` sebagai `view engine` pada express.
3. Buat sebuah folder bernama `views`, karena ejs yang sudah ter-set akan mencari semua file yang akan di render didalam folder dengan nama `views`
4. Buat file yang akan dirender dalam folder `views`, dengan extension `.ejs`
5. Gunakan `response.render(nama_file_ejs)`, untuk menampilkan hasil render pada sebuah routing.
6. Jika ada data yang akan dikirim, data diletakan dalam sebuah object dan diletakan pada parameter kedua, `response.render(nama_file_ejs, {data})`