/**Express router providing user related routes
 * @requires Express
 */
import { Router } from 'express';
import { loginUser } from 'controllers/users.controllers';
import { validatorLogin } from 'middlewares/validators/users';

const router = Router();

/*ROUTES*/

/*Login*/
router.post('/login', validatorLogin, loginUser);

export { router };
