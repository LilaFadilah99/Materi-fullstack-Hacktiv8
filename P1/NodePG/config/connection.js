const { Pool } = require('pg') // <== require Class Pool dari pg yang sudah diinstall terlebih dahulu

// Gunakan proses instantiate Class Pool untuk setup koneksi yang akan digunakan untuk sarana komunikasi antara Javascript dengan Postgres SQL
// Data yang dikirim pada saat instantiate, adlah sebuah object yang memiliki 5 properti
// Pastikan teman - teman menggunakan value yang tepat disetiap data yang dikirim
const pool = new Pool({ 
    user: 'postgres',
    host: 'localhost',
    database: 'HoreDB',
    password: 'postgres',
    port: 5432,
})

// Sebelum di exports, cek dulu apakah object instance yang sudah dibuat sudah oke.
module.exports = pool