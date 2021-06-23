import AppError from 'Error/AppError';
import ITagsRepository from 'repositories/ITagsRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
class CreateTagService {
  constructor(
    @inject('TagsRepository')
    private tagsRepository: ITagsRepository,
  ) {}

  public async execute(name: string) {
    if (!name) {
      throw new AppError('Name is incorrect');
    }

    const checkName = await this.tagsRepository.findByName(name);

    if (checkName) {
      throw new AppError('Name already exists');
    }

    const tag = this.tagsRepository.create(name);

    return tag;
  }
}
export default CreateTagService;
