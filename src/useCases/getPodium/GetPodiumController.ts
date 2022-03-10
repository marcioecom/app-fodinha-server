import { Request, Response } from "express";
import { GetPodium } from "./GetPodium";

class GetPodiumController {
  async handle(req: Request, res: Response) {
    const getPodium = new GetPodium();

    try {
      const podium = await getPodium.execute();

      return res.json(podium);
    } catch (err) {
      return res.status(400).json({
        error: true,
        message: err.message
      });
    }
  }
}

export { GetPodiumController }
