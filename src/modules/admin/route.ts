import * as express from 'express';
import { AllUser } from '../../controller/admin/controller';

const router = express.Router();

router.route('/admin/users').get(AllUser);
module.exports = router;
