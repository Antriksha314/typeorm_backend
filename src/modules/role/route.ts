import * as express from 'express';

const router = express.Router();

router.route('/role').get();
router.route('/role/create').post();
router.route('/role/:id/update').put();
router.route('/role/:id/delete').delete();
module.exports = router;
