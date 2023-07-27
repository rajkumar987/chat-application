"use client";
import { COUNTRIES } from "@/constants/countries";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export default function CountrySelector({
  id,
  open,
  disabled = false,
  onToggle,
  onChange,
  selectedValue,
}) {
  const ref = useRef(null);

  useEffect(() => {
    const mutableRef = ref;

    const handleClickOutside = (event) => {
      if (
        mutableRef.current &&
        !mutableRef.current.contains(event.target) &&
        open
      ) {
        onToggle();
        setQuery("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  const [query, setQuery] = useState("");

  return (
    <div ref={ref}>
      <div className="mt-1 relative">
        <button
          type="button"
          className={`${
            disabled ? "bg-neutral-50" : "bg-white"
          } relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-3.5 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400 sm:text-sm`}
          aria-haspopup="listbox"
          aria-expanded="true"
          aria-labelledby="listbox-label"
          onClick={onToggle}
          disabled={disabled}
        >
          <span className="truncate flex items-center">
            <img
              alt={`${selectedValue?.value}`}
              src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${selectedValue?.value}.svg`}
              className={"inline mr-3 h-4 rounded-sm"}
            />
            <span className="text-[16px]">{selectedValue?.title}</span>
          </span>
          <span
            className={`absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none ${
              disabled ? "hidden" : ""
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1.25em"
              viewBox="0 0 320 512"
            >
              <path
                fill="#D3D3D3"
                d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"
              />
            </svg>
          </span>
        </button>

        <AnimatePresence>
          {open && (
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1 }}
              className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-80 rounded-md text-base ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
              tabIndex={-1}
              role="listbox"
              aria-labelledby="listbox-label"
              aria-activedescendant="listbox-option-3"
            >
              <div className="sticky top-0 z-10 bg-white">
                <li className=" text-gray-900 cursor-default select-none relative py-2 px-3">
                  <input
                    type="search"
                    name="search"
                    autoComplete={"off"}
                    className="focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    placeholder={"Search a country"}
                    onChange={(e) => setQuery(e.target.value)}
                  />
                </li>
                <hr />
              </div>

              <div
                className={
                  "max-h-64 scrollbar scrollbar-track-gray-100 scrollbar-thumb-gray-300 hover:scrollbar-thumb-gray-600 scrollbar-thumb-rounded scrollbar-thin overflow-y-scroll"
                }
              >
                {COUNTRIES.filter((country) =>
                  country.title.toLowerCase().startsWith(query.toLowerCase())
                ).length === 0 ? (
                  <li className="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9">
                    No countries found
                  </li>
                ) : (
                  COUNTRIES.filter((country) =>
                    country.title.toLowerCase().startsWith(query.toLowerCase())
                  ).map((value, index) => {
                    return (
                      <li
                        key={`${id}-${index}`}
                        className="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9 flex items-center hover:bg-gray-50 transition"
                        id="listbox-option-0"
                        role="option"
                        onClick={() => {
                          onChange(value);
                          setQuery("");
                          onToggle();
                        }}
                      >
                        <img
                          alt={`${value.value}`}
                          src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${value.value}.svg`}
                          className={"inline mr-2 h-4 rounded-sm"}
                        />

                        <span className="font-normal truncate">
                          {value.title}
                        </span>
                        {value.value === selectedValue?.value ? (
                          <span className="text-blue-600 absolute inset-y-0 right-0 flex items-center pr-8">
                            <svg
                              className="h-5 w-5"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </span>
                        ) : null}
                      </li>
                    );
                  })
                )}
              </div>
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
