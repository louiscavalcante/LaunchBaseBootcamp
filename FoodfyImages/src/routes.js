// Frameworks && Middlewares
const express = require('express')
const routes = express.Router()
const multer = require('./app/middlewares/multer')

// Controllers
const recipes = require('./app/controllers/recipes')
const chefs = require('./app/controllers/chefs')
const users = require('./app/controllers/users')

// Routes
routes.get("/", users.index)
routes.get("/about", users.about)
routes.get("/recipes", users.recipes)
routes.get("/chefs", users.chefs)
routes.get("/search", users.search)
routes.get("/recipes/:id", users.eachRecipes)

routes.get("/admin/chefs", chefs.index)
routes.get("/admin/chefs/create", chefs.create)
routes.get("/admin/chefs/:id", chefs.show)
routes.get("/admin/chefs/:id/edit", chefs.edit)
routes.post("/admin/chefs", chefs.post)
routes.put("/admin/chefs", chefs.put)
routes.delete("/admin/chefs", chefs.delete)

routes.get("/admin/recipes", recipes.index)
routes.get("/admin/recipes/create", recipes.create)
routes.get("/admin/recipes/:id", recipes.show)
routes.get("/admin/recipes/:id/edit", recipes.edit)
routes.post("/admin/recipes", multer.array("photos", 5), recipes.post)
routes.put("/admin/recipes", multer.array("photos", 5), recipes.put)
routes.delete("/admin/recipes", recipes.delete)

// Export Routes
module.exports = routes