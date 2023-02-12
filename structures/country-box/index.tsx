"use client";

import Button from "@/components/button";
import Container from "@/components/container";
import Select from "@/components/select";
import {
  angleBetweenCountries,
  distanceBetweenCountries,
  randomBetween,
} from "@/helpers";
import { ArrowUpCircleIcon, ArrowUpIcon } from "@heroicons/react/24/solid";
import { Country, ICountry } from "country-state-city";
import { useState } from "react";
import Guess from "../guess";

export default function CountryBox({
  country,
  onSelect,
}: {
  country: ICountry;
  onSelect: (country: ICountry) => void;
}) {
  const countries = Country.getAllCountries().map((country) => ({
    label: country.name,
    value: country,
  }));

  const [guesses, setGuesses] = useState<ICountry[]>([]);
  const [currentSelect, setCurrentSelect] = useState<ICountry>(country);

  const onHandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!currentSelect) return;
    setGuesses((prev) => [...prev, currentSelect]);
  };

  const onHandleSelect = (country: ICountry) => {
    setCurrentSelect(country);
    onSelect(country);
  };

  return (
    <div className="absolute bottom-0 w-full py-4">
      <Container>
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            {guesses.map((c) => (
              <Guess country={c} key={`guess-${c.isoCode}]`} />
            ))}
          </div>

          <form
            onSubmit={onHandleSubmit}
            className="w-full flex gap-2 align-center"
          >
            <Select
              data={countries}
              onSelect={onHandleSelect}
              className="grow-1 w-full"
              placeholder="Select a country"
            />
          </form>
        </div>
      </Container>
    </div>
  );
}
