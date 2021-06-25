import { classToPlain } from 'class-transformer';

import { inject, injectable } from 'tsyringe';
import ITagsRepository from '../repositories/ITagsRepository';

@injectable()
class ListAllTagService {
  constructor(
    @inject('TagsRepository')
    private tagsRepository: ITagsRepository,
  ) {}

  public async execute() {
    const tags = await this.tagsRepository.findAll();

    return classToPlain(tags);
  }
}
export default ListAllTagService;
