import { Router, Request, Response, } from 'express';
import {forgotPassword, recoveryPassword} from '../controllers/recoryPassword.controllers'


const router = Router()


router.post('/forgot_password', forgotPassword);


router.route('/recovery_password/:token')
    //Opcional, sirve si la url esta dirigida o tiene el hostname del backend
    .get(function (req: Request, res: Response) {
        const token = req.params.token
        //Enviar al client con el mismo token
        res.redirect(`http://localhost/recovery_password/${token}:3000`)
    })
    .put(recoveryPassword);



export default router;

//Referencias:
// Mas info sobre jsonwebtoken: https://stackoverflow.com/questions/56855440/in-jwt-the-sign-method#:~:text=If%20you%20read,log(asyncToken)%3B%0A%7D)%3B
// Como enviar correo con nodemailer: https://medium.com/@chiragmehta900/how-to-send-mail-in-node-js-with-nodemailer-in-typescript-889cc46d1437