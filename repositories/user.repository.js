const UserModel = require('../models/user.model');

function getAll() {
    UserModel.find({})
        .select('_id email wallet_address')
        .then(users => {
            return users;
        });
}

function store(req) {
    const user = new UserModel({
        email: req.email,
        wallet_address: req.wallet_address,
    });
    return user.save();
}

function update(id, req) {
    const user = new UserModel({});
    user.updateOne({
        _id: id
    }, {
        $set: req
    });
}

module.exports = {
    getAll: getAll,
    store: store,
    update: update
}