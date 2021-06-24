import { classToClass } from 'class-transformer';
import { Request, Response } from 'express';
import CreateComplimentsService from 'services/CreateComplimentsService';
import ListAllComplimentsService from 'services/ListAllComplimentsService';
import { container } from 'tsyringe';

class CreateComplimentsController {
  public async list(request: Request, response: Response): Promise<Response> {
    const listCompliments = container.resolve(ListAllComplimentsService);

    const compliments = await listCompliments.execute();

    return response.json(compliments);
  }

  public async create(request: Request, response: Response) {
    const { tag_id, user_sender, user_receiver, message } = request.body;
    const user_id = request.user.id;

    const createCompliments = container.resolve(CreateComplimentsService);

    const compliments = await createCompliments.execute({
      tag_id,
      user_receiver,
      user_sender: user_id,
      message,
    });

    return response.json(classToClass(compliments));
  }
}

export default CreateComplimentsController;
