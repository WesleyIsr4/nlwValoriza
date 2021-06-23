import AppError from 'Error/AppError';
import ITagsRepository from 'repositories/ITagsRepository';
import IUsersRepository from 'repositories/IUsersRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
class ListAllUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute() {
    const users = await this.usersRepository.findAll();

    return users;
  }
}
export default ListAllUserService;
