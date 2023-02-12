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

  return (
    <div
      className={`flex gap-3 px-3 py-2 pr-4 bg-white shadow-sm rounded items-center`}
    >
      <div
        className={`w-6 h-6 p-1 rounded-full border ${
          correct
            ? "bg-teal-500  border-teal-600"
            : "bg-denim-500  border-denim-600"
        } flex items-center justify-center text-white`}
      >
        {correct ? (
          <CheckIcon className="w-4" strokeWidth="3" />
        ) : (
          <ArrowUpIcon className="w-4 direction" strokeWidth="3" ref={ref} />
        )}
      </div>
      <div>
        <h2 className="text-base font-semibold">{country?.name}</h2>
      </div>
    </div>
  );
}
