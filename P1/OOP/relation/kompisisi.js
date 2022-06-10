// Relasi
// Komposisi Adalah sebuah relasi antara 2 Class / Object, dimana masing masing class/object tidak bisa ada tanpa class/object lainnya

// Class Pemilik // Laptop
class Laptop {
    constructor(merkLaptop, typeLaptop, merkProcessor, typeProcessor){
        this.merk = merkLaptop
        this.type = typeLaptop
        this.processor = new Processor(merkProcessor, typeProcessor)
    }
}

// Class dimiliki // Processor
class Processor{
    constructor(merk, type){
        this.merk = merk
        this.type = type
    }

    spesifikasi(){
        console.log(`Aku adalah processor ${this.merk} dengan tipe ${this.type}`);
    }
}

let lenovo = new Laptop('lenovo', 'Ideapad', 'Intel', 'i9')
lenovo.processor.spesifikasi()