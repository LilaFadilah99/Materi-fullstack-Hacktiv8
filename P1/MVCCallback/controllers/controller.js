/*
Agar mempermudah proses asynchronous.
Maka pusat pengolahan logic dipindah ke controller,
Sehingga pada Model hanya ada proses pengambilan data (READ) / penyimpanan data (SAVE)
*/ 

let Model = require('../models/model')
let View = require('../views/view')
let Song = require('../models/song')

class Controller {
    //static method 
    static readSongs(){
        // Proses pemanggilan static pada Model, harus disertakan sebuah callback.
        // callback tersebut akan mengeksekusi proses selanjutnya tergantung dari hasil yang didapatkan setelah proses readFile(Async) selesai.
        Model.readSongs((err, data) => {
            if(err){ //
                View.errMesage(err)
            }else{
                View.showSongs(data)
            }
        }) 
    }

    static addSong(title, artist, duration){
        Model.readSongs((err, data) => { // Memanggil model readSong
            if(err){
                View.errMesage(err)
            }else{
                // pengolahan
                let songs = data
                let newId = undefined
               
                if(songs.length > 0){ // kalo ada data nya
                   let index = songs.length - 1 // 2
                   newId = songs[index].id + 1
                }else{
                   newId = 1
                }

                let newSong = new Song(newId, title, artist, duration)
                songs.push(newSong)

                // menyertakan Model.save() agar data yang diterima oleh callback dapat disimpan kembali setelah dilakukan penambahan data
                Model.save(songs, (err) => { 
                    if(err){
                        View.errMesage(err)
                    }else{
                        View.addSuccess(newSong)
                    }
                })
            }
        })
    }

    static deleteSong(id){
        Model.readSongs((err, data) => {
            if(err){
                View.errMesage(err)
            }else{
                let songs = data
                let newData = songs.filter(el => el.id !== id)
                let deletedSong = songs.filter(el => el.id === id)[0]

                // contoh handle output yang disebabkan data yang ditidak ditemukan
                if(deletedSong){
                    Model.save(newData, (err) => {
                        if(err){
                            View.errMesage(err)
                        }else{
                            View.deleteSuccess(deletedSong)
                        }
                    })
                }else{
                    View.notFound(id)
                }
            }
        })

    }
}

module.exports = Controller