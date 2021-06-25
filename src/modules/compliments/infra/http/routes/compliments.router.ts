import { ensureAdmin } from '@modules/users/infra/middlewares/ensureAdmin';
import { ensureAuthenticated } from '@modules/users/infra/middlewares/ensureAuthenticated';
import { Router } from 'express';
import ComplimentsController from '../controllers/ComplimentsController';

const complimentsRouter = Router();
complimentsRouter.use(ensureAuthenticated);
const complimentsController = new ComplimentsController();

complimentsRouter.post('/', complimentsController.create);
complimentsRouter.get('/', ensureAdmin, complimentsController.list);
complimentsRouter.get('/receiver', complimentsController.listReceiver);
complimentsRouter.get('/sender', complimentsController.listSender);

export default complimentsRouter;
