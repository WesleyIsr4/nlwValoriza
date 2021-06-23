import CreateUserController from 'controllers/CreateUserController';
import { Router } from 'express';
import { ensureAdmin } from 'middlewares/ensureAdmin';
import { ensureAuthenticated } from 'middlewares/ensureAuthenticated';

const userRouter = Router();
const userController = new CreateUserController();

userRouter.post('/', userController.create);
userRouter.get('/', ensureAuthenticated, ensureAdmin, userController.list);

export default userRouter;
