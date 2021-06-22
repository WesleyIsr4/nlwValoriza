import AuthenticateUserController from "controllers/AuthenticateUserController";
import { Router } from "express";


const authenticateRoutes = Router()
const authenticateController = new AuthenticateUserController()

authenticateRoutes.post('/', authenticateController.handle)

export default authenticateRoutes