const Chef = require('../models/chef')
const { date } = require('../../lib/utils')

module.exports = {
    index(req, res) {

        Chef.all(function(items) {
            return res.render("admin/chefs/index", { items })
        })
    },
    create(req, res){

        return res.render("admin/chefs/create")
    },
    post(req, res){

        const keys = Object.keys(req.body)

        for (key of keys) {
            if (req.body[key] == "") {
                return res.send("Please fill all fields.")
            }
        }

        Chef.create(req.body, function(chef) {
            return res.redirect(`chefs/${chef.id}`)
        })
    },
    show(req, res){

        Chef.find(req.params.id, function(chef) {
            if (!chef) return res.send('Chef not found!')

            chef.created_at = date(chef.created_at).format
  
            Chef.allRecipesByChef(req.params.id, function(items) {
    
                return res.render("admin/chefs/show", { chef, items })
            })
        })
    },
    edit(req, res){

        Chef.find(req.params.id, function(chef) {
            if (!chef) return res.send('Chef not found!')

            return res.render("admin/chefs/edit", { chef })
        })
    },
    put(req, res){

        const keys = Object.keys(req.body)

        for (key of keys) {
            if (req.body[key] == "") {
                return res.send("Please fill all fields.")
            }
        }

        Chef.update(req.body, function() {
            return res.redirect(`chefs/${req.body.id}`)
        })
    },
    delete(req, res){

        Chef.delete(req.body.id, function() {
            return res.redirect('chefs')
        })
    }
}