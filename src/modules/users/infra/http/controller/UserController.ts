import CreateUserService from '@modules/users/services/CreateUserService';
import ListAllUserService from '@modules/users/services/ListAllUserService';
import UpdateUserService from '@modules/users/services/UpdateUserService';
import { classToClass } from 'class-transformer';
import { Request, Response } from 'express';

import { container } from 'tsyringe';

export default class UserController {
  public async list(request: Request, response: Response): Promise<Response> {
    const listUsers = container.resolve(ListAllUserService);

    const users = await listUsers.execute();

    return response.json(classToClass(users));
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { name, email, admin } = request.body;
    const user_id = request.user.id;

    const updateuser = container.resolve(UpdateUserService);

    const update = await updateuser.execute({ user_id, name, email, admin });

    return response.json(classToClass(update));
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password, admin } = request.body;

    const createUser = container.resolve(CreateUserService);

    const user = await createUser.execute({ name, email, password, admin });

    return response.json(classToClass(user));
  }
}
