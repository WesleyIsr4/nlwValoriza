import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import { getRepository, Repository } from 'typeorm';
import User from '../entities/User';

class UsersRepository implements IUsersRepository {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }
  public async findAdmin(admin: boolean): Promise<User | undefined> {
    const userAdmin = await this.ormRepository.findOne();

    return userAdmin;
  }
  public async findAll(): Promise<User[]> {
    const users = await this.ormRepository.find();

    return users;
  }

  public async findById(id: string): Promise<User | undefined> {
    return this.ormRepository.findOne({
      where: { id },
    });
  }
  public async findByEmail(email: string): Promise<User | undefined> {
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
