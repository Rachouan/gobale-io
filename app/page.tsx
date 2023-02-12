import Game from "@/structures/game";
import { prisma } from "@/server/db/client";

export default async function Home() {
  const countries = await prisma.country.findMany();
  const game = await prisma.game.findFirst({
    include: {
      country: true,
    },
  });

  console.log(game);

  if (!game) return <div>loading...</div>;

  return <Game countries={countries} game={game} />;
}
