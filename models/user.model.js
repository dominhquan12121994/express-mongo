const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    _id: Schema.Types.ObjectId,
    email: { type: String },
    wallet_address: { type: String },
}, { timestamps: true, collection: 'users', });

const UserModel = mongoose.model('user', UserSchema);
module.exports = UserModel;
