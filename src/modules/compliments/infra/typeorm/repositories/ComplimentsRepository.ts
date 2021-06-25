import { getRepository, Repository } from 'typeorm';

import ICreateComplimentDTO from '@modules/compliments/dtos/ICreateComplimentDTO';
import IComplimentsRepository from '@modules/compliments/repositories/IComplimentsRepository';
import Compliments from '../entities/Compliment';

class ComplimentsRepository implements IComplimentsRepository {
  private ormRepository: Repository<Compliments>;

  constructor() {
    this.ormRepository = getRepository(Compliments);
  }
  public async findByUserReceiver(user_id: string): Promise<Compliments[]> {
    const compliments = await this.ormRepository.find({
      where: {
        user_receiver: user_id,
      },
      relations: ['userSender', 'userReceiver', 'tag'],
    });

    return compliments;
  }
  public async findByUsersender(user_id: string): Promise<Compliments[]> {
    const complimentsSender = await this.ormRepository.find({
      where: {
        user_sender: user_id,
      },
      relations: ['userReceiver', 'userSender', 'tag'],
    });

    return complimentsSender;
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
