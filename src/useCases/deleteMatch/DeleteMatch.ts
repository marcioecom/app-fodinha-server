import { prisma } from "../../infra/database/prisma"

class DeleteMatch {
  async execute(matchId: string) {
    await prisma.match.delete({
      where: { id: matchId }
    })
  }
}

export { DeleteMatch }
