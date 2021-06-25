import Tag from '../infra/typeorm/entities/Tag';

export default interface ITagsRepository {
  findByName(name: string): Promise<Tag | undefined>;
  findById(id: string): Promise<Tag | undefined>;
  delete(id: string): Promise<void>;
  findAll(): Promise<Tag[]>;
  create(data: string): Promise<Tag>;
  save(tags: Tag): Promise<Tag>;
}
