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

    static validateDate(createdDate){
        let date = new Date().getTime()
        let dateNow = new Date(createdDate).getTime()
        if(dateNow > date){
            return false
        }else{
            return true
        }
    }

    static validateNotes(notes){
        notes = notes.split(" ")
        if(notes.length < 10){
            return false
        }else{
            return true
        }
    }

    static addRecipe(request, response){
        let errMesages = []
        let newRecipe = request.body
        let { createdDate, notes } = newRecipe
        let resultValidateNotes = Controller.validateNotes(notes)
        let resultValidateDate = Controller.validateDate(createdDate) // ini proses validate tanggal
        if(resultValidateDate ===  false) { // ini ngecek hasil validate tanggal
            errMesages.push("Input tanggal salah, maksimal tanggal yang diinput adalah tanggal hari ini")
        }
        if(resultValidateNotes ===  false) { // ini ngecek hasil validate notes
            errMesages.push("Input notes salah, minimum kata yang dinput harus 10 kata")
        }

        if(errMesages.length){
            response.send(errMesages)
        }else{
            Model.addRecipe(newRecipe, (err, data) => {
                if(err){
                    response.send(err)
                }else{
                    console.log(data);
                    response.redirect('/recipes')
                }
            })
        }
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

    static editRecipe(request, response){
        let newData = request.body
        let id = request.params.id
        Model.editRecipe(newData, id, (err, data) => {
            if(err){
                response.send(err)
            }else{
                response.redirect('/recipes')
            }
        })
    }
}

module.exports = Controller