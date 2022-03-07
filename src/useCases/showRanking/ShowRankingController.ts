import { Request, Response } from "express";
import { ShowRanking } from "./ShowRanking";

class ShowRankingController {
  async handle(req: Request, res: Response) {
    const showRanking = new ShowRanking();

    try {
      const ranking = await showRanking.execute();

      return res.json(ranking);
    } catch (err) {
      return res.status(400).json({
        error: true,
        message: err.message
      })
    }
  }
}

export { ShowRankingController }
