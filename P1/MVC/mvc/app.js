let [command, input1, input2, input3] = process.argv.slice(2)
let Controller = require('./controllers/controller')

if(command === 'showSongs'){
    Controller.readSongs()
}else if(command === 'addSong'){
    Controller.addSong(input1, input2, input3)
}else if(command === 'delete'){
    Controller.deleteSong(input1)
}