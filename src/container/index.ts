import { container } from 'tsyringe';

import IUsersRepository from 'repositories/IUsersRepository';
import UsersRepository from 'repositories/UsersRepository';

import ITagsRepository from 'repositories/ITagsRepository';
import TagsRepository from 'repositories/TagsRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<ITagsRepository>('TagsRepository', TagsRepository);
