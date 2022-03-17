import { prisma } from "../../infra/database/prisma";

class ShowMatches {
  async execute() {
    const matches = await prisma.match.findMany();

    return matches;
  }
}

export { ShowMatches };
