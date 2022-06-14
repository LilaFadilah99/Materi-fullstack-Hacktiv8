let Model = require('../models/model')
let View = require('../views/view')

class Controller {
    //static method 
    static readSongs(){
        let songs = Model.readSongs() // balikan [Song, Song, Song]
        View.showSongs(songs)
    }

    static addSong(title, artist, duration){
        let newSong = Model.addSong(title, artist, duration)
        View.addSuccess(newSong)
    }

    static deleteSong(id){
        let deletedSong = Model.deleteSong(id)
        if(deletedSong){ //contoh dari error handler ketika data tidak ditemukan
            View.deleteSuccess(deletedSong)
        }else{
            View.notFound(id)
        }
    }
}

module.exports = Controller