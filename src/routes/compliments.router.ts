import CreateComplimentsController from 'controllers/CreateComplimentsController';
import { Router } from 'express';
import { ensureAuthenticated } from 'middlewares/ensureAuthenticated';

const complimentsRouter = Router();
complimentsRouter.use(ensureAuthenticated);
const complimentsController = new CreateComplimentsController();

complimentsRouter.post('/', complimentsController.create);
complimentsRouter.get('/', complimentsController.list);

export default complimentsRouter;
