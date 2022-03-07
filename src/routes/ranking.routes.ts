import { Router } from "express";
import { UpdateRankingController } from "../useCases/updateRanking/UpdateRankingController";

const router = Router();

const updateRankingController = new UpdateRankingController();

router.put("/", updateRankingController.handle);

export { router as rankingRoutes }
