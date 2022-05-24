import { prisma } from "../../infra/database/prisma"

class GetUserInfo {
  async execute(userId: string) {
    const userInfo = await prisma.user.findUnique({
      where: {
        id: userId
      },
      select: {
        id: true,
        name: true,
        avatar: true,
        ranking: {
          select: {
            points: true,
          }
        }
      }
    })

    return userInfo;
  }
}

export { GetUserInfo }
