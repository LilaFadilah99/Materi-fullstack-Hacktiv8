const { Chef, ChefDetailDuration, Recipe, RecipeDetail } = require('./class')
const pool = require('../config/connection')

class Model {
    static readChefs(cb){
        pool.query(`SELECT * FROM "Chefs"`, (err, res) => {
            if(err){
                cb(err, null)
            }else{
                let chefs = res.rows
                chefs = chefs.map(({id, fullName, birthDate, gender, city}) => {
                    return new Chef(id, fullName, birthDate, gender, city)
                })
                cb(null, chefs)
            }
        })
    }

    static readChefsDetail(cb){
        let query = `SELECT c."id", c."fullName", c."birthDate", c."gender", c."city", AVG(r."duration") AS "averageDuration", MIN(r."duration") AS "minDuration", MAX(r."duration") AS "maxDuration" FROM "Chefs" c
        INNER JOIN "Recipes" r
        ON c."id" = r."ChefId"
        GROUP BY c."id"
        ORDER BY "id" ASC;`
        pool.query(query, (err, res) => {
            if(err){
                cb(err, null)
            }else{
                let chefs = res.rows
                chefs = chefs.map(({id, fullName, birthDate, gender, city, averageDuration, minDuration, maxDuration}) => {
                    return new ChefDetailDuration(id, fullName, birthDate, gender, city, +averageDuration, minDuration, maxDuration)
                })
                cb(null, chefs)
            }
        })
    }

    static readRecipes(keywords, cb){
        let query = `SELECT "id", "name", "duration", "category", "totalVote" FROM "Recipes"`
        if(keywords){ // jika keyword terdeteksi, maka ditambahkan kondisi
            keywords = keywords.split(" ")
            keywords = keywords.map((key) => {return `"name" ILIKE '%${key}%'`}).join(" OR ")
            query += `WHERE ${keywords}`
        }
        pool.query(query, (err, res) => {
            if(err){
                cb(err, null)
            }else{
                let recipes = res.rows
                // console.log(recipes);
                recipes = recipes.map(({id, name, duration, category, totalVote}) => {
                    return new Recipe(id, name, duration, category, totalVote)
                })
                cb(null, recipes)
            }
        })
    }

    static readOneRecipe(id, cb){
        let query = `SELECT r."id", r."name", r."duration", r."category", r."createdDate", r."notes", r."imageUrl", r."totalVote", r."ChefId", c."fullName" AS "chefName" FROM "Recipes" r 
        INNER JOIN "Chefs" c 
        ON r."ChefId" = c."id"
        WHERE r."id" = ${id};`
        pool.query(query, (err, res) => {
            if(err){
                console.log(err);
                cb(err, null)
            }else{
                let recipes = res.rows
                // console.log(recipes);
                recipes = recipes.map(({id, name, duration, category, createdDate, notes, imageUrl, totalVote, ChefId, chefName}) => {
                    return new RecipeDetail(id, name, duration, category, createdDate, notes, imageUrl, totalVote, ChefId, chefName)
                })
                cb(null, recipes[0])
            }
        })
    }

    static addRecipe(newRecipe, cb){
        let {name, duration, category, createdDate, notes, imageUrl, ChefId} = newRecipe

        let queryInsertRecipe = `INSERT INTO "Recipes" ("name", "duration", "category", "createdDate", "totalVote", "notes", "imageUrl", "ChefId")
        VALUES ('${name}', ${duration}, '${category}', '${createdDate}', 0, '${notes}', '${imageUrl}', ${ChefId}) RETURNING *;`

        pool.query(queryInsertRecipe, (err, res) => {
            if(err){
                cb(err, null)
            }else{
                cb(null, res.rows)
            }
        })
    }

    static deleteRecipe(id, cb){
        let queryDeleteRecipe = `DELETE FROM "Recipes" WHERE "id" = ${id} RETURNING *;`
        pool.query(queryDeleteRecipe, (err, res) => {
            if(err){
                cb(err, null)
            }else{
                cb(null, res.rows)
            }
        })
    }
}

module.exports = Model