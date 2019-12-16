const Router = require('koa-router');
const adminController = require('../controllers/admin/admin.controllers');

const router = new Router();

router.get('/', adminController.get);

router.post('/', adminController.create);

router.post('/find', adminController.getById);

router.put('/', adminController.update);

router.delete('/', adminController.remove);

module.exports = router
