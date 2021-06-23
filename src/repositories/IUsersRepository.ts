import ICreateUserDTO from 'dtos/ICreateUserDTO';
import User from 'entities/User';

export default interface IUsersRepository {
  findById(id: string): Promise<User | undefined>;
  findAll(): Promise<User[]>;
  findByEmail(email: string): Promise<User | undefined>;
  create(data: ICreateUserDTO): Promise<User>;
  save(user: User): Promise<User>;
}
