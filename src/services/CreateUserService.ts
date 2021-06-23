import { hash } from 'bcryptjs';
import User from 'entities/User';
import AppError from 'Error/AppError';
import IUsersRepository from 'repositories/IUsersRepository';
import { inject, injectable } from 'tsyringe';

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
    admin,
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
