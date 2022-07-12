/*
Promise all adalah sebuah metode yang digunakan untuk menjalankan banyak promise bersamaan.
Promise all akan mengeksekusi semua promise secara bersamaan, ketika semua promise menghasil resolve
Maka then baru berjalan.
Jika salah satu promise reject, maka semua proses yang terjadi dan belum akan diabaikan
*/
// kalo mau jalan - jalan
// waktu, tenaga, uang


function waktu(status){
    return new Promise( (resolve, reject) => {
        if(status === true){
            resolve("Bisa ambil cutiiii")
        }else{
            reject("Cuti tidak di acc")
        }
    })
}

function tenaga(status){
    return new Promise( (resolve, reject) => {
        if(status === true){
            resolve("Gas pollll")
        }else{
            reject("hayati lelah")
        }
    })
}

function uang(status){
    return new Promise( (resolve, reject) => {
        if(status === true){
            resolve("Kuy tabungan banyak")
        }else{
            reject("Uang abis, buat cicilan")
        }
    })
}

Promise.all([waktu(true), tenaga(false), uang(false)]) // resolve, reject, resolve
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err);
})