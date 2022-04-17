const userService = require('../services/user.service');

function index(req, res) {
    userService.getAll().then(users => {
        return res.json({
            message: 'success',
            status: 1,
            users: users
        });
    }).catch(error => {
        next(error);
    })
}

function update(req, res) {
    const userId = req.params.id;
    const user = req.body;
    userService.update(userId, user).then(user => {
        return res.json({
            message: 'success',
            status: 1,
            user: user
        });
    }).catch(error => {
        next(error);
    })
}

function store(req, res, next) {
    const user = req.body;
    userService.store(user).then(user => {
        return res.json({
            message: 'success',
            status: 1,
            user: user
        });
    }).catch(error => {
        next(error);
    })
}

module.exports = {
    index: index,
    update: update,
    store: store
}