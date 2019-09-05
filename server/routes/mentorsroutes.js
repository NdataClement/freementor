import express from 'express';
import Mentors from '../controllers/mentors';
import auth from '../middleware/auth';

const router = express.Router();

router.get('/mentors', auth, Mentors.getAllMentors);
router.get('/mentors/:id', auth, Mentors.getSpecificMentor);


export default router;