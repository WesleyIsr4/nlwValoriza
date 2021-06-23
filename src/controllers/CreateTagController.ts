import { Request, Response } from 'express';
import CreateTagService from 'services/CreateTagService';
import ListAllTagService from 'services/ListAllTagService';
import { container } from 'tsyringe';

export default class CreateTagController {
  public async list(request: Request, response: Response): Promise<Response> {
    const listTags = container.resolve(ListAllTagService);

    const tags = await listTags.execute();

    return response.json(tags);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;

    const createTag = container.resolve(CreateTagService);

    const tag = await createTag.execute(name);

    return response.json(tag);
  }
}
