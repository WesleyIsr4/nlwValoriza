import AppError from 'Error/AppError';
import { NextFunction, Request, Response } from 'express';
import UsersRepository from 'repositories/UsersRepository';

export async function ensureAdmin(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const { id } = request.user;

  const usersRepository = new UsersRepository();
  const user = await usersRepository.findById(id);

  if (!user.admin) {
    throw new AppError("user isn't admin!");
  }

  return next();
}
