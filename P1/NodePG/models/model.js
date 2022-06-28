const pool = require('../config/connection') // <== require pool karena sekarang databasenya adalah postgresSQL
const {ResultCategory, ResutlProduct} = require('./class')

class Model {   
    static categoryList(cb){

        // Proses fs, diganti menggunakan pool.query() dengan konsep yang sama.
        pool.query(`SELECT * FROM "Categories"`, (err, res) => {
            if(err){
                // console.log(err);
                cb(err, null)
            }else{
                let categories = res.rows
                categories = categories.map((el) => {return new ResultCategory(el.name)})
                // console.log(categories);
                cb(null, categories)
            }
        })
    }
}

module.exports = Model