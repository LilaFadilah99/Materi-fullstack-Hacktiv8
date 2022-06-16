/*
Function Callback bisa dibuat menggunakan 2 cara :
1. Dibuat diluar pemanggilan (Deklarasi)
2. Dibuat didalam pemanggilan (Arrow Function dan Anonymous Function)
*/

// Contoh penggunaan callback pada built-in Function
function callback(el){
    return el * 2
}

let arr = [14, 7, 13, 21, 8, 99]
let newArr1 = arr.map(callback) // dibuat terpisah
let newArr2 = arr.map(function(el){ return el * 2}) // menggunakan anon
let newArr3 = arr.map((el) => { return el * 2}) // menggunakan arrow

// console.log(newArr1);
// console.log(newArr2);
// console.log(newArr3);


// Contoh penggunaan callback pada function yang dibuat secara manual
function Utama(name, birthYear, cb){
    // name = Patra
    // birthYear = 2000
    // cb [Function : Calculate Age]
    
    /*
    (birthYear){ // 2000
        return 2022 - 2000
    }
    */
    let age = cb(birthYear) // 2000 // 22
    console.log(`Nama saya ${name} dan umur saya adalah ${age} Tahun`);
}

function calculateAge(birthYear){
    return 2022 - birthYear
}

Utama('Patra', 2000, calculateAge)
// Nama saya Patra dan umur saya adalah 22 Tahun