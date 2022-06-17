let fs = require('fs')
let Song = require('./song')
// Setiap static pada Model saat ini, hanya berfungsi untuk membaca atau menyimpan data.
class Model {

    // Static akan menerima sebuah callback, yang akan dieksekusi setelah proses Async nya selesai dijalankan.
    static readSongs(cb){
        /*
        (err, data) => {} // dari controller
        */ 
        fs.readFile("./database/data.json", 'utf-8', (err, data) => { // async
            if(err){
                cb(err, null)
            }else{
                let songs = JSON.parse(data)
                let newSongs = songs.map(({id, title, artist, duration, upvote, downvote}) =>{ return new Song(id, title, artist, duration, upvote, downvote)})
                cb(null, newSongs)
            }
        })
    }

    static save(songs, cb){
        /*
        (err) = {} // dari controller
        */
        let data = JSON.stringify(songs, null, 4)
        fs.writeFile('./database/data.json', data, (err) => {
            if(err){ // null
                cb(err)
            }else{
                cb(null)
            }
        })
    }
}

module.exports = Model