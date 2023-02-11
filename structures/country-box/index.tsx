"use client";

import Button from "@/components/button";
import Container from "@/components/container";
import Select from "@/components/select";
import { randomBetween } from "@/helpers";
import { Country, ICountry } from "country-state-city";
import { useEffect, useState } from "react";

export default function CountryBox() {
  const countries = Country.getAllCountries().map((country) => ({
    label: country.name,
    value: country,
  }));

  const [country, setCountry] = useState<ICountry>();

  const onHandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(country);
  };

  useEffect(() => {
    setCountry(countries[randomBetween(0, countries.length - 1)].value);
  }, []);
  return (
    <div className="fixed bottom-0 w-full py-8">
      <Container>
        <form onSubmit={onHandleSubmit} className="w-full">
          <fieldset className="flex w-full">
            <Select
              data={countries}
              onSelect={(value) => console.log(value)}
              className="grow-1 w-full"
            />
            <Button>Submit</Button>
          </fieldset>
        </form>
      </Container>
    </div>
  );
}
