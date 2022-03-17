import { Router } from "express";
import { CreateMatchController } from "../useCases/createMatch/CreateMatchController";
import { ShowMatchesController } from "../useCases/showMatches/ShowMatchesController";

const router = Router();

const showMatchesController = new ShowMatchesController();
const createMatchController = new CreateMatchController();

router.get("/", showMatchesController.handle)
router.post("/", createMatchController.handle);

export { router as matchesRoutes }
