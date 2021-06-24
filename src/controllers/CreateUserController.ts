import { classToClass } from 'class-transformer';
import { Request, Response } from 'express';
import CreateUserService from 'services/CreateUserService';
import ListAllUserService from 'services/ListAllUserService';
import UpdateUserService from 'services/UpdateUserService';
import { container } from 'tsyringe';

export default class CreateUserController {
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
