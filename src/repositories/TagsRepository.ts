import Tag from 'entities/Tag';
import { getRepository, Repository } from 'typeorm';
import ITagsRepository from './ITagsRepository';

class TagsRepository implements ITagsRepository {
  private ormRepository: Repository<Tag>;

  constructor() {
    this.ormRepository = getRepository(Tag);
  }

  public async findByName(name: string): Promise<Tag> {
    const tag = await this.ormRepository.findOne({
      where: { name },
    });
    return tag;
  }
  public async create(name: string): Promise<Tag> {
    const user = await this.ormRepository.create({
      name,
    });

    await this.ormRepository.save(user);

    return user;
  }
  public async save(tags: Tag): Promise<Tag> {
    return this.ormRepository.save(tags);
  }
}

export default TagsRepository;
