# `PROMISES`

## `Apa sih promise itu ?`
- Promise adalah salah satu metode dimiliki oleh Javascript.
dimana kegunaan dari promise adalah untuk menjalankan sebuah function secara Asynchronous, serta promise memiliki alur yang jauh lebih mudah dibaca dari pada callback.


## `Kenapa kita menggunakan promise ?`
- Karena pada Callback, itu bisa terjadi `Callback hell`.
- Karena pada Callback, argument yang dilempar harus ke parameter yang tepat.

## `Apa saja komponen penyusun promise ?`
- State : Status dari sebuah promise
    - `Pending` : Status dari promise ketika masih berjalan dan belum selesai
    - `Fulfilled` : Status dari promise ketika promise sudah terpenuhi dan berhasil.
    - `Rejected` : Status dari promise ketika promise sudah terpenuhi dan gagal. 

- Callback, menerima 2 parameter:
        - `Resolve` : Fungsi untuk menghandle state promise `Fulfilled`.
        - `Reject` : Fungsi untuk menghandle state promise `Rejected`.

- Action
    - Akan merespon parameter dari callback
    - Ada 3 jenis aksi di promise :
        - `then` : Aksi yang dijalankan setelah menerima hasil dari Resolve
        - `catch` : Aksi yang dijalankan setelah menerima hasil dari Reject
        - `finally` : Aksi yang akan selalu berjalan, ketika hasilnya Resolve atau Reject (`optional`)

## `Jenis - jenis promise yang ada di Javascript ?`
- `Promise dasar`
- `Promise Chaining` adalah proses pemanggilan `Promise` dengan alur berurutan, sehingga `Promise` selanjutnya bisa mendapatkan hasil dari `Promise` sebelumnya.
- `Promise All` adalah proses pemanggilan banyak `Promise` disatu waktu.

## `Bagaimana cara membuat sebuah promises ?`
- Untuk membuat sebuah `Promise` dasar pada javascript, kita harus menginstance class `Promise` yang sudah disediakan oleh javacript. Dimana setiap class `Promise` yang diinstatiate akan menerima sebuah `function/callback` di argumentnya.
- `Function/Callback` pada `Promise` ini memiliki dua paramater, yang pertma `resolve`, dan yang kedua `reject`.
- `Resolve` memiliki fungsi untuk mengandle kondisi promise yang terpenuhi.
- `Reject` memiliki funsgi untuk menghandle kondisi promise yang tidak terpenuhi.

## `Contoh stuktru code Promise`
```js
function nama_function(){  // sebagai fungsi Async
    return new Promise( (resolve, Reject) => {} ); // obj instance
}


nama_function() // obj instance class Promise yang di return oleh function
.then((res) => {
    // untuk handle promise yang berhasil
}) 
.catch((err) => {
    // untuk handle promise yang gagal
})
```