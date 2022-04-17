function authJwt(req, res, next) {
    if (true) {
        next();
    } else {
        next(new Error('Unauthorized'));
    }
}

module.exports = authJwt