const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const data = require("./data")

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

server.get("/", function(req, res) { 
    return res.render("courses", {items: data})
})

server.get("/about", function(req, res) { 
    return res.render("about")
})

server.get("/courses/:id", function(req, res) {
    const id = req.params.id;
    
    return res.render(`${id}`);
  });

server.use(function(req, res) {
    res.status(404).render("not-found")
})

server.listen(3000, function() {
    console.log("Server is running.")
})