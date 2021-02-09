const db = require('../../config/db')
const { date } = require('../../lib/utils')

module.exports = {
    all(callback) {

        db.query(
            `SELECT recipes.*, chefs.name AS chef_name
            FROM recipes
            LEFT JOIN chefs ON (recipes.chef_id = chefs.id)
            ORDER BY title ASC`, function(err, results){
            if(err) throw `Database Error! ${err}`

            callback(results.rows)
        })
    },
    create(data) {
        const query = `
            INSERT INTO recipes (
                chef_id,
                title,
                ingredients,
                preparation,
                information,
                created_at
            ) VALUES ($1, $2, $3, $4, $5, $6)
            RETURNING id
        `

        const values = [
            data.chef_id,
            data.title,
            data.ingredients,
            data.preparation,
            data.information,
            date(Date.now()).iso
        ]

        return db.query(query, values)
    },
    find(id, callback) {
        db.query(`
            SELECT recipes.*, count(recipes) AS total_recipes, chefs.name, chefs.avatar_url
            FROM recipes
            LEFT JOIN chefs ON (chefs.id = recipes.chef_id)
            WHERE recipes.id = $1
            GROUP BY recipes.id, chefs.name, chefs.avatar_url`, [id], function(err, results) {
                if(err) throw `Database Error! ${err}
            `
                
                callback(results.rows[0])
        })
    },
    update(data) {

        const query = `
            UPDATE recipes SET
            chef_id=($1),
            title=($2),
            ingredients=($3),
            preparation=($4),
            information=($5)
        WHERE id = $6
        `

        const values = [
            data.chef_id,
            data.title,
            data.ingredients,
            data.preparation,
            data.information,
            data.id
        ]

        return db.query(query, values)
    },
    delete(id) {

        return db.query(`DELETE FROM recipes WHERE id = $1`, [id])
    },
    files(id) {

        return db.query(`
            SELECT * FROM recipe_files WHERE recipe_id = $1
        `, [id])
    },
    chefSelectOptions() {

        return db.query(`SELECT name, id FROM chefs`)
    }
}