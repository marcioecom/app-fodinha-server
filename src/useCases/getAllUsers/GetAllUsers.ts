import { prisma } from "../../infra/database/prisma"

class GetAllUsers {
  async execute() {
    const allPlayers = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        avatar: true,
      }
    });

    return allPlayers;
  }
}

export { GetAllUsers }
