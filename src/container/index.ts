import { container } from 'tsyringe';

import IUsersRepository from 'repositories/IUsersRepository';
import UsersRepository from 'repositories/UsersRepository';

import ITagsRepository from 'repositories/ITagsRepository';
import TagsRepository from 'repositories/TagsRepository';

import IStorageProvider from './storageProvider/models/IStorageProvider';
import DiskStorageProvider from './storageProvider/implementations/DiskStorageProvider';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<ITagsRepository>('TagsRepository', TagsRepository);

container.registerSingleton<IStorageProvider>(
  'StorageProvider',
  DiskStorageProvider,
);
