import express from 'express';
import Sessions from '../controllers/sessions';
import auth from '../middleware/auth';

const router = express.Router();

router.post('/sessions', auth, Sessions.createSession);
router.patch('/sessions/:sessionId/accept', auth, Sessions.acceptSession);
router.patch('/sessions/:sessionId/decline', auth, Sessions.declineSession);

export default router;