// Enkapsulasi
class Person {
    #phoneNumber // buat pernyataan di atas construtor
    constructor(name, age, gender, phoneNumber){
        this.name = name
        this.age = age
        this.gender = gender
        this.#phoneNumber = phoneNumber // kasih # diproperti yang bersangkutan
    }

    get phoneNumber(){ // Accessor alias yang ngambil
        // console.log(this);
        return this.#phoneNumber
    }

    set phoneNumber(value){ // Mutator alias yang ngasih value baru
        // console.log(value);
        this.#phoneNumber = value
    }
}

let conny = new Person('Conny', 20, 'Female', '08222333444')

conny.phoneNumber = '0898888432'
console.log(conny.phoneNumber) // pemanggilan getter seperti memanggil properti object (tanpa invoke)