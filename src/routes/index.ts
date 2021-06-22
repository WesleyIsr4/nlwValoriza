import { Router } from 'express';
import authenticateRoutes from './session.router';
import userRouter from './user.router';

const routes = Router();

routes.get('/', (request, response) => {
  return response.json({ message: 'Hello World' });
});

routes.use('/users', userRouter)
routes.use('/session', authenticateRoutes)

export default routes;
