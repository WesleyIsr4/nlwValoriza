import CreateUserController from 'controllers/CreateUserController';
import { Router } from 'express';

const userRouter = Router();
const userController = new CreateUserController();

userRouter.post('/', userController.create);

export default userRouter;
