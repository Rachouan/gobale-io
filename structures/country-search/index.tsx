import { useState } from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Button from "@/components/button";

export type SelectDataType = {
  label: string;
  value: any;
};
export interface CountrySearchProps {
  value?: SelectDataType;
  placeholder?: string;
  onSelect: (value: any) => void;
  className?: string;
}

export default function CountrySearch({
  placeholder,
  onSelect,
  className,
}: CountrySearchProps) {
  const [query, setQuery] = useState<string>("");
  const disabled = query.length === 0;

  const onHandleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSelect(query);
    setQuery("");
  };

  return (
    <form
      className="relative w-full flex cursor-default p-2 rounded-md overflow-hidden bg-white text-left shadow-sm focus:outline-none"
      onSubmit={onHandleSubmit}
    >
      <input
        className="w-full px-2 border-none text-gray-900 focus:outline-none focus:ring-0"
        placeholder={"Search for a country..."}
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <Button type="submit" disabled={disabled}>
        <ArrowRightIcon className="w-4 transition-colors" />
      </Button>
    </form>
  );
}
