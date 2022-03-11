import { Router } from "express";
import { CreateUserController } from "../useCases/createUser/CreateUserController";
import { GetAllUsersController } from "../useCases/getAllUsers/GetAllUsersController";
import { GetUserInfoController } from "../useCases/getUserInfo/GetUserInfoController";

const router = Router();

const getAllUsersController = new GetAllUsersController();
const getUserInfoController = new GetUserInfoController();
const createUserController = new CreateUserController();

router.get("/", getAllUsersController.handle);
router.get("/info/:userId", getUserInfoController.handle);
router.post("/", createUserController.handle);

export { router as usersRoutes };
