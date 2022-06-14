class Song{
    #downvote
    constructor(id, title, artist, duration, upvote = 0, downvote = 0){
        this.id = id
        this.title = title
        this.artist = artist
        this.duration = +duration
        this.upvote = upvote
        this.#downvote = downvote
    }

    get downvote(){
        return this.#downvote
    }

    set downvote(vote){
        this.#downvote++
    }

    toJSON(){ // bertugas membuat bentuk obj yang mau disimpan dalam bentuk json
        return {
            id: this.id,
            title: this.title,
            artist: this.artist,
            duration: this.duration,
            upvote: this.upvote,
            downvote: this.downvote,
        }
    }
}

module.exports = Song