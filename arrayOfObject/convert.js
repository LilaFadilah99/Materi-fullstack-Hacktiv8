function convert(array){
    let result = []
    // write your code here ...
    for(let i = 0; i < array.length; i++){
        let arrHp = array[i] // [ 'Xiomay', 'Poco F3', 5000000 ]
        let merk = arrHp[0] // 'Xiomay'
        let type = arrHp[1] // 'Poco F3'
        let price = arrHp[2] // 5000000

        let objHp = {
            merk,
            type,
            price
        }

        result.push(objHp)
    }

    return result
} 

let data = [
//    merk,     type,       price
    ["Xiomay", "Poco F3", 5000000],
    ["Apel", "12 Pro Max", 23000000],
    ["Semseng", "22 Pro", 22000000],
    ["Appa", "Reno", 3000000]
]

console.log(convert(data));
/*
[
    { 
        merk: 'Xiomay',
        type: 'Poco F3',
        price: 5000000 
    },
    { 
        merk: 'Apel', 
        type: '12 Pro Max',
        price: 23000000 
    },
    { 
        merk: 'Semseng', 
        type: '22 Pro', 
        price: 22000000 
    },
    { 
        merk: 'Appa', 
        type: 'Reno', 
        price: 3000000 
    }
]
*/