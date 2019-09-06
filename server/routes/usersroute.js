import express from 'express';
import Users from '../controllers/users';
import { usersignup, userlogin, isadmin } from '../middleware/uservalidation';
import auth from '../middleware/auth';

const router = express.Router();

router.post('/auth/signup', usersignup, Users.signup);
router.post('/auth/signin', userlogin, Users.login);
router.get('/users/all', Users.getAllUsers);

router.patch('/users/:id', [auth, isadmin], Users.changeMentor);


export default router;