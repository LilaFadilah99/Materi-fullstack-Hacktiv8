let fs = require('fs')
let Song = require('./song')

class Model {

    static readSongs(){
        let data = fs.readFileSync("./database/data.json", "utf-8")
        let songs = JSON.parse(data)
        // melakukan proses instantiate pada setiap object yang didapatkan
        let newSongs = songs.map(({id, title, artist, duration, upvote, downvote}) =>{ return new Song(id, title, artist, duration, upvote, downvote)})
        return newSongs
    }

    static addSong(title, artist, duration){
        let songs = this.readSongs()
        let newId = undefined
        
        // Cari id, tergantung dari data hasil baca readSongs()
        if(songs.length > 0){ // kalo ada data nya
            let index = songs.length - 1 // 2
            newId = songs[index].id + 1
        }else{
            newId = 1
        }

        let newSong = new Song(newId, title, artist, duration)
        songs.push(newSong)

        this.save(songs) // panggil static save untuk menyimpan data baru
        return newSong
    }
    
    static deleteSong(id){
        let songs = this.readSongs()
        let newData = songs.filter(el => el.id !== +id)
        let deletedSong = songs.filter(el => el.id === +id)[0]
        this.save(newData)
        return deletedSong
    }
    
    static save(songs){
        // fs.writeFileSync('path lokasi penyimpanan dari terminal', 'data dalam bentuk string')
        let data = JSON.stringify(songs, null, 4)
        fs.writeFileSync('./database/data.json', data)
    }
}

module.exports = Model