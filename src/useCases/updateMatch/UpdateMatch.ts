import { Prisma } from "@prisma/client";
import { prisma } from "../../infra/database/prisma"

class UpdateMatch {
  async execute(winnerId: string, matchId: string) {
    const matchExists = await prisma.match.findUnique({
      where: {
        id: matchId
      }
    })

    if (!matchExists) {
      throw new Error("Match id invalid");
    }

    const updatedMatch = await prisma.match.update({
      data: {
        winner: winnerId
      },
      where: {
        id: matchId
      }
    })

    return updatedMatch;
  }
}

export { UpdateMatch }
