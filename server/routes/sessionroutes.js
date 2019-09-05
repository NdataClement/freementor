import express from 'express';
import Sessions from '../controllers/sessions';
import auth from '../middleware/auth';
import { ismentor, checkinput, isavailable } from '../middleware/mentorvalidation';

const router = express.Router();

router.post('/sessions', [auth, checkinput], Sessions.createSession);
router.patch('/sessions/:sessionId/accept', [auth, ismentor, checkinput, isavailable], Sessions.acceptSession);
router.patch('/sessions/:sessionId/decline', [auth, ismentor, checkinput, isavailable], Sessions.declineSession);

export default router;