import { ArrowUpCircleIcon } from "@heroicons/react/24/solid";
import { ICountry } from "country-state-city";

export default function Guess({ country }: { country: ICountry }) {
  return (
    <div className={`flex gap-2 px-2 py-1 pr-2 bg-white shadow-sm rounded`}>
      <ArrowUpCircleIcon
        className="w-6 text-denim-500"
        style={{
          transform: `rotate(45deg)`,
        }}
      />
      <div>
        <h2 className="text-base font-semibold font-ballinger">
          {country?.name}
        </h2>
        <p className="text-sm text-gray-400">1000 km away</p>
      </div>
    </div>
  );
}
