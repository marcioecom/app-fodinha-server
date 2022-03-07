import { Router } from "express";
import { ShowRankingController } from "../useCases/showRanking/ShowRankingController";
import { UpdateRankingController } from "../useCases/updateRanking/UpdateRankingController";

const router = Router();

const showRankingController = new ShowRankingController();
const updateRankingController = new UpdateRankingController();

router.get("/", showRankingController.handle);
router.put("/", updateRankingController.handle);

export { router as rankingRoutes }
