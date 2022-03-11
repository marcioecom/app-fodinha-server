import { Request, Response } from "express";
import { GetUserInfo } from "./GetUserInfo";

class GetUserInfoController {
  async handle(req: Request, res: Response) {
    const { userId } = req.params;

    const getUserInfo = new GetUserInfo();

    try {
      const userInfo = await getUserInfo.execute(userId);

      return res.json(userInfo);
    } catch (error) {
      return res.status(400).json({
        error: true,
        message: error.message
      })
    }
  }
}

export { GetUserInfoController }
