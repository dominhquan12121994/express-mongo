const userService = require('../services/user.service');

async function index(req, res) {
    try {
        let users = await userService.getAll(req)
        res.json({
            users: users
        })
    }
    catch (error) {
        next(error);
    }
}

async function update(req, res) {
    const userId = req.params.id;
    console.log(userId)
    const user = req.body;
    console.log(user)
    try {
        let updatedUser = await userService.update(userId, user)
        res.json({
            updatedUser: updatedUser
        })
    }
    catch (error) {
        next(error);
    }
}

async function store(req, res, next) {
    try {
        let reqData = req.body
        let newUser = await userService.store(reqData)
        res.json({
            newUser: newUser
        })
    }
    catch (error) {
        next(error);
    }
}

module.exports = {
    index: index,
    update: update,
    store: store
}