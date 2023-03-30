import * as express from 'express';
import { signIn, singUp } from '../../controller/auth/controller';

const router = express.Router();

router.route('/auth/signup').post(singUp);
router.route('/auth/signin').post(signIn);

module.exports = router;
