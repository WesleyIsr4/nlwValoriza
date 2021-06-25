import CreateTagService from '@modules/tags/services/CreateTagService';
import ListAllTagService from '@modules/tags/services/ListAllTagService';
import { Request, Response } from 'express';

import { container } from 'tsyringe';

export default class TagController {
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
