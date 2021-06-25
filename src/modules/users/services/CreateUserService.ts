import AppError from '@shared/error/AppError';
import { hash } from 'bcryptjs';
import { inject, injectable } from 'tsyringe';
import User from '../infra/typeorm/entities/User';
import IUsersRepository from '../repositories/IUsersRepository';

interface IRequest {
  name: string;
  email: string;
  password: string;
  admin?: boolean;
}

@injectable()
class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute({
    name,
    email,
    password,
    admin = false,
  }: IRequest): Promise<User> {
    if (!email) {
      throw new AppError('E-mail incorrect');
    }

    const checkUser = await this.usersRepository.findByEmail(email);

    if (checkUser) {
      throw new AppError('E-mail already exists');
    }

    const passwordHash = await hash(password, 8);

    const user = this.usersRepository.create({
      name,
      email,
      password: passwordHash,
      admin,
    });

    return user;
  }
}

export default CreateUserService;
