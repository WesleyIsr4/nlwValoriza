import Tag from 'entities/Tag';

export default interface ITagsRepository {
  findByName(name: string): Promise<Tag | undefined>;
  findAll(): Promise<Tag[]>;
  create(data: string): Promise<Tag>;
  save(tags: Tag): Promise<Tag>;
}
