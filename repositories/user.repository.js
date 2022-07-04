const UserModel = require('../models/user.model');
const mongoose = require('mongoose')
const ObjectID = mongoose.Types.ObjectId

async function getAll() {
    return await UserModel.find({})
        .select('_id email wallet_address')
        .then(users => {
            return users;
        });
}

async function store(req) {
    const user = new UserModel({
        _id: ObjectID(),
        email: req.email,
        wallet_address: req.wallet_address,
    });
    return await user.save();
}

async function update(id, req) {
    const user = new UserModel({});
    return await user.updateOne({
        _id: id
    }, {
        $set: {
            email: req.email,
            wallet_address: req.wallet_address,
        }
    }).exec();
}

module.exports = {
    getAll: getAll,
    store: store,
    update: update
}