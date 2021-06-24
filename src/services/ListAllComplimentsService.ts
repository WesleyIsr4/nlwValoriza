import IComplimentsRepository from 'repositories/IComplimentsRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
class ListAllComplimentsService {
  constructor(
    @inject('ComplimentsRepository')
    private complimentsRepository: IComplimentsRepository,
  ) {}

  public async execute() {
    const compliments = await this.complimentsRepository.findAll();

    return compliments;
  }
}
export default ListAllComplimentsService;
