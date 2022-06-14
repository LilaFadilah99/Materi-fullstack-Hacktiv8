let fs = require('fs')
// fs.readFileSync('lokasi file yang mau dibaca', 'encoding')
// Lokasi file diambil sesuai posisi kita di terminal

let data = fs.readFileSync('./data.json', 'utf-8')
let songs = JSON.parse(data) // ini adalah sebuah built - in yang digunakan untuk menconvert hasil baca json ke dalam bentuk array of object
console.log(songs);
/*
[
    {
        id: 1,
        title: 'Runtuh',
        artist: 'Feby Putri feat, Fiersa Besari',
        duration: 224
    },
    { 
        id: 2, 
        title: 'Diri', 
        artist: 'Tulus', 
        duration: 244 
    },
    {
        id: 3,
        title: 'Hati - Hati Di Jalan',
        artist: 'Tulus',
        duration: 243
    }
]
*/