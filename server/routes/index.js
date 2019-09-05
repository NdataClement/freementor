import express from 'express';
import mentor from './mentorsroutes';
import session from './sessionroutes';
import user from './usersroute';

const router = express.Router();

router.use('/', mentor);
router.use('/', session);
router.use('/', user);


export default router;