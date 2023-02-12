import Game from "@/structures/game";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function Home() {
  const countries = await prisma.country.findMany();

  return <Game countries={countries} />;
}
