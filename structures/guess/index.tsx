import { ArrowUpIcon, CheckIcon } from "@heroicons/react/24/outline";
import { Country } from "@prisma/client";
import { useEffect, useRef } from "react";
import anime from "animejs/lib/anime.es.js";

export interface GuessProps {
  country: Country;
  distance: string;
  angle: number;
  correct?: boolean;
}

export default function Guess({
  country,
  distance,
  angle,
  correct,
}: GuessProps) {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    anime({
      targets: ref.current,
      rotate: angle,
      duration: 2000,
    });
  }, [angle]);

  const distantToColor = (distance: number) => {
    if (distance < 2000) return "bg-red-800  border-red-900";
    if (distance < 5000) return "bg-red-500  border-red-600";
    if (distance < 10000) return "bg-orange-500  border-orange-600";
    if (distance < 15000) return "bg-yellow-500  border-yellow-600";
    return "bg-gray-100  border-gray-200 text-gray-600";
  };

  return (
    <div
      className={`flex gap-3 px-3 py-2 pr-4 bg-white shadow-sm rounded items-center`}
    >
      <div
        className={`w-6 h-6 p-1 rounded-full border ${
          correct
            ? "bg-teal-500  border-teal-600"
            : distantToColor(Number(distance))
        } flex items-center justify-center text-white`}
      >
        {correct ? (
          <CheckIcon className="w-4" strokeWidth="3" />
        ) : (
          <ArrowUpIcon className="w-4 direction" strokeWidth="3" ref={ref} />
        )}
      </div>
      <div>
        <h2 className="text-base font-semibold whitespace-nowrap">
          {country?.name}
        </h2>
      </div>
    </div>
  );
}
