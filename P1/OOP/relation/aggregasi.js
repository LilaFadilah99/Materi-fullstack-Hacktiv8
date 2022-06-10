// Relasi - Agregasi
// Agregasi adalah hubungan yang dimiliki antara 2 class/object, tetapi mereka secara keberadaan tidak tergantung satu sama lain.
// Class/object yang memiliki relasi agregasi, ibaratnya mereka bisa mandiri atau bisa memiliki relasi dengan class/object lainnya

class Smartphone{
    constructor(merk, type, color){
        this.merk = merk
        this.type = type
        this.color = color
        this.case = null
    }

    buyCase(phoneCase){
        this.case = phoneCase
    }
}

let poco = new Smartphone('Poco', 'F3', 'White')

class Case{
    constructor(merk, type, material, color){
        this.merk = merk
        this.type = type
        this.material = material
        this.color = color
    }
}

let spigen = new Case('Spigen', 'Poco F3', 'Silicon', 'Black')

poco.buyCase(spigen)
console.log(poco);

// Contoh 2
class PencilCase{
    constructor(color, material){
        this.color = color
        this.material = material
        this.container = []
    }

    buyTool(tool){
        if(this.container.length < 3){
            this.container.push(tool)
        }else{
            console.log('Maaf tempat pensil sudah tidak muat');
        }
    }
}

class Pencil {
    constructor(merk, type){
        this.merk = merk
        this. type = type
    }
}

class Ballpoint{
    constructor(merk, color){
        this.merk = merk
        this.color = color
    }
}

let tempatA = new PencilCase('Purple', 'cloth')

let pencil = new Pencil('Faber Castle', '2B')
let pulpenA = new Ballpoint('Standart 2000', 'Blue')
let pulpenB = new Ballpoint('Snowman', 'Black')
let pulpenC = new Ballpoint('Faster', 'Red')


tempatA.buyTool(pulpenA)
tempatA.buyTool(pulpenB)
tempatA.buyTool(pencil)
tempatA.buyTool(pulpenC)
console.log(tempatA);