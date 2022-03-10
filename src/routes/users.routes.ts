import { Router } from "express";
import { CreateUserController } from "../useCases/createUser/CreateUserController";
import { GetAllUsersController } from "../useCases/getAllUsers/GetAllUsersController";

const router = Router();

const getAllUsersController = new GetAllUsersController();
const createUserController = new CreateUserController();

router.get("/", getAllUsersController.handle);
router.post("/", createUserController.handle);

export { router as usersRoutes };
