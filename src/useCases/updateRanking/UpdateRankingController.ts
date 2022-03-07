import { Request, Response } from "express";
import { UpdateRanking } from "./UpdateRanking";

class UpdateRankingController {
  async handle(req: Request, res: Response) {
    const { userId } = req.body;

    const updateRanking = new UpdateRanking();

    try {
      const newRanking = await updateRanking.execute(userId);

      return res.json(newRanking);
    } catch (err) {
      return res.status(400).json({
        error: true,
        message: err.message
      })
    }
  }
}

export { UpdateRankingController }
