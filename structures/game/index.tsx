"use client";

import { randomBetween } from "@/helpers";
import { Country } from "@prisma/client";
import { useState } from "react";
import CountryBox from "../country-box";
import Map from "../map";

interface GameProps {
  countries: Country[];
}

export default function Game({ countries }: GameProps) {
  const [country, setCountry] = useState<Country>(
    countries[randomBetween(0, countries.length - 1)]
  );

  return (
    <section className="flex flex-col flex-grow relative">
      <Map latitude={country.latitude} longitude={country.longitude} />
      {countries && (
        <CountryBox
          onSelect={setCountry}
          country={country}
          countries={countries}
        />
      )}
    </section>
  );
}
