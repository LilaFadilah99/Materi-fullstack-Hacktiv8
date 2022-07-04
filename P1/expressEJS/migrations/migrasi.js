const pool = require('../config/connection')



pool.query(`
DROP TABLE IF EXISTS "Chefs";`,
    (err, res) => {
        if (err) {
            console.log(err);
        } else {
            console.log(res);
            pool.query(`
        CREATE TABLE IF NOT EXISTS "Chefs"(
            "id" SERIAL PRIMARY KEY,
            "fullName" VARCHAR(120) NOT NULL,
            "birthDate" DATE NOT NULL,
            "gender" VARCHAR(6) NOT NULL,
            "city" VARCHAR(20) NOT NULL
        );`,
                (err, res) => {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log(res);
                    }
                }
            )
        }
    }
)
