class Car{
    constructor(merk, type, color, releaseYear){ // this
        // dipanggil untuk setup
        this.merk = merk
        this.type = type
        this.color = color
        this.age = this.calculateAge(releaseYear)// 3
    }


    // sebelum object instace terbuat
    calculateAge(releaseYear){
        return new Date().getFullYear() - releaseYear
    }

    // setelah object instance terbuat
    info(){
        console.log(this); // adalah object instance itu sendiri
        console.log(this.merk + " " + this.type + " warna " + this.color); // Lexus RX 3000 warna Black
    }

    honk(){ // instance method
        console.log("Bipp Bippp!!!");
    }

}

let car1 = new Car("Lexus", "RX 300", "Black", 2019) // Car {}
let car2 = new Car("Honda", "Civic Type R 2022", "White", 2022) //
// object car1 dan car2 baru ada
// console.log(car1);
car1.info()
car2.info()
// car1.honk()