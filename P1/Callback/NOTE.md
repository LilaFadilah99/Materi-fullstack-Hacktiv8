# `Sync And Async`

1. `Synchronous`, adalah proses berjalan nya kode yang saling menunggu satu dengan yang lain secara berurutan.

2. `Asynchronous`, adalah proses berjalan nya kode yang tidak saling menunggu satu dengan yang lain, dimana yang lebih cepat akan selesai duluan.

<br>

# `Callback`

## `Apa itu Callback ?`

<hr>

`Callback` adalah sebuah Function yang menjadi `argumen` pada pemanggilan Function lain,

Callback akan dijalankan didalam function tersebut pada waktu tertentu.

<br>

## `Kenapa menggunakan Callback ?`

<hr>

1. `Flexibel`, mudah melakukan perubahan

2. `Extendable`, mudah melakukan penambahan

3. `Reuseable`, bisa dipakai berkali - kali jika diperlukan.

4. `Built in Function`, Beberapa built in function yang menggunakn callback.

5. `Asynchronous`, Dapat memanfaatkan callback pada proses Asynchronous

<br>

## `Reminder`

<hr>

**Tidak semua callback menjalankan proses Asynchronous, beberapa diantaranya tetap menjalankan proses Synchronous.**

**Jika sebuah kode berjalan dengan cara Asynchronous, maka kita tidak bisa menunggu balikan dari kode tersebut**