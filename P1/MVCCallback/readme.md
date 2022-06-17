# `playlist`
Kalian diminta membuat sebuah mini app, untuk mengedit isi dalam sebuah playlist yang tersimpan di dalam sebuah DB/Json.

## `release 0`
1. Lakukan setup untuk membuat struktur folder `MVC`.
2. Lakukan pembuatan class `Song`, yang akan digunakan untuk menginstantiate setiap lagu yang dibaca dari DB/Json.
    Class `Song` akan memiliki properti sebagai berikut :
    - `id`, nomor unik dari setiap lagu yang digunakan untuk membedakan antara satu lagu dengan lagu lainnya.
    - `title`, judul lagu.
    - `artist`, penyanyi yang menyanyikan lagu tersebut.
    - `duration`, total durasi dari lagu dalam hitungan detik


## `Release 1`
Buatlah sebuah file yang bernama `app.js`, dimana file tersebut akan menerima request dari user melalui terminal.
Berikut adalah list request yang bisa user input :
1. `node app.js showSongs`, perintah tersebut akan menampilkan semua lagu yang ada di DB/Json.
2. `node app.js addSong <title> <artist> <duration>`, perintah tersebut akan digunakan untuk menambah lagu yang mau disimpan ke dalam DB/Json.
3. `node app.js delete <Song id>`, perintah tersebut akan digunakan untuk menghapus satu lagu yang ada di DB/Json sesuai dari `id` yang diinput.


## Note
Gunakan stukrtur MVC.