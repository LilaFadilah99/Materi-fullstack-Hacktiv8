// Factory Method adalah sebuah konsep yang menggunakan class Factory dan static method, tujuan dari pembuatan factory method adalah membuat satu jalur terpusat yang mengatur jalanya pemanggilan proses instatiate
class Mie{
    constructor(spicyness, topping){
        this.spicyness = spicyness
        this.topping = topping
    }
}

class NasiGoreng{
    constructor(spicyness, topping){
        this.spicyness = spicyness
        this.topping = topping
    }
}

class Bakso{
    constructor(spicyness, topping){
        this.spicyness = spicyness
        this.topping = topping
    }
}

class Seblak{
    constructor(spicyness, topping){
        this.spicyness = spicyness
        this.topping = topping
    }
}

// class Factory yang mengatur pemanggilan masing - masing class yang membuat object instance
class Restaurant{

    static order(food, spicyness, topping, jenisNasi){ // 'Mie', 5, 'Sosis'
        if(food === 'Mie'){
            return new Mie(spicyness, topping)
        }else if(food === 'Nasi Goreng'){
            return new NasiGoreng(spicyness, topping, jenisNasi)
        }else if(food === 'Seblak'){
            return new NasiGoreng(spicyness, topping)
        }else{
            return new Bakso(spicyness, topping)
        }
    }

}

let pesanan1 = Restaurant.order('Mie', 5, 'Sosis') 
let pesanan2 = Restaurant.order('Nasi Goreng', 3, 'Jengkol', 'Shirataki') 
let pesanan3 = Restaurant.order('Bakso', 10, 'Pangsit Goreng') 

console.log(pesanan1);
console.log(pesanan2);
console.log(pesanan3);