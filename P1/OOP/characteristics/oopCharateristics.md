# `Karakteristik OOP`

## `OOP memiliki 4 karakteristik:`

1.  Abstraction
Proses abstraksi, cukup memberi tahu apa yang dibutuhkan dan apa yang dihasilkan (input/output) untuk melakukan sesuatu
tanpa harus memberi tau proses secara keseluruhannya

```js
// kita tidak tahu bagaimana caranya method getFullYear bisa mendapatkan tahun dari sebuah Date
let year = new Date().getFullYear() // 2021
// yang perlu kita tahu adalah bagaimana cara menggunakannya dan apa yang akan kita dapatkan
```

2.  Encapsulation
Menyembunyikan informasi dan membatasi akses dari luar
bertujuan untuk melindungi data agar tidak diakses/manipulasi dari luar

property pada class memiliki level tertentu:
- public, yang bisa diakses secara bebas dari dalam maupun luar
- private, HANYA boleh diakses dari dalam

```js
// legacy / old version 
class Car {
    constructor(model, price){
        this.model = model
        this._price = price
        // private method ditandakan dengan _ sebelum penamaan property
    }
}

// new version 
class Car {
    #price // private property di daftarkan dulu sebelum dipakai pada constructor
    constructor(model, price){
        this.model = model
        this.#price = price
    }
}
```

Accessor dan Mutator:
- Accesor, jalur akses untuk mengambil data yang dibuat khusus untuk private property
    menggunakan get (sebagai getter)
- Mutator, jalur akses untuk mengubah data yang dibuat khusus untuk private property
    menggunakan set (sebagai setter)

```js
class Car {
    #price // private property di daftarkan dulu sebelum dipakai pada constructor
    constructor(model, price){
        this.model = model
        this.#price = price
    }

    // get/getter/accesor dipakai untuk mengambil value dari private property jika ingin dipakai diluar instance
    get price(){
        return this.#price
    }

    // set/setter/mutator dipakai untuk mengubah value dari private property jika ingin mengubah dari luar instance
    set price(value){
        this.#price = value
    }
}
```

3.  Inheritance
Data yang dimiliki oleh suatu class bisa diturunkan kepada class lain nya.

Penggunaan syntax `extends` pada saat pembuatan class sebagai penanda bahwa class tersebut merupakan turunan dari class lainnya.

keyword `super` pada child class (class turunan) merupakan penghubung antara child class dengan parent class (class orang tuanya)

```js
class Feline {
    constructor(nama, tipe, berat) {
        this.nama = nama;
        this.tipe = tipe;
        this.berat = `${berat} kg`
    }

    speak() {
        console.log('miaw');
    }
}

class Cat extends Feline {
    constructor(nama, berat) {
        super(nama, 'kucing', berat) // invoke constructor dari orang tua
    }

    drink() {
        console.log('sedang minum susu');
    }
}

let cat = new Cat('bob', 2)
console.log(cat); // Cat { nama: 'bob', tipe: 'kucing', berat: '2 kg' } 
```

4.  Polmorphsm
Mengubah instance method yang dibawa dari parent class sesuai kebutuhan child class

terbagi menjadi 2:
1. Overriding,
menulis ulang instance method dengan nama yang sama sehingga method yang dibawa dari parent class akan ke overwrite

```js
class Feline {
    constructor(nama, tipe, berat) {
        this.nama = nama;
        this.tipe = tipe;
        this.berat = `${berat} kg`
    }

    speak() {
        console.log('miaw');
    }
}

class Cat extends Feline {
    constructor(nama, berat) {
        super(nama, 'kucing', berat) // invoke constructor dari orang tua
    }

    drink() {
        console.log('sedang minum susu');
    }

    // overriding
    speak() {
        console.log('Diriku kucing')
    }
}

let cat = new Cat('bob', 2)
cat.speak() // 'Diriku kucing'
```

2. Overloading (tidak support di JavaScript),
membuat sebuah method baru dengan nama yang sama namun menerima jumlah parameter yang berbeda,
sehingga method yang akan dijalankan saat di-`call` tergantung dari jumlah argumen(parameter) yang dimasukkan saat `call`.

```js
class Feline {
    constructor(nama, tipe, berat) {
        this.nama = nama;
        this.tipe = tipe;
        this.berat = `${berat} kg`
    }

    speak() {
        console.log('miaw');
    }
}

class Cat extends Feline {
    constructor(nama, berat) {
        super(nama, 'kucing', berat) // invoke constructor dari orang tua
    }

    drink() {
        console.log('sedang minum susu');
    }

    // overloading
    speak(word) {
        console.log(`aku ingin mengatakan ${word}`)
    }
}

let cat = new Cat('bob', 2)
cat.speak() // 'miaw'
cat.speak('hello world') // 'aku ingin mengatakan hello world'
//! Ingat ya... overloading tidak di-support di javascript
// contoh di atas adalah perumpamaan kinerja dari overloading
```