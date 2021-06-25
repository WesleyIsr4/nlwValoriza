import { ensureAdmin } from '@modules/users/infra/middlewares/ensureAdmin';
import { ensureAuthenticated } from '@modules/users/infra/middlewares/ensureAuthenticated';
import { Router } from 'express';
import TagController from '../controller/TagController';

const tagsRouter = Router();
tagsRouter.use(ensureAuthenticated);

const tagController = new TagController();

tagsRouter.post('/', ensureAdmin, tagController.create);
tagsRouter.get('/', tagController.list);
tagsRouter.delete('/:id', ensureAdmin, tagController.destroy);

export default tagsRouter;
