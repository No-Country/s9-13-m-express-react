import { Request, Response, NextFunction } from 'express';
// const checkRole = (roles) => async (req: Request, res: Response, next: NextFunction) => {
//     try {
//         const { user } = req;
//         const rolesByUser = user.role;
//         const checkValueRol = roles.some((rolSingle) =>
//           rolesByUser.includes(rolSingle)
//         );

//         if (!checkValueRol) {
//         //   handleHttpError(res, "USER_NOT_PERMISSIONS", 403);
//           return;
//         }
//         next();
//       } catch (e) {
//         handleHttpError(res, "ERROR_PERMISSIONS", 403);
//       }
// };

// export default checkRole
