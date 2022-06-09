class Person {
    constructor(name, age, gender){
        this.name = name
        this.age = age
        this.gender = gender
    }

    // setelah object instance jadi
    hangout(place){
        console.log(`${this.name} pergi ke ${place}`);
        return this
    }

    eat(food){
        console.log(`${this.name} makan ${food}`);
        return this
    }

    watch(movie){
        console.log(`${this.name} menonton film ${movie}`);
        return this
    }
}

// Untuk menggunakan atau membuat method chaining, hal terpenting adalah bentuk data yang dikembalikan dari proses sebelumnya
let vania = new Person('Vania', 28, 'Female')
vania.eat("Mie Gachoan").hangout("Pulau Kenawa").hangout("Norwegia").watch("KKN Desa Penari")
