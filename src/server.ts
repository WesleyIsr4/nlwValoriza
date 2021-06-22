import 'reflect-metadata';
import 'dotenv/config';

import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';

import routes from 'routes';

import './database';
import './container';
import AppError from 'Error/AppError';
import rateLimit from 'middlewares/rateLimit';
const app = express();

app.use(rateLimit);
app.use(express.json());
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
  console.log('Servidor decolando na porta 3333! 🚀');
});
