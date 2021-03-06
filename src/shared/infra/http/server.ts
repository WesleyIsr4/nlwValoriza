import 'reflect-metadata';
import 'dotenv/config';
import 'express-async-errors';

import express, { Request, Response, NextFunction } from 'express';

import '../typeorm';
import '../../container';
import AppError from '@shared/error/AppError';
import rateLimit from './middlewares/rateLimit';
import routes from './routes';
import uploadConfig from '@config/upload';

const app = express();

app.use(rateLimit);
app.use(express.json());
app.use('/files', express.static(uploadConfig.uploadFolder));
app.use(routes);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        status: 'error',
        message: err.message,
      });
    }
    return response.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  },
);

app.listen(3333, () => {
  console.log('Server taking off on port 3333! 🚀');
});
