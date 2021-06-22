import { classToClass } from "class-transformer";
import { Request, Response } from "express";
import CreateUserService from "services/CreateUserService";
import { container } from "tsyringe";

export default class CreateUserController {
  public async create(request: Request, response: Response): Promise<Response>{
    const {name, email, password, admin} = request.body;

    const createUser = container.resolve(CreateUserService)

    const user = await createUser.execute({name, email, password, admin})

    return response.json(classToClass(user))
  }
}