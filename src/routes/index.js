import express from 'express';
import user from './user.routes';

const router = express.Router();

router.use('/users', user);

router.use()
export default router;