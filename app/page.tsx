"use client";

import { randomBetween } from "@/helpers";
import CountryBox from "@/structures/country-box";
import Map from "@/structures/map";
import { Country, ICountry } from "country-state-city";
import { useEffect, useState } from "react";

export default function Home() {
  const countries = Country.getAllCountries();
  const [country, setCountry] = useState<ICountry>();

  const [coordinates, setCoordinates] = useState<{
    longitude: number;
    latitude: number;
  }>({ longitude: -70.9, latitude: 42.35 });

  useEffect(() => {
    if (!country) return;
    setCoordinates({
      longitude: Number(country.longitude),
      latitude: Number(country.latitude),
    });
  }, [country]);

  return (
    <section className="flex flex-col flex-grow relative">
      <Map {...coordinates} />
      <CountryBox
        onSelect={setCountry}
        country={countries[randomBetween(0, countries.length - 1)]}
      />
    </section>
  );
}
