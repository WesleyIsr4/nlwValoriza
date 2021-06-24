import { hash } from 'bcryptjs';
import User from 'entities/User';
import AppError from 'Error/AppError';
import IUsersRepository from 'repositories/IUsersRepository';
import { inject, injectable } from 'tsyringe';

interface IRequest {
  user_id: string;
  name: string;
  email: string;
  admin?: boolean;
}

@injectable()
class UpdateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute({
    user_id,
    name,
    email,
    admin = false,
  }: IRequest): Promise<User> {
    const user = await this.usersRepository.findById(user_id);

    if (!user) {
      throw new AppError('User not found', 400);
    }

    if (!email) {
      throw new AppError('E-mail incorrect', 401);
    }

    const checkUser = await this.usersRepository.findByEmail(email);

    if (checkUser) {
      throw new AppError('E-mail already exists', 401);
    }

    if (admin === true) {
      throw new AppError('Only admin users can give you this admin power', 401);
    }

    user.name = name;
    user.email = email;

    await this.usersRepository.save(user);

    return user;
  }
}

export default UpdateUserService;
