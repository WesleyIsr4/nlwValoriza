import AppError from '@shared/error/AppError';
import { inject, injectable } from 'tsyringe';
import ITagsRepository from '../repositories/ITagsRepository';

interface IRequest {
  id: string;
}

@injectable()
class deleteTagService {
  constructor(
    @inject('TagsRepository')
    private tagsRepository: ITagsRepository,
  ) {}

  public async execute({ id }: IRequest): Promise<void> {
    const tag = await this.tagsRepository.findById(id);

    if (!tag) {
      throw new AppError('A tag does not exist');
    }

    await this.tagsRepository.delete(id);
  }
}

export default deleteTagService;
