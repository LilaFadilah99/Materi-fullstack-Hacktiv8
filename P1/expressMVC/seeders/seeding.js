const pool = require('../config/connection')
const fs = require('fs');
const { toASCII } = require('punycode');

let recipes = JSON.parse(fs.readFileSync('./data/recipes.json', 'utf-8'));
let chefs = JSON.parse(fs.readFileSync('./data/chefs.json', 'utf-8'));

let valueChefs = chefs.map(({fullName, birthDate, gender, city}) => {
    return `('${fullName}', '${birthDate}', '${gender}', '${city}')`
}).join(",\n")

let valueRecipes = recipes.map(({name, duration, category, createdDate, notes, imageUrl, totalVote, ChefId}) => {
    return `('${name}', ${duration}, '${category}', '${createdDate}', '${notes}', '${imageUrl}', ${totalVote}, ${ChefId})`
}).join(",\n")

let querySeedingChefs = `INSERT INTO "Chefs" ("fullName", "birthDate", "gender", "city")
VALUES ${valueChefs};`

let querySeedingRecipes = `INSERT INTO "Recipes" ("name", "duration", "category", "createdDate", "notes" ,"imageUrl", "totalVote", "ChefId")
VALUES ${valueRecipes};`

pool.query(querySeedingChefs, (err, res) => {
    if(err){
        console.log(err);
    }else{
        console.log(res);
        pool.query(querySeedingRecipes, (err, res) => {
            if(err){
                console.log(err);
            }else{
                console.log(res);
            }
        })
    }
})