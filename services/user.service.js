const userRepository = require('../repositories/user.repository');

function getAll(req) {
    return userRepository.getAll(req);
}

function store(user) {
    return userRepository.store(user);
}

function update(userId, user) {
    return userRepository.update(userId, user);
}

module.exports = {
    getAll: getAll,
    update: update,
    store: store
}