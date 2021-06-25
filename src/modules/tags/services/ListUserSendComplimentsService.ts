import IComplimentsRepository from '@modules/compliments/repositories/IComplimentsRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
class ListUserSendComplimentsService {
  constructor(
    @inject('ComplimentsRepository')
    private complimentsRepository: IComplimentsRepository,
  ) {}

  public async execute(user_id: string) {
    const compliments = await this.complimentsRepository.findByUsersender(
      user_id,
    );

    return compliments;
  }
}

export default ListUserSendComplimentsService;
