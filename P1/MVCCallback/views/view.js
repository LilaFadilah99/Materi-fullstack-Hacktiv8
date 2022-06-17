class View {

    static showSongs(songs){
        console.table(songs)
    }

    static addSuccess(newSong){
        console.log(`Lagu ${newSong.title} berhasil disimpan ke Playlist`);
    }

    static deleteSuccess(deletedSong){
        console.log(`Lagu ${deletedSong.title} berhasil dihapus dari Playlist`);
    }

    static notFound(id){
        console.log(`Lagu dengan ID ${id} tidak ditemukan`);
    }

    static errMesage(err){
        console.log(err);
    }
}

module.exports = View