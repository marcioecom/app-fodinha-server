import { Router } from "express";
import { GetPodiumController } from "../useCases/getPodium/GetPodiumController";
import { ShowRankingController } from "../useCases/showRanking/ShowRankingController";
import { UpdateRankingController } from "../useCases/updateRanking/UpdateRankingController";

const router = Router();

const showRankingController = new ShowRankingController();
const getPodiumController = new GetPodiumController();
const updateRankingController = new UpdateRankingController();

router.get("/", showRankingController.handle);
router.get("/podium", getPodiumController.handle);
router.put("/", updateRankingController.handle);

export { router as rankingRoutes }
