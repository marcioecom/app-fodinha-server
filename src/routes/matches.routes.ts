import { Router } from "express";
import { CreateMatchController } from "../useCases/createMatch/CreateMatchController";
import { DeleteMatchController } from "../useCases/deleteMatch/DeleteMatchController";
import { ShowMatchesController } from "../useCases/showMatches/ShowMatchesController";
import { UpdateMatchController } from "../useCases/updateMatch/UpdateMatchController";

const router = Router();

const showMatchesController = new ShowMatchesController();
const createMatchController = new CreateMatchController();
const updateMatchController = new UpdateMatchController();
const deleteMatchController = new DeleteMatchController();

router.get("/", showMatchesController.handle)
router.post("/", createMatchController.handle);
router.put("/:matchId", updateMatchController.handle);
router.delete("/:matchId", deleteMatchController.handle);

export { router as matchesRoutes }
