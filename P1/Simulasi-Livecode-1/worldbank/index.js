// your code start here..
let [command, input1, input2] = process.argv.slice(2)
let Controller = require('./Controllers/controller')

if(command === 'list'){
    Controller.list()
}else if(command === 'addBank'){
    Controller.addBank(input1, input2)
}else if(command === 'deleteBank'){
    Controller.deleteBank(+input1)
}