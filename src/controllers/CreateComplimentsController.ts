import { classToClass } from 'class-transformer';
import { Request, Response } from 'express';
import CreateComplimentsService from 'services/CreateComplimentsService';
import { container } from 'tsyringe';

class CreateComplimentsController {
  public async create(request: Request, response: Response) {
    const { tag_id, user_sender, user_receiver, message } = request.body;

    const createCompliments = container.resolve(CreateComplimentsService);

    const compliments = await createCompliments.execute({
      tag_id,
      user_receiver,
      user_sender,
      message,
    });

    return response.json(classToClass(compliments));
  }
}

export default CreateComplimentsController;
