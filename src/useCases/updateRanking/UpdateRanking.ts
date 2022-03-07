import { prisma } from "../../infra/database/prisma"

class UpdateRanking {
  async execute(userId: string) {
    const rankingBeforeUpdate = await prisma.ranking.findUnique({
      where: {
        userId
      }
    })

    const newPoints = rankingBeforeUpdate.points + 1;

    const newRanking = await prisma.ranking.update({
      data: {
        points: newPoints
      },
      where: {
        userId
      }
    })

    return newRanking;
  }
}

export { UpdateRanking }
