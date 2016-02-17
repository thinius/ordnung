import express from 'express';
import { notFoundMiddleware, errorMiddleware } from '../components/errors';
import user from './user.routes';

const router = express.Router();

router.use('/users', user);


router.use(notFoundMiddleware);
router.use(errorMiddleware);

export default router;
