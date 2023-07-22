import { Router } from 'express';
import { meetingsController } from '../controllers/meetings.controllers';
import { authenticate } from '../middlewares/auth/authenticate';
import { validator } from '../middlewares/validators/meetings';

const router = Router();

router.get('/', authenticate, meetingsController.getMeetings);

router.get('/:meetingId', authenticate, validator.meetingByIdValidator, meetingsController.getMeetingById);

router.post('/', authenticate, validator.createMeetingValidator, meetingsController.createMeeting);

router.patch('/:meetingId', authenticate, validator.updateMeetingValidator, meetingsController.updateMeeting);

router.delete(
  '/:meetingId',
  authenticate,
  validator.deleteMeetingValidator,
  meetingsController.deleteMeeting
);

export default router;
