let express = require('express');
let router = express.Router();
let authJwt = require('../middlewares/authJwt');

const userController = require('../controllers/user.controller');

router.use(authJwt);

router.get('/', userController.index);
router.post('/', userController.store);
router.patch('/:id', userController.update);

module.exports = router;
