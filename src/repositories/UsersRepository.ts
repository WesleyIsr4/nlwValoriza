import ICreateUserDTO from 'dtos/ICreateUserDTO';
import User from 'entities/User';
import { getRepository, Repository } from 'typeorm';
import IUsersRepository from './IUsersRepository';

class UsersRepository implements IUsersRepository {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }

  public async findById(id: string): Promise<User> {
    return this.ormRepository.findOne({
      where: { id },
    });
  }
  public async findByEmail(email: string): Promise<User> {
    return this.ormRepository.findOne({
      where: { email },
    });
  }
  public async create({
    name,
    email,
    password,
    admin,
  }: ICreateUserDTO): Promise<User> {
    const user = this.ormRepository.create({
      name,
      email,
      password,
      admin,
    });

    await this.ormRepository.save(user);

    return user;
  }
  public async save(user: User): Promise<User> {
    return this.ormRepository.save(user);
  }
}

export default UsersRepository;
