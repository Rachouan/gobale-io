import { Fragment, useEffect, useState } from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { Combobox, Transition } from "@headlessui/react";
import { ICountry } from "country-state-city";
import clsx from "clsx";
import Button from "../button";

export type SelectDataType = {
  label: string;
  value: any;
};
export interface SelectProps {
  value?: SelectDataType;
  placeholder?: string;
  data: SelectDataType[];
  onSelect: (value: any) => void;
  className?: string;
}

export default function Select({
  value,
  data,
  placeholder,
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
      <div className={clsx("relative", className)}>
        <div className="relative w-full flex cursor-default p-1 rounded overflow-hidden bg-white text-left shadow-sm border border-gray-50 focus:outline-none">
          <Combobox.Input
            className="w-full px-2 border-none text-lg text-gray-900 focus:outline-none focus:ring-0"
            displayValue={(e: ICountry) => e.name}
            placeholder={placeholder}
            onChange={(event) => setQuery(event.target.value)}
          />
          <Button type="submit">Submit</Button>
        </div>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          afterLeave={() => setQuery("")}
        >
          <Combobox.Options className="absolute bottom-14 mb-2 max-h-60 w-full overflow-auto rounded bg-white p-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {filteredSelect.length === 0 && query !== "" ? (
              <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                Nothing found.
              </div>
            ) : (
              filteredSelect.map(({ label, value }) => (
                <Combobox.Option
                  key={label.toLocaleLowerCase().split(" ").join("-")}
                  className={({ active }) =>
                    `relative cursor-default select-none rounded p-2 pl-8 ${
                      active ? "bg-gray-50 text-gray-900" : "text-gray-900"
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
                          <CheckCircleIcon className="w-4" />
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
