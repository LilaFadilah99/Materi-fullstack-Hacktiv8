let [command] = process.argv.slice(2)
const Controller = require('./controllers/controller')

if(command === 'categoryList'){
    Controller.categoryList()
}