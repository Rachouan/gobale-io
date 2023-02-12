"use client";

import Container from "@/components/container";
import { Country } from "@prisma/client";
import { useState } from "react";
import CountrySearch from "../country-search";
import Guess from "../guess";

export default function CountryBox({
  country,
  countries,
  onSelect,
}: {
  country: Country;
  countries: Country[];
  onSelect: (country: Country) => void;
}) {
  const [guesses, setGuesses] = useState<Country[]>([]);
  const [currentSelect, setCurrentSelect] = useState<Country>(country);

  const onSelectedCountry = (query: string) => {
    const country = countries.find(
      (c) => c.name.toLocaleLowerCase() === query.toLocaleLowerCase()
    );
    if (!country) return;
    setCurrentSelect(country);
    setGuesses([...guesses, country]);
    onSelect(country);
  };

  return (
    <div className="absolute bottom-0 w-full py-4">
      <Container>
        <div className="flex flex-col gap-4">
          <div className="flex gap-2">
            {guesses.map((c) => (
              <Guess country={c} key={`guess-${c.isoCode}]`} />
            ))}
          </div>

          <CountrySearch onSelect={onSelectedCountry} />
        </div>
      </Container>
    </div>
  );
}
