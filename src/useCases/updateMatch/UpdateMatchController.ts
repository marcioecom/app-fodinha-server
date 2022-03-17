import { Request, Response } from "express";
import { UpdateMatch } from "./UpdateMatch";

class UpdateMatchController {
  async handle(req: Request, res: Response) {
    const { matchId } = req.params;
    const { winnerId } = req.body;

    const updateMatch = new UpdateMatch();
    try {
      const updatedMatch = await updateMatch.execute(winnerId, matchId);

      return res.json(updatedMatch);
    } catch (error) {
      return res.status(400).json({
        error: true,
        message: error.message
      })
    }
  }
}

export { UpdateMatchController }
