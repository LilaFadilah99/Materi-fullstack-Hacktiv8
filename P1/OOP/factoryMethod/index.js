// Static Method
/*
Static Method adalah sebuah method yang dibuat untuk tujuan menyimpan sebuah blok kode, dan dapat digunakan langsung tanpa tergantung proses instatiate
*/
class MathManual {

    static random(){ // static method
        return 'Angka random'
    }

    static floor(){ // static method
        return 'Hasil pembulatan kebawah'
    }

}

let random = MathManual.random()
console.log(random);
