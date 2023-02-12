import { PrismaClient } from "@prisma/client";
import { Country } from "country-state-city";
const prisma = new PrismaClient();

async function main() {
  const countries = Country.getAllCountries().map((country) => {
    return {
      name: country.name,
      isoCode: country.isoCode,
      flag: country.flag,
      latitude: Number(country.latitude),
      longitude: Number(country.longitude),
    };
  });
  await prisma.country.createMany({
    data: countries,
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
