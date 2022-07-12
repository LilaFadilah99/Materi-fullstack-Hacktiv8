/*
Promise chaining => adalah sebuah metode yang digunakan untuk menjalankan banyak promise secara satu per satu.
*/
// function beli(uang, obj, cb) {
//     console.log(`Saya pergi membeli ${obj.item}`)
    // setTimeout(function () {
    //     let kembalian = uang - obj.harga
    //     if (kembalian > 0) {
    //         console.log(`Saya sudah membeli ${obj.item} uang kembaliannya ${kembalian}`);
    //         cb(kembalian)
    //     } else {
    //         console.log(`uang gk cukup nih buat beli ${obj.item} kembaliannya cuma ${kembalian}`);
    //         cb(uang)
    //     }
    // }, obj.waktu);
// }

/*
1. Buat function
2. buat return yang mengembalikan new Promise
3. Kasih callback pada pemanggilan new Promise
4. Pada callback dikasih 2 parameter, pertama resolve berikutnya reject
5. setup logic yang menghandle resolve atau reject
*/

function beli(uang, obj){ // 100000, baju
    return new Promise( (resolve, reject) => {
        // console.log(`Saya pergi membeli ${obj.item}`)
        setTimeout(function () {
            let kembalian = uang - obj.harga
            if (kembalian > 0) {
                console.log(`Saya sudah membeli ${obj.item} uang kembaliannya ${kembalian}`);
                resolve(kembalian)
            } else {
                console.log(`uang gk cukup nih buat beli ${obj.item} kembaliannya cuma ${uang}`);
                reject("Pulang kerumah buat minta uang lagi")
            }
        }, obj.waktu);
    })
}

let baju = {
    item : "kaos uniqlo",
    harga : 69000,
    waktu : 3000
}

let bobaDrink = {
    item : "King Boba",
    harga : 20000,
    waktu : 2000
}

let ayamGoreng = {
    item : "Ayam McD Spicy",
    harga : 20000,
    waktu : 1000
}

// Kapan pake promise chaining ?
// ketika kita mau menjalankan promise secara berurutan dan membuthkan data dari promise sebelumnya
// jika reject akan mengabaikan semua chaining selanjutnya, tetapi tetap mengeksekusi chaining yang sudah terjadi.
let shopping = true

beli(70000, baju)
.then((sisaUang) => {
    if(sisaUang < 50000){
        throw 'Uang sudah dibawah 50ribu' // throw dapat digunakan untuk melempar proses langsung ke catch
    }else{
        return beli(sisaUang, bobaDrink)
    }
})
.then((sisaUang) => {
   return beli(sisaUang, ayamGoreng)
})
.catch((err) => {
    console.log(err);
    return err
})
.finally(() => {
    shopping = false
})

console.log(shopping);
