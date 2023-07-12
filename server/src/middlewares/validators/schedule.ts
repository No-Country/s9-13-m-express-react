import { NextFunction, Request, Response } from 'express';
import { Result, body, validationResult } from 'express-validator';

const validatorSchedule = [
  body()
    .custom((_value, { req }) => {
      const allowedFields = ['day_of_week', 'start_time', 'end_time', 'user'];
      const receivedFields = Object.keys(req.body);
      return receivedFields.every((field) => allowedFields.includes(field));
    })
    .withMessage('Invalid Fields'),

  body('day_of_week')
    .trim()
    .notEmpty()
    .isString()
    .withMessage('day_of_week required'),
  body('start_time')
    .trim()
    .notEmpty()
    .withMessage('start_time required')
    .isString()
    .withMessage('start_time type is not valid'),
  body('end_time')
    .trim()
    .notEmpty()
    .withMessage('end_time required')
    .isString()
    .withMessage('end_time  type is not valid'),
  body('user')
    .trim()
    .notEmpty()
    .withMessage('User id required')
    .isString()
    .withMessage('User id  type is not valid'),

  (req: Request, res: Response, next: NextFunction) => {
    const error: Result = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({ msg: error.array() });
    }
    next();
  }


];



const validatorUpdateSchedule = [
  body()
    .custom((_value, { req }) => {
      const allowedFields = ['day_of_week', 'start_time', 'end_time', 'user'];
      const receivedFields = Object.keys(req.body);
      return receivedFields.every((field) => allowedFields.includes(field));
    })
    .withMessage('Invalid Fields'),

  body('day_of_week')
    .trim()
    .optional()
    .notEmpty()
    .isString()
    .withMessage('day_of_week required'),
  body('start_time')
    .trim()
    .optional()
    .notEmpty()
    .withMessage('start_time required')
    .isString()
    .withMessage('start_time type is not valid'),
  body('end_time')
    .trim()
    .optional()
    .notEmpty()
    .withMessage('end_time required')
    .isString()
    .withMessage('end_time  type is not valid'),

  (req: Request, res: Response, next: NextFunction) => {
    const error: Result = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({ msg: error.array() });
    }
    next();
  }


];

export { validatorSchedule, validatorUpdateSchedule};
