import { Router } from "express";
import { CreateMatchController } from "../useCases/createMatch/CreateMatchController";

const router = Router();

const createMatchController = new CreateMatchController();

router.post("/", createMatchController.handle);

export { router as matchesRoutes }
