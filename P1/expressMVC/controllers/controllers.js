const e = require('express')
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

    static readRecipes(request, response){ // menghandle routing /recipes tetapi bisa menerima query bisa tidak.
        let keywords = request.query.search
        Model.readRecipes(keywords, (err, data) => {
            if(err){
                response.send(err)
            }else{
                // response.send(data)
                response.render('recipes', { recipes : data })
            }
        })
    }

    static searchRecipes(request, response){ // menerima input dari form
        let keywords = request.body.keywords
        response.redirect(`/recipes?search=${keywords}`)
    }

    static addRecipesPage(request, response){
        Model.readChefs((err, data) => {
            if(err){
                response.send(err)
            }else{
                response.render('addRecipe', { chefs : data})
            }
        })
    }

    static addRecipe(request, response){
        let newRecipe = request.body
        Model.addRecipe(newRecipe, (err, data) => {
            if(err){
                response.send(err)
            }else{
                response.redirect('/recipes')
            }
        })
    }

    static deleteRecipe(request, response){
        let id = request.params.id
        console.log(id);
        Model.deleteRecipe(id, (err, data) => {
            if(err){
                response.send(err)
            }else{
                console.log(data);
                response.redirect('/recipes')
            }
        })
    }

    static editRecipePage(request, response){
        let id = request.params.id
        let recipe = undefined
        let chefs = undefined
        Model.readOneRecipe(id, (err, data) => {
            if(err){
                response.send(err)
            }else{
                recipe = data
                Model.readChefs((err, data) => {
                    if(err){
                        response.send(err)
                    }else{
                        chefs = data
                        response.render('editRecipe', { chefs, recipe })
                    }
                })
            }
        })
    }
}

module.exports = Controller