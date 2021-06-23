import CreateTagController from 'controllers/CreateTagController';
import { Router } from 'express';
import { ensureAdmin } from 'middlewares/ensureAdmin';
import { ensureAuthenticated } from 'middlewares/ensureAuthenticated';

const tagsRouter = Router();
tagsRouter.use(ensureAuthenticated);
tagsRouter.use(ensureAdmin);
const tagController = new CreateTagController();

tagsRouter.post('/', tagController.create);

export default tagsRouter;
