// Polmorphsm // Overiding
class Vehicle{
    constructor(merk, type, color, totalTires){
        this.merk = merk
        this.type = type
        this.color = color
        this.totalTires = totalTires
    }

    honk(){
        console.log("Bipp Bippp");
    }
}

// Class Children
class Car extends Vehicle{ // jgn lupa dikasih extends sebagai asal muasal parent
    constructor(merk, type, machine, color){
        super(merk, type, color, 4) // jgn lupa dikasih super sebagai prose pemanggilan constructor parent
        this.machine = machine
    }
}

class Pedicap extends Vehicle{
    constructor(merk, type, color){
        super(merk, type, color, 3)
    }

    honk(){ // Instance method honk pada class anak akan mengoveride honk pada class orang tua, karena memiliki nama yang sama
        console.log("klontang - klontang");
    }
}

let car = new Car('VW', 'Combi', 1300, 'Sky Blue')
let becak = new Pedicap('Juragan 99', 'Turbo 3000', 'Blue')

// console.log(car);
// console.log(becak);
car.honk()
becak.honk()