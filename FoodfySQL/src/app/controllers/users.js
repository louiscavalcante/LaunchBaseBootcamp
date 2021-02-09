const User = require('../models/user')

module.exports = {
    index(req, res) {

        User.allRecipes_ChefsName(function(items) {
            return res.render("index", { items })
        })
    },
    about(req, res) {

        return res.render("about")
    },    
    recipes(req, res) {

        User.allRecipes_ChefsName(function(items) {
            return res.render("recipes", { items })
        })
    },
    chefs(req, res) {

        User.allChefs_TotalRecipes(function(items) {
            return res.render("chefs", { items })
        })
    },    
    search(req, res) {

        let { filter, page, limit } = req.query

        page = page || 1
        limit = limit || 3
        let offset = limit * (page - 1)

        const params = {
            filter,
            page,
            limit,
            offset,
            callback(items) {

                    let total = 0
                    if(Array.isArray(items) && items.length) {
                        total = Math.ceil(items[0].total / limit),
                        page
                    }
                    const pagination = {                    
                        total,
                        page
                    }
                return res.render("search", { items, pagination, filter })
            }
        }

        User.paginate(params)
    },
    eachRecipes(req, res) {

        User.find(req.params.id, function(items) {
            if (!items) return res.send('Recipe not found!')

            return res.render("eachRecipe", { items })
        })
    }
}