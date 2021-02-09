const fs = require('fs')
const data = require('./data.json')

// Create Teacher
exports.post = function(req, res) {
    const keys = Object.keys(req.body)

    for (key of keys) {
        if (req.body[key] == "") {
            return res.send("Please fill all fields.")
        }
    }

    let { avatar_url, name, birth, scholarity, classes, fields } = req.body

    birth = Date.parse(birth)
    const created_at = Date.now()
    const id = Number(data.teachers.length + 1) //Number is not necessary.

    data.teachers.push({
        id,
        name,
        avatar_url,
        birth,
        scholarity,
        classes,
        fields,
        created_at
    })

    fs.writeFile("data.json", JSON.stringify(data, null, 4), function(err) {
        if (err) {
            return res.send("Write file error.")
        }
        return res.redirect("teachers")
    })

    // return res.send(req.body)
}

// Update Teacher

// Delete Teacher