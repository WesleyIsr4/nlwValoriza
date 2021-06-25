import UpdateUserPhotoService from '@modules/users/services/UpdateUserPhotoService';
import { classToClass } from 'class-transformer';
import { Request, Response } from 'express';

import { container } from 'tsyringe';

export default class UserPhotoController {
  public async update(request: Request, response: Response): Promise<Response> {
    const updateUserPhoto = container.resolve(UpdateUserPhotoService);

    const user = await updateUserPhoto.execute({
      user_id: request.user.id,
      photo_filename: request.file.filename,
    });

    return response.json(classToClass(user));
  }
}
