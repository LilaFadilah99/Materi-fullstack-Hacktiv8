const pool = require('../config/connection')

let queryDropChefs = `DROP TABLE IF EXISTS "Chefs";`

let queryCreateChefs = `CREATE TABLE IF NOT EXISTS "Chefs"(
    "id" SERIAL PRIMARY KEY,
    "fullName" VARCHAR(120) NOT NULL,
    "birthDate" DATE NOT NULL,
    "gender" VARCHAR (6) NOT NULL,
    "city" VARCHAR (20) NOT NULL
);`

let queryDropRecipes = `DROP TABLE IF EXISTS "Recipes";`

let queryCreateRecipes = `CREATE TABLE IF NOT EXISTS "Recipes"(
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (100) NOT NULL,
    "duration" INTEGER NOT NULL,
    "category" VARCHAR (10) NOT NULL,
    "createdDate" DATE NOT NULL,
    "notes" TEXT,
    "imageUrl" VARCHAR(50),
    "totalVote" INTEGER NOT NULL,
    "ChefId" INTEGER NOT NULL,
        FOREIGN KEY ("ChefId")
            REFERENCES "Chefs"("id")
);`

/*
Drop dulu yang pake fk, baru sumber fk nya
Create dulu sumber fk, baru yang pake fk nya
*/

pool.query(queryDropRecipes, (err, res) => {
    if(err){
        console.log(err);
    }else{
        console.log(res);
        pool.query(queryDropChefs, (err, res) => {
            if(err){
                console.log(err);
            }else{
                console.log(res);
                pool.query(queryCreateChefs, (err, res) => {
                    if(err){
                        console.log(err);
                    }else{
                        console.log(res);
                        pool.query(queryCreateRecipes, (err, res) => {
                            if(err){
                                console.log(err);
                            }else{
                                console.log(res);
                            }
                        })
                    }
                })
            }
        })
    }
})