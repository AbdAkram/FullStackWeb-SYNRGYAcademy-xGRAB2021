const {Comment} = require("../models");
function createUser(req, res) {
    var { username, password } = req.body;
    var { firstName, lastName } = req.body.Data
    Comment.create({
        username: username,
        password: password,
        Data: [{
            firstName: firstName,
            lastName: lastName
        }]
    }, {
        include: [{ model: Data }]
    }).then((response) => {
        res.json(response)
    }).catch((error) => {
        res.json(error)
    })
}