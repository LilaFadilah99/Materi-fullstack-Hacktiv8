function filtering(items, keyword){
    // write your code here ...
    if(items === undefined && keyword === undefined){
        return `Invalid input`
    }else if(items.length === 0){
        return `No item found in database`
    }else if(keyword === ""){
        return `keyword can not be empty string`
    }

    let result = []

    for(let i = 0; i < items.length; i++){
        let item = items[i]
        if(item.type === keyword){
            result.push(item)
        }
    }

    if(result.length === 0){
        return `${keyword} products are not found`
    }

    return result
}

let products = [
    {
        name : "Dewa Sri 5 kg",
        type : "Food",
        price : 50000
    },
    {
        name : "Sabun Lifeboi",
        type : "Non Food",
        price : 20000
    },
    {
        name : "Coklat sapi",
        type : "Food",
        price : 2000
    },
    {
        name : "Pasta Gigi Sensitive",
        type : "Non Food",
        price : 16000
    },
    {
        name : "Pisau Oxygen",
        type : "hardware",
        price : 140000
    },
    {
        name : "Sabun Antiseptic Bottol",
        type : "Non Food",
        price : 33000
    },
    {
        name : "Bude Mop",
        type : "hardware",
        price : 120000
    }
]

console.log(filtering(products, "Non Food"));
/*
[
    {
        name : "Dewa Sri 5 kg",
        type : "Food",
        price : 50000
    },
    {
        name : "Coklat sapi",
        type : "Food",
        price : 2000
    }
]
*/

// console.log(filtering(products, "Skin care")); // Skin care products not found

// console.log(filtering(products, ""));  // keyword can not be empty string

// console.log(filtering([], "Food")); // No item found in database

// console.log(filtering()); // Invalid input