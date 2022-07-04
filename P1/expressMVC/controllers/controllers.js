const Model = require('../models/model')

class Controller{
    static renderHome(request, response){
        response.render('home')
    }

    static readChefs(request, response){
        Model.readChefs((err, data) => {
            if(err){
                response.send(err)
            }else{
                response.render('chefs', { chefs : data})
            }
        })
    }

    static readChefsDetail(request, response){
        Model.readChefsDetail((err, data) => {
            if(err){
                response.send(err)
            }else{
                response.send(data)
            }
        })
    }

    static readRecipes(request, response){
        Model.readRecipes((err, data) => {
            if(err){
                response.send(err)
            }else{
                response.send(data)
            }
        })
    }
}

module.exports = Controller