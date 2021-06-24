import CreateUserController from 'controllers/CreateUserController';
import UserPhotoController from 'controllers/UserPhotoController';
import { Router } from 'express';
import { ensureAdmin } from 'middlewares/ensureAdmin';
import { ensureAuthenticated } from 'middlewares/ensureAuthenticated';
import multer from 'multer';
import uploadConfig from '../config/upload';

const userRouter = Router();
const upload = multer(uploadConfig);
const userController = new CreateUserController();
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
