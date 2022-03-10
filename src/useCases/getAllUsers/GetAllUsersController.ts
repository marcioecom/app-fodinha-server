import { Request, Response } from "express";
import { GetAllUsers } from "./GetAllUsers";

class GetAllUsersController {
  async handle(req: Request, res: Response) {
    const getAllUsers = new GetAllUsers();

    try {
      const players = await getAllUsers.execute();

      return res.json(players);
    } catch (err) {
      return res.status(400).json({
        error: true,
        message: err.message
      })
    }
  }
}

export { GetAllUsersController }
