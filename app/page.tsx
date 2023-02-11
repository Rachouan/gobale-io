"use client";
import Container from "@/components/container";
import Input from "@/components/input";
import { Country, ICountry } from "country-state-city";
import { useEffect, useState } from "react";

export default function Home() {
  const countries = Country.getAllCountries();

  const [guess, setGuess] = useState<string>();
  const [stats, setStats] = useState<{ tries: number; distance: number }>({
    tries: 0,
    distance: 0,
  });

  const selectRandomCountry = () => {
    return countries[Math.floor(Math.random() * countries.length)];
  };

  const distance = (a: ICountry, b: ICountry) => {
    const lat1 = Number(a.latitude);
    const lon1 = Number(a.longitude);
    const lat2 = Number(b.latitude);
    const lon2 = Number(b.longitude);

    const R = 6371e3; // metres
    const φ1 = (lat1 * Math.PI) / 180; // φ, λ in radians
    const φ2 = (lat2 * Math.PI) / 180;
    const Δφ = ((lat2 - lat1) * Math.PI) / 180;
    const Δλ = ((lon2 - lon1) * Math.PI) / 180;

    const c =
      Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
      Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const d = 2 * Math.atan2(Math.sqrt(c), Math.sqrt(1 - c));

    const e = R * d; // in metres

    return e / 1000;
  };

  const [country, setCountry] = useState<ICountry>();

  const reset = () => {
    setCountry(selectRandomCountry());
    setGuess(undefined);
    setStats({
      tries: 0,
      distance: 0,
    });
  };

  const onHandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const findCountry = countries.find((c) => c.name === guess);
    if (!country || !findCountry) return;

    if (findCountry?.name === country?.name) {
      reset();
      console.log("correct");
    } else {
      setStats((prev) => ({
        ...prev,
        tries: prev.tries + 1,
        distance: distance(country, findCountry),
      }));
      console.log("wrong");
    }
  };

  useEffect(() => reset(), []);

  if (!country) return <div>Loading...</div>;

  return (
    <section>
      <Container>
        <h1>
          {country.name} tries:{stats.tries}
          <p>distance: {stats.distance}</p>
        </h1>
        <ul>
          <form onSubmit={onHandleSubmit}>
            <Input value={guess} onChange={setGuess} />
            <button type="submit">Check</button>
          </form>
        </ul>
      </Container>
    </section>
  );
}
