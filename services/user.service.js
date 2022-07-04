const userRepository = require('../repositories/user.repository');

async function getAll(req) {
    return await userRepository.getAll(req);
}

async function store(user) {
    return await userRepository.store(user);
}

async function update(userId, user) {
    return await userRepository.update(userId, user);
}

module.exports = {
    getAll: getAll,
    update: update,
    store: store
}