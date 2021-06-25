import { ensureAdmin } from '@modules/users/infra/middlewares/ensureAdmin';
import { ensureAuthenticated } from '@modules/users/infra/middlewares/ensureAuthenticated';
import { Router } from 'express';
import TagController from '../controller/TagController';

const tagsRouter = Router();
tagsRouter.use(ensureAuthenticated);
tagsRouter.use(ensureAdmin);
const tagController = new TagController();

tagsRouter.post('/', tagController.create);
tagsRouter.get('/', tagController.list);

export default tagsRouter;
