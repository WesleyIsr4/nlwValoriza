import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';
import { Request, Response } from 'express';

import CreateComplimentsService from '@modules/compliments/services/CreateComplimentsService';
import ListAllComplimentsService from '@modules/compliments/services/ListAllComplimentsService';
import ListUserReceiverComplimentsReceiver from '@modules/tags/services/ListUserReceiverComplimentsReceiver';
import ListUserSendComplimentsService from '@modules/tags/services/ListUserSendComplimentsService';

export default class ComplimentsController {
  public async list(request: Request, response: Response): Promise<Response> {
    const listCompliments = container.resolve(ListAllComplimentsService);

    const compliments = await listCompliments.execute();

    return response.json(compliments);
  }

  public async listReceiver(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const user_id = request.user.id;

    const listCompliments = container.resolve(
      ListUserReceiverComplimentsReceiver,
    );

    const compliments = await listCompliments.execute(user_id);

    return response.json(classToClass(compliments));
  }

  public async listSender(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const user_id = request.user.id;

    const listCompliments = container.resolve(ListUserSendComplimentsService);

    const compliments = await listCompliments.execute(user_id);

    return response.json(classToClass(compliments));
  }

  public async create(request: Request, response: Response) {
    const { tag_id, user_receiver, message } = request.body;
    const user_id = request.user.id;

    const createCompliments = container.resolve(CreateComplimentsService);

    const compliments = await createCompliments.execute({
      tag_id,
      user_sender: user_id,
      user_receiver,
      message,
    });

    return response.json(compliments);
  }
}
