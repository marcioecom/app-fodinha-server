import { Request, Response } from "express";
import { ShowMatches } from "./ShowMatches";

class ShowMatchesController {
  async handle(req: Request, res: Response) {
    const showMatches = new ShowMatches();

    try {
      const matches = await showMatches.execute();

      return res.json(matches);
    } catch (error) {
      return res.status(400).json({
        error: true,
        message: error.message
      })
    }
  }
}

export { ShowMatchesController };
