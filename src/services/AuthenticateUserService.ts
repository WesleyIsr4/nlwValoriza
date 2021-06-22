import { compare } from "bcryptjs";
import User from "entities/User";
import { sign } from "jsonwebtoken";
import IUsersRepository from "repositories/IUsersRepository";
import { inject, injectable } from "tsyringe";
import authConfig from '../config/auth'

interface IRequest{
  email: string;
  password: string;
}

interface IResponse {
  user: User;
  token: string;
}

@injectable()
class AuthenticateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ){}

  public async execute({email, password}: IRequest): Promise<IResponse>{
    const user = await this.usersRepository.findByEmail(email)

    if(!user){
      throw new Error('Email or password incorrect')
    }

    const passwordMatched = await compare(password, user.password)

    if(!passwordMatched){
      throw new Error("Email or password incorrect")
    }

    const {secret, expiresIn} = authConfig.jwt;

    const token = sign({}, secret, {
      subject: user.id,
      expiresIn,
    })

    return {user, token}
  }
}

export default AuthenticateUserService