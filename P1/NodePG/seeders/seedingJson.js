const pool = require('../config/connection')
const fs = require('fs')

// 1. BACA JSON
let categories = JSON.parse(fs.readFileSync('./data/category.json', 'utf-8'))
// console.log(categories);
/*
('Sembako'),
('Kesehatan'),
('Elektronik')
*/

// 2. OLAH JSON JADI VALUE QUERY
let arr = [];
for(let category of categories){
    arr.push(`('${category.name}')`)
}
arr = arr.join(", ") // ('Sembako'), ('Kesehatan'), ('Elektronik')

// 3. RANGKAI QUERY NYA
let queryInsertCategories = `
INSERT INTO "Categories" ("name")
VALUES ${arr};`

// console.log(queryInsertCategories);

pool.query(queryInsertCategories, (err, res) => {
    if(err){
        console.log(err);
    }else{
        console.log(res);
    }
})