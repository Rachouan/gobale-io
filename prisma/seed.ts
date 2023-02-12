import { PrismaClient } from "@prisma/client";
import { Country } from "country-state-city";
const prisma = new PrismaClient();

async function main() {
  // const countries = Country.getAllCountries().map((country) => {
  //   return {
  //     name: country.name,
  //     isoCode: country.isoCode,
  //     flag: country.flag,
  //     latitude: Number(country.latitude),
  //     longitude: Number(country.longitude),
  //   };
  // });
  // await prisma.country.createMany({
  //   data: countries,
  // });

  const countries = await prisma.country.findMany();
  const country = countries[Math.floor(Math.random() * countries.length)];

  if (!country) throw new Error("No country found!");

  await prisma.game.create({
    data: {
      countryId: country.id,
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
