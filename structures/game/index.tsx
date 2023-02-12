"use client";

import Container from "@/components/container";
import {
  angleBetweenCountries,
  distanceBetweenCountries,
  randomBetween,
} from "@/helpers";
import { Country, Game as GameType } from "@prisma/client";
import { useState } from "react";
import CountrySearch from "../country-search";
import Guess, { GuessProps } from "../guess";
import Map from "../map";

interface GameProps {
  countries: Country[];
  game: GameType & { country: Country };
}

export default function Game({ countries, game }: GameProps) {
  const [country, setCountry] = useState<Country>(
    countries[randomBetween(0, countries.length - 1)]
  );

  const [guesses, setGuesses] = useState<GuessProps[]>([]);

  const addGuess = (country: Country, correct: boolean) => {
    setGuesses((g) => [
      ...g,
      {
        country,
        distance: distanceBetweenCountries(country, game.country),
        angle: angleBetweenCountries(country, game.country),
        correct,
      },
    ]);
  };

  const onSelect = async (query: string) => {
    const country = countries.find(
      (c) => c.name.toLocaleLowerCase() === query.toLocaleLowerCase()
    );
    if (!country) return;
    setCountry(country);
    const correct = country.id === game.countryId;
    if (correct) alert("You win!");
    addGuess(country, correct);
  };

  return (
    <section className="flex flex-col flex-grow relative">
      <Map latitude={country.latitude} longitude={country.longitude} />

      <div className="absolute bottom-0 w-full py-4">
        <Container>
          <div className="flex flex-col gap-4">
            <div className="flex gap-2">
              {guesses.map((g) => (
                <Guess {...g} key={`guess-${g.country.isoCode}]`} />
              ))}
            </div>

            <CountrySearch onSelect={onSelect} />
          </div>
        </Container>
      </div>
    </section>
  );
}
