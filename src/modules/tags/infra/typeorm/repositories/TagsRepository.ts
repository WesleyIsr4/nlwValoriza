import ITagsRepository from '@modules/tags/repositories/ITagsRepository';
import { getRepository, Repository } from 'typeorm';
import Tag from '../entities/Tag';

class TagsRepository implements ITagsRepository {
  private ormRepository: Repository<Tag>;

  constructor() {
    this.ormRepository = getRepository(Tag);
  }
  public async findAll(): Promise<Tag[]> {
    const tag = await this.ormRepository.find();
    return tag;
  }

  public async findByName(name: string): Promise<Tag | undefined> {
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
