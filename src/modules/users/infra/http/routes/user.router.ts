import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '@config/upload';
import UserController from '../controller/UserController';
import UserPhotoController from '../controller/UserPhotoController';
import { ensureAuthenticated } from '../../middlewares/ensureAuthenticated';
import { ensureAdmin } from '../../middlewares/ensureAdmin';

const userRouter = Router();
const upload = multer(uploadConfig);
const userController = new UserController();
const photoController = new UserPhotoController();

userRouter.post('/', userController.create);
userRouter.patch(
  '/photo',
  ensureAuthenticated,
  upload.single('photo'),
  photoController.update,
);
userRouter.put('/', ensureAuthenticated, userController.update);
userRouter.get('/', ensureAuthenticated, ensureAdmin, userController.list);

export default userRouter;
