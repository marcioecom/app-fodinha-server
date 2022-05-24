import { Request, Response } from "express";
import { DeleteMatch } from "./DeleteMatch";

class DeleteMatchController {
  async handle(req: Request, res: Response) {
    const { matchId } = req.params;

    const deleteMatch = new DeleteMatch();

    try {
      await deleteMatch.execute(matchId);

      return res.status(204).end();
    } catch (error) {
      
    }
  }
}

export { DeleteMatchController }
