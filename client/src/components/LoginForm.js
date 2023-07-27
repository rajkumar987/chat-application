"use client";

import React, { useState } from "react";
import { COUNTRIES } from "@/constants/countries";
import CountrySelector from "./CountrySelector";
import { toast } from "react-toastify";

const LoginForm = ({ handleSubmit, submitting }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [country, setCountry] = useState(COUNTRIES[0]);
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const handleChange = (evt) => {
    const value = evt.target.value;
    const isValidPhoneNumber = /^[6-9]\d*$/.test(value);
    const allowDigits = /^\d*$/.test(value);
    if (allowDigits) {
      setPhone(value);
      if (!isValidPhoneNumber && value !== "") {
        setPhoneError("Enter Valid Phone Number");
      } else {
        setPhoneError("");
      }
    } else {
      toast.dismiss(true);
      toast.error("Only digits are allowed");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center gap-2.5 py-16 ">
      <h1 className="text-[26px] text-gray-600 font-extralight tracking-tighter">
        Enter phone number
      </h1>
      <p className="text-slate-500 text-sm">
        Select a country and enter your WhatsApp phone number.
      </p>
      <div className="my-4 flex flex-col gap-3">
        <CountrySelector
          className="px-12 py-3.5 border border-gray-200 rounded-lg bg-white"
          id={"country-selector"}
          open={isOpen}
          onToggle={() => setIsOpen(!isOpen)}
          onChange={setCountry}
          selectedValue={COUNTRIES.find((option) => option === country)}
        />
        <span className="pr-5 pl-4 py-3.5 border border-gray-200 rounded-lg bg-white focus:outline-gray-400 flex gap-1.5">
          <p>{country?.prefix}</p>
          <input
            onChange={handleChange}
            className="outline-none"
            type="text"
            maxLength={10}
            value={phone}
          />
        </span>
        <p className="text-xs pl-3 text-red-500">{phoneError}</p>

        <button
          className="uppercase bg-[#008069] w-2/6 py-2.5 mx-auto rounded text-gray-50 text-sm px-2.5 tracking-wider font-medium disabled:bg-green-400/70 disabled:cursor-not-allowed relative"
          disabled={phoneError || phone.length < 10 || submitting}
          onClick={() => handleSubmit(phone)}
        >
          {submitting && (
            <div className="absolute left-2">
              <div className="loader-dots block relative w-5 h-5">
                <div className="absolute top-0 mt-1 w-2 h-2 rounded-full bg-green-500"></div>
                <div className="absolute top-0 mt-1 w-2 h-2 rounded-full bg-green-500"></div>
                <div className="absolute top-0 mt-1 w-2 h-2 rounded-full bg-green-500"></div>
                <div className="absolute top-0 mt-1 w-2 h-2 rounded-full bg-green-500"></div>
              </div>
            </div>
          )}
          next
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
