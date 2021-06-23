import AppError from 'Error/AppError';
import ITagsRepository from 'repositories/ITagsRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
class ListAllTagService {
  constructor(
    @inject('TagsRepository')
    private tagsRepository: ITagsRepository,
  ) {}

  public async execute() {
    const tags = await this.tagsRepository.findAll();

    return tags;
  }
}
export default ListAllTagService;
