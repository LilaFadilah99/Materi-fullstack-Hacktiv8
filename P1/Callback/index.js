// Perbandingan proses Sync dan Async
// Synchronous (urutan)
// console.log("A");
// console.log("B");
// console.log("C");
// console.log("D");

// Asynchronous
// setTimeout(() => {
//     console.log('1');
// }, 4000) // built-in function, dia kasih waktu jeda sebelum sebuah proses dijalankan.

// setTimeout(() => {
//     console.log('2');
// }, 3000) // built-in function, dia kasih waktu jeda sebelum sebuah proses dijalankan.

// setTimeout(() => {
//     console.log('3');
// }, 5000) // built-in function, dia kasih waktu jeda sebelum sebuah proses dijalankan.

// setTimeout(() => {
//     console.log('4');
// }, 2000) // built-in function, dia kasih waktu jeda sebelum sebuah proses dijalankan.


// barengan

let data = null

setTimeout(() => { // Async
    data = 'Gak Null'
    console.log(data);
}, 4000) // built-in function, dia kasih waktu jeda sebelum sebuah proses dijalankan.

