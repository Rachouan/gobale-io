import { Fragment, useEffect, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { Combobox, Transition } from "@headlessui/react";
import { ICountry } from "country-state-city";
import clsx from "clsx";

export type SelectDataType = {
  label: string;
  value: any;
};
export interface SelectProps {
  value?: SelectDataType;
  data: SelectDataType[];
  onSelect: (value: any) => void;
  className?: string;
}

export default function Select({
  value,
  data,
  onSelect,
  className,
}: SelectProps) {
  const [selected, setSelected] = useState<SelectDataType>(value || data[0]);
  const [query, setQuery] = useState("");

  const filteredSelect =
    query === ""
      ? data
      : data.filter(({ label }) => {
          return label.toLowerCase().includes(query.toLowerCase());
        });

  useEffect(() => {
    setQuery(selected?.label || "");
    onSelect(selected);
  }, [selected]);

  return (
    <Combobox value={selected} onChange={setSelected}>
      <div className={clsx("relative mt-1", className)}>
        <div className="relative w-full cursor-default rounded overflow-hidden bg-white text-left shadow-sm border focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
          <Combobox.Input
            className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
            displayValue={(e: ICountry) => e.name}
            onChange={(event) => setQuery(event.target.value)}
          />
          <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronDownIcon className="w-4" />
          </Combobox.Button>
        </div>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          afterLeave={() => setQuery("")}
        >
          <Combobox.Options className="absolute bottom-12 mt-1 max-h-60 w-full overflow-auto rounded bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {filteredSelect.length === 0 && query !== "" ? (
              <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                Nothing found.
              </div>
            ) : (
              filteredSelect.map(({ label, value }) => (
                <Combobox.Option
                  key={label.toLocaleLowerCase().split(" ").join("-")}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? "bg-teal-600 text-white" : "text-gray-900"
                    }`
                  }
                  value={value}
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {label}
                      </span>
                      {selected ? (
                        <span
                          className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                            active ? "text-white" : "text-teal-600"
                          }`}
                        >
                          ✅
                        </span>
                      ) : null}
                    </>
                  )}
                </Combobox.Option>
              ))
            )}
          </Combobox.Options>
        </Transition>
      </div>
    </Combobox>
  );
}
