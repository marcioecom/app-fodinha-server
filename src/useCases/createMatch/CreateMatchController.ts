import { Request, Response } from "express";
import { CreateMatch } from "./CreateMatch";

class CreateMatchController {
  async handle(req: Request, res: Response) {
    const { userId } = req;
    const { players } = req.body;

    const createMatch = new CreateMatch();

    try {
      const match = await createMatch.execute(players);

      return res.json(match);
    } catch (err) {
      return res.status(400).json({
        error: true,
        message: err.message
      })
    }
  }
}

export { CreateMatchController }
