// let arr = [1, 2, 3]
// let newArr = arr.map((el) => { return el * 5})
// console.log(newArr); // [5, 10, 15]


class Arr{
    constructor(arr){
        this.value = arr
    }

    mapManual(callback){
        let result = []
        // console.log(callback);
        /*
        (element) => { 
            return el * 10
        }
        */
        for(let number of this.value){ // [1, 2, 3]
            // callback dieksekusi untuk mengubah nilai setiap element sebelum ditampung pada array baru
            let newNumber = callback(number) // 10 20 30
            // console.log(newNumber);
            result.push(newNumber)
        }

        return result
    }
}

let arr = new Arr([1, 2, 3]) // object instance
// console.log(arr);
let hasilMapManual = arr.mapManual(({}) => { return el * 10})

console.log(hasilMapManual);