const pool = require('../config/connection')

let queryInsertCategories = `
INSERT INTO "Categories" ("name")
VALUES
('Sembako'),
('Kesehatan'),
('Elektronik');
`
let queryInsertProducts = `
INSERT INTO "Products" ("name", "category", "stock", "price", "productDate")
VALUES
('Minyak Kelapa', 1, 15, 20000, '2021-02-03'),
('Minyak Sawit', 1, 9, 23000, '2021-02-01'),
('Minyak Nabati', 1, 3, 15000, '2021-02-03'),
('Beras', 1, 5, 3000, '2021-04-03'),
('Gula', 1, 30, 1000, '2021-02-05'),
('Gula Merah', 1, 45, 550, '2021-02-16'),
('Telur', 1, 28, 2100, '2021-02-17'),
('Vitamin C', 2, 5, 50000, '2021-03-08'),
('Vitamin D', 2, 20, 160000, '2021-02-09'),
('Minyak Ikan Omega 3', 2, 12, 180000, '2021-03-10'),
('Vitamin A', 2, 52, 20000, '2021-02-03'),
('Minyak Kayu Putih', 2, 12, 15000, '2021-04-12'),
('NaCL', 2, 99, 7000, '2021-04-06'),
('Betadine', 2, 52, 11000, '2021-02-13'),
('Setrika', 3, 2, 230000, '2021-02-14'),
('Kulkas', 3, 4, 1450000, '2021-02-15'),
('Televisi', 3, 23, 980000, '2021-03-16'),
('Mesin Cuci', 3, 8, 2300000, '2021-03-17'),
('Komputer', 3, 17, 1200000, '2021-04-18'),
('Lampu', 3, 42, 64000, '2021-02-19');
`
// Proses seeding bisa ada tau tidak, tergantung ada atau tidaknya data yang mau disimpan diawal setup.
// Proses seeding jika ada relasi juga dibuat secara berurutan dari yang jadi sumber, baru yang menggunakan
pool.query(queryInsertCategories, (err, res) => {
    if(err){
        console.log(err);
    }else{
        console.log("INSERT Categories berhasil");
        // console.log(res);
        pool.query(queryInsertProducts, (err, res) => {
            if(err){
                console.log(err);
            }else{
                console.log("INSERT Products berhasil");
            }
        })
    }
})