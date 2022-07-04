const { Chef, ChefDetailDuration, Recipe } = require('./class')
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

    static readRecipes(cb){
        let query = `SELECT "id", "name", "duration", "category", "totalVote" FROM "Recipes"`
        pool.query(query, (err, res) => {
            if(err){
                cb(err, null)
            }else{
                let recipes = res.rows
                recipes = recipes.map(({id, name, duration, category, totalVote}) => {
                    return new Recipe(id, name, duration, category, totalVote)
                })
                cb(null, recipes)
            }
        })
    }
}

module.exports = Model