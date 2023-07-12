import { NextFunction, Request, Response } from 'express';
import { Result, body, validationResult } from 'express-validator';

const validationMember = [
  body()
    .custom((_value, { req }) => {
      const allowedFields = ['name', 'last_name', 'country', 'preferences', 'avatar', 'skills', 'user'];
      const receivedFields = Object.keys(req.body);
      return receivedFields.every((field) => allowedFields.includes(field));
    })
    .withMessage('Invalid Fields'),

  body('name')
    .trim()
    .notEmpty()
    .withMessage('Name required')
    .bail()
    .isString()
    .withMessage('Name is not valid')
    .isLength({ min: 3, max: 30 })
    .withMessage('Last_name must have more than 3 characters and less than 30 characters'),

  body('last_name')
    .trim()
    .notEmpty()
    .withMessage('Last_name required')
    .bail()
    .isString()
    .withMessage('Last_name type is not valid')
    .isLength({ min: 3, max: 30 })
    .withMessage('Last_name must have more than 3 characters and less than 30 characters'),

  body('country')
    .trim()
    .notEmpty()
    .withMessage('Country required')
    .bail()
    .isString()
    .withMessage('Country type is not valid')
    .isLength({ min: 4, max: 25 })
    .withMessage('Country must have more than 4 characters and less than 25 characters'),

  body('preferences.*.description')
    .trim()
    .notEmpty()
    .withMessage('Description is required')
    .bail()
    .isString()
    .withMessage('Description type is not valid')
    .isLength({ min: 5, max: 50 })
    .withMessage('Description must have more than 5 characters and less than 50 characters'),

  body('avatar')
    .trim()
    .notEmpty()
    .withMessage('Avatar required')
    .bail()
    .isString()
    .withMessage('Avatar type is not valid')
    .isLength({ min: 8, max: 100 })
    .withMessage('Avatar must have more than 8 characters and less than 100 characters'),

  ['title', 'category', 'description', 'level'].forEach((field: string) => {
    body('skills.*.' + field)
      .trim()
      .notEmpty()
      .withMessage(field + ' required')
      .bail()
      .isString()
      .withMessage(field + ' type is not valid')
      .isLength({ min: 5, max: 50 })
      .withMessage(field + ' must have more than 5 characters and less than 50 characters');
  }),

  (req: Request, res: Response, next: NextFunction) => {
    const error: Result = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({ msg: error.array() });
    }
    next();
  },
];

const validationCreateMember = [
  body('user')
    .trim()
    .notEmpty()
    .withMessage('User required')
    .bail()
    .isString()
    .withMessage('User type is not valid')
    .isLength({ min: 8, max: 100 })
    .withMessage('User must have more than 8 characters and less than 100 characters'),

  (req: Request, res: Response, next: NextFunction) => {
    const error: Result = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({ msg: error.array() });
    }
    next();
  },
];

export { validationMember, validationCreateMember };
