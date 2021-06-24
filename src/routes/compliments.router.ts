import CreateComplimentsController from 'controllers/CreateComplimentsController';
import CreateTagController from 'controllers/CreateTagController';
import { Router } from 'express';
import { ensureAdmin } from 'middlewares/ensureAdmin';
import { ensureAuthenticated } from 'middlewares/ensureAuthenticated';

const complimentsRouter = Router();
complimentsRouter.use(ensureAuthenticated);
complimentsRouter.use(ensureAdmin);
const complimentsController = new CreateComplimentsController();

complimentsRouter.post('/', complimentsController.create);

export default complimentsRouter;
