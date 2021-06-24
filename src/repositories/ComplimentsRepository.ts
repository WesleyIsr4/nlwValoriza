import ICreateComplimentDTO from 'dtos/ICreateComplimentDTO';
import Compliments from 'entities/Compliment';
import { getRepository, Repository } from 'typeorm';
import IComplimentsRepository from './IComplimentsRepository';

class ComplimentsRepository implements IComplimentsRepository {
  private ormRepository: Repository<Compliments>;

  constructor() {
    this.ormRepository = getRepository(Compliments);
  }

  public async findByMessage(
    message: string,
  ): Promise<Compliments | undefined> {
    return this.ormRepository.findOne({
      where: { message },
    });
  }
  public async findAll(): Promise<Compliments[]> {
    return this.ormRepository.find();
  }
  public async create({
    tag_id,
    user_receiver,
    user_sender,
    message,
  }: ICreateComplimentDTO): Promise<Compliments> {
    const compliments = this.ormRepository.create({
      tag_id,
      user_receiver,
      user_sender,
      message,
    });

    await this.ormRepository.save(compliments);

    return compliments;
  }
  public async save(compliments: Compliments): Promise<Compliments> {
    return this.ormRepository.save(compliments);
  }
}

export default ComplimentsRepository;
