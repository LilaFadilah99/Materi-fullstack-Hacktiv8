// Promise Dasar
function cintaAtauTidak(perasaan){ // Async
    return new Promise( (resolve, reject) => {
        // tempat melakukan logic, yang akan menentukan hasil resolve atau reject
        if(perasaan === 'bingung'){
            resolve('Maaf aku belum bisa menentukan sekarang, beri aku waktu')
        }else if(perasaan === 'iya'){
            resolve(`Aku masih cinta dengan dirimu`)
        }else if(perasaan === "tidak"){
            reject(`Maaf, aku sudah tidak cinta lagi dengan dirimu`)
        }
    }) // Promise {}
}

// obj Promise
cintaAtauTidak('tidak')
.then((res) => { // menerima data dari resolve
    console.log(res);
})
.catch((err) => { // menerima data dari reject
    console.log(err);
})

console.log("hehehehehhehehehehehehhe");