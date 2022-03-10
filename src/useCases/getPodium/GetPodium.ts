import { prisma } from "../../infra/database/prisma"

class GetPodium {
  async execute() {
    const podium = await prisma.ranking.findMany({
      select: {
        id: true,
        points: true,
        user: {
          select: {
            name: true,
          }
        }
      },
      orderBy: {
        points: 'desc'
      },
      take: 3
    })

    return podium;
  }
}

export { GetPodium }
