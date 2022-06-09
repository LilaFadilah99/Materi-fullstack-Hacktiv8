let quotes = [
    {
        quote : "Salah satu pengkerdilan terkejam dalam hidup adalah membiarkan pikiran yang cemerlang menjadi budak bagi tubuh yang malas",
        author : "Hendri",
    },
    {
        quote : "Orang berfikir bahwa uang dapat membeli kebahagiaan, nyatanya kebahagiaan yang di dapat dari uang hanyalah bersifat sementara",
        author : "Annisa",
    },
    {
        quote : "Senyumku ada pada senyummu",
        author : "Aunun",
    },
    {
        quote : "I'm doing better than i was last year, it's me againt me",
        author : "Jihan",
    },
    {
        quote : "Lebih baik berani mencoba dan kemudian mengalami kegagalan, dan kemudian mencoba lagi, daripada takut mencoba dan mengerdil dalam tiadanya perubahan.",
        author : "Dila",
    },
    {
        quote : "Aku ingin keberadaan ku bisa membawa perubahan yang baik, walaupun hanya sedikit",
        author : "Ardi",
    }
]
let music = new Audio("./audio/diri.mp3")
let quote = document.getElementById("quote")
let author = document.getElementById("author")
let playBtn = document.getElementById('play-audio')
let pauseBtn = document.getElementById('pause-audio')
let i = 0

function playMusic(){
    playBtn.style.display = "none"
    pauseBtn.style.display = "inline-block"
    music.play()
}

function pauseMusic(){
    playBtn.style.display = "inline-block"
    pauseBtn.style.display = "none"
    music.pause()
}

setInterval(function(){
    // console.log(i);
    let obj = quotes[i]
    console.log(obj);
    quote.innerHTML = '"' + obj.quote + '."'
    author.innerHTML = '~ ' + obj.author + ' ~'
    if(i === quotes.length - 1){
        i = 0
    }else{
        i++
    }
}, 5000)
