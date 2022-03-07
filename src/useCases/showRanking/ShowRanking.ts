import { prisma } from "../../infra/database/prisma"

class ShowRanking {
  async execute() {
    const ranking = await prisma.ranking.findMany({
      select: {
        id: true,
        points: true,
        updated_at: true,
        user: {
          select: {
            name: true,
            email: true,
          }
        }
      },
      orderBy: {
        points: 'desc'
      },
    });

    return ranking;
  }
}

export { ShowRanking }
