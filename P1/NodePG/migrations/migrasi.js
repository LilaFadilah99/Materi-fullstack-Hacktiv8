const pool = require('../config/connection') // <== mengambil pool yang dibuat oleh config

// Menyiapkan beberapa query untuk proses create table dan drop table
// Jika query terlalu panjang, lebih baik disimpan dalam variabel terpisah, agar lebih rapih
let queryCreateCategories = `
CREATE TABLE IF NOT EXISTS "Categories" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (255) NOT NULL
);
`

let queryCreateProducts = `
CREATE TABLE IF NOT EXISTS "Products" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (255) NOT NULL,
    "category" INTEGER NOT NULL,
    "stock" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,
    "productDate" DATE NOT NULL,
    FOREIGN KEY ("category")
        REFERENCES "Categories"("id")
);
`

let queryDropCategories = `
DROP TABLE IF EXISTS "Categories";
`

let queryDropProducts = `
DROP TABLE IF EXISTS "Products";
`

/*
Contoh struktur penggunaan instance method .query()

```
pool.query('query yang akan dieksekusi', (err, res) => {})
```

Query yang diakan dieksekusi dengan pool.query(), bisa dicoba dulu melalui GUI.
Parameter yang diberikan pada callback pool.query(), adalah err dan res.
*/

// Struktur yang dibuat untuk membuat setup migrasi harus drop terlebih dahulu baru create.
// Pastikan sumber dihapus terakhir dalam proses DROP
// Pastikan sumber dibuat pertama dalam proses Create

pool.query(queryDropProducts, (err, res) => { // <== drop table products karena dia yang pake fk
    if(err){
        console.log(err);
    }else{
        console.log("DROP table Products berhasil");
        pool.query(queryDropCategories, (err, res) => { // <== drop table categories karena dia yang jadi sumber fk
            if(err){
                console.log(err);
            }else{
                console.log("DROP table Categories berhasil");
                pool.query(queryCreateCategories, (err, res) => { // <== create table categories karena dia yang jadi sumber
                    if(err){
                        console.log(err);
                    }else{
                        console.log("CREATE Categories berhasil dibuat");
                        // console.log(res);
                        pool.query(queryCreateProducts, (err, res) => { //<== create table produk karena dia yang pake fk
                            if(err){
                                console.log(err);
                            }else{
                                console.log("CREATE Products berhasil dibuat");
                                // console.log(res);
                            }
                        })
                    }
                })
            }
        })
    }
})

