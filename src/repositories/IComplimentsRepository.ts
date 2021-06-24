import ICreateComplimentDTO from 'dtos/ICreateComplimentDTO';
import Compliments from 'entities/Compliment';

export default interface ITagsRepository {
  findByMessage(message: string): Promise<Compliments | undefined>;
  findAll(): Promise<Compliments[]>;
  create(data: ICreateComplimentDTO): Promise<Compliments>;
  save(compliments: Compliments): Promise<Compliments>;
}
