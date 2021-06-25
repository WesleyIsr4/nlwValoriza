import ICreateComplimentDTO from '../dtos/ICreateComplimentDTO';
import Compliments from '../infra/typeorm/entities/Compliment';

export default interface IComplimentsRepository {
  findByMessage(message: string): Promise<Compliments | undefined>;
  findAll(): Promise<Compliments[]>;
  findByUserReceiver(user_id: string): Promise<Compliments[]>;
  findByUsersender(user_id: string): Promise<Compliments[]>;
  create(data: ICreateComplimentDTO): Promise<Compliments>;
  save(compliments: Compliments): Promise<Compliments>;
}
