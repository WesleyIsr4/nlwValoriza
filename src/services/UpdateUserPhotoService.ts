import IStorageProvider from 'container/storageProvider/models/IStorageProvider';
import User from 'entities/User';
import AppError from 'Error/AppError';
import IUsersRepository from 'repositories/IUsersRepository';
import { inject, injectable } from 'tsyringe';

interface IRequest {
  user_id: string;
  photo_filename: string;
}

@injectable()
class UpdateUserPhotoService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('StorageProvider')
    private storageProvider: IStorageProvider,
  ) {}

  public async execute({ user_id, photo_filename }: IRequest): Promise<User> {
    const user = await this.usersRepository.findById(user_id);

    if (!user) {
      throw new AppError('Only logged in users can change the photo', 401);
    }

    if (user.photo) {
      await this.storageProvider.deleteFile(user.photo);
    }

    const filename = await this.storageProvider.saveFile(photo_filename);

    user.photo = filename;

    await this.usersRepository.save(user);

    return user;
  }
}

export default UpdateUserPhotoService;
