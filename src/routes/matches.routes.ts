import { Router } from "express";
import { CreateMatchController } from "../useCases/createMatch/CreateMatchController";
import { ShowMatchesController } from "../useCases/showMatches/ShowMatchesController";
import { UpdateMatchController } from "../useCases/updateMatch/UpdateMatchController";

const router = Router();

const showMatchesController = new ShowMatchesController();
const createMatchController = new CreateMatchController();
const updateMatchController = new UpdateMatchController();

router.get("/", showMatchesController.handle)
router.post("/", createMatchController.handle);
router.put("/:matchId", updateMatchController.handle);

export { router as matchesRoutes }
