const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const videos = require("./data")

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

server.get("/", function(req, res) { 
    const info = {
        avatar_url: "https://avatars0.githubusercontent.com/u/32718388?s=460&v=4",
        name: "Luiz Cavalcante",
        role: "Student - Rocketseat",
        description: 'Launchbase Course by <a href="https://www.rocketseat.com.br',
        links: [
            { name: "Github", url: "https://github.com/Rocketseat" },
            { name: "Instagram", url: "https://www.instagram.com/rocketseat_oficial" },
            { name: "LinkedIn", url: "https://www.facebook.com/rocketseat" }
        ]
    }
    return res.render("about", { items: videos, about: info })
})

server.get("/video", function(req, res) {
    const id = req.query.id

    const video = videos.find(function(video) {
        return video.id == id
    })

    if (!video) {
        return res.status(404).render("not-found")
    }

    return res.render("video", { item: video })
})

server.use(function(req, res) {
    res.status(404).render("not-found")
})

server.listen(3000, function() {
    console.log("Server is running.")
})