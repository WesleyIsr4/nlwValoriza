import { NextFunction, Response, Request } from "express";
import { verify } from "jsonwebtoken";
import authConfig from '../config/auth'

interface ITokenPayload {
  iat: number;
  ext: number;
  sub: string;
}

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const authHeader = request.headers.authorization;

  if(!authHeader) {
    throw new Error('JWT token is missing')
  }

  const [, token] = authHeader.split(' ');

  try {
    const decoded = verify(token, authConfig.jwt.secret)
    const {sub} = decoded as ITokenPayload

    request.user = {
      id: sub,
    }

    next()
  } catch {
    throw new Error('Invalid JWT token!')
  }
}