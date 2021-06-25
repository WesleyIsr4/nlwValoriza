import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import AppError from '@shared/error/AppError';
import { inject, injectable } from 'tsyringe';
import Compliments from '../infra/typeorm/entities/Compliment';
import IComplimentsRepository from '../repositories/IComplimentsRepository';

interface IRequest {
  tag_id: string;
  user_sender: string;
  user_receiver: string;
  message: string;
}

@injectable()
class CreateComplimentsService {
  constructor(
    @inject('ComplimentsRepository')
    private complimentsRepository: IComplimentsRepository,

    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute({
    tag_id,
    user_sender,
    user_receiver,
    message,
  }: IRequest): Promise<Compliments> {
    if (user_sender === user_receiver) {
      throw new AppError("Can't send compliments to yourself");
    }

    const userReceiverExists = await this.usersRepository.findById(
      user_receiver,
    );

    if (!userReceiverExists) {
      throw new AppError('User receiver does not exists');
    }

    const compliments = this.complimentsRepository.create({
      tag_id,
      user_receiver,
      user_sender,
      message,
    });

    return compliments;
  }
}
export default CreateComplimentsService;
