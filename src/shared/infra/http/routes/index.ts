import complimentsRouter from '@modules/compliments/infra/http/routes/compliments.router';
import tagsRouter from '@modules/tags/infra/http/routes/tag.router';
import authenticateRoutes from '@modules/users/infra/http/routes/session.router';
import userRouter from '@modules/users/infra/http/routes/user.router';
import { Router } from 'express';

const routes = Router();

routes.get('/', (request, response) => {
  return response.json({ message: 'Hello World' });
});

routes.use('/users', userRouter);
routes.use('/tags', tagsRouter);
routes.use('/session', authenticateRoutes);
routes.use('/compliments', complimentsRouter);

export default routes;
