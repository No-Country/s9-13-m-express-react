import { Request, Response } from 'express';
import User from '../utils/queryTest';
import { jwtUtils } from '../utils/jwtUtils';
import jwt from 'jsonwebtoken';
import { transporter } from '../config/smptConfig';

const env = {
  JWT_SECRETS: process.env.JWT_SECRETS || '',
};

const forgotPassword = (req: Request, res: Response) => {
  const { email } = req.body;
  if (email) {
    //FIND USER BY EMAIL
    User.findByEmail(email)
      .then((data) => {
        const { id, name, email } = data.user;
        //BUILD TOKEN
        const token = jwt.sign({ id, name, email }, env.JWT_SECRETS, { expiresIn: '3 min' });
        //SAVE TOKEN IN USER
        User.updateToken({ id, token })
          .then((user) => {
            //SEND EMAIL
            const { name, email, token } = user.user;
            const mail = transporter.sendMail({
              from: `"SWAP SKILL" ${process.env.SMTP_SENDER}`,
              to: email,
              subject: 'Change password',
              text: `Hi! ${name}\n\n Go to the link to change password https://${process.env.CODESPACE_NAME}-${process.env.PORT}.${process.env.GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN}/api/v1/recovery_password/${token}\n This link will expire in 3 mins`,
            });
            res.status(200).json({ message: 'Ok', data, mail });
          })
          .catch((error) => {
            res.status(404).json({ message: 'Something went wrong', error });
          });
      })
      .catch((error) => {
        res.status(404).json({ message: 'It could not found user', error });
      });
  } else {
    res.status(400).json({ message: 'Required fields', fields: { email: 'string*' } });
  }
};

const recoveryPassword = (req: Request, res: Response) => {
  const token = req.params.token;
  const { newPassword } = req.body;

  if (newPassword && token) {
    //TOKEN EXPIRE VALIDATION
    try {
      jwtUtils.verifyToken(token);
    } catch (error: any) {
      res.status(401).json({ message: 'Invalid authentication token or unauthorized user', error });
    }

    //FIND USER BY TOKEN
    User.findByToken(token)
      .then((user) => {
        const { id } = user.user;
        console.log({ user });
        //EDIT PASSWORD
        const userUpdated = User.updatePassword({ id, newPassword });
        res.status(200).json({ message: 'OK', data: userUpdated });
      })
      .catch((error) => {
        res.status(404).json({ message: 'It could not found user', error });
      });
  } else {
    res.status(400).json({ message: 'Required fields', fields: { newPassword: 'string*' } });
  }
};

export { forgotPassword, recoveryPassword };
