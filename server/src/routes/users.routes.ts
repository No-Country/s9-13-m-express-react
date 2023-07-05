/**Express router providing user related routes
 * @requires Express
 */
import { Router } from 'express';
import { loginUser, signupUser } from 'controllers/users.controllers';
import { validatorLogin, validatorSignUp } from 'middlewares/validators/users';

const router = Router();

/*ROUTES*/

/*Login*/
router.post('/login', validatorLogin, loginUser);

/*Sign up*/
router.post('/signup', validatorSignUp, signupUser);

export { router };
