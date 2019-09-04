import express from 'express';
import Users from '../controllers/users';
import Sessions from '../controllers/sessions';
import auth from '../middleware/auth';

const router = express.Router();

router.post('/auth/signup', Users.signup);
router.post('/auth/signin', Users.login);
router.get('/users', Users.getAllUsers);
router.get('/mentors', auth, Users.getAllMentors);
router.get('/mentors/:id', auth, Users.getSpecificMentor);

router.patch('/users/:id', auth, Users.changeMentor);

router.post('/sessions', auth, Sessions.createSession);
router.patch('/sessions/:sessionId/accept', auth, Sessions.acceptSession);
router.patch('/sessions/:sessionId/decline', auth, Sessions.declineSession);


export default router;