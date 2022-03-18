import { useState, useEffect } from "react";
import { SelectChangeEvent } from "@mui/material/Select";

const useRandomPhone = () => {
  const [randomPhone, setRandomPhone] = useState<string>("");
  const [country, setCountry] = useState<string>("France");

  useEffect(() => {
    generatePhoneByCountry();
  }, [country]);

  const handleChangeCountry = (event: SelectChangeEvent) => {
    setCountry(event.target.value);
  };

  const generatePhone = (
    countryPrefix: string,
    mobilePrefixArray: string[],
    rawNumber: string
  ): string => {
    const mobilePrefix =
      mobilePrefixArray[Math.floor(Math.random() * mobilePrefixArray.length)];
    return `${countryPrefix}${mobilePrefix}${rawNumber}`;
  };

  const randomNumber = (numberLength: number): string => {
    const numberStart = "1".padEnd(numberLength, "0");
    const numberEnd = "9".padEnd(numberLength, "0");
    return Math.floor(
      Number(numberStart) + Math.random() * Number(numberEnd)
    ).toString();
  };

  function generatePhoneByCountry() {
    switch (country) {
      case "France":
        const frPhone = generatePhone("+33", ["6", "7"], randomNumber(8));
        setRandomPhone(frPhone);
        break;
      case "Belgique":
        // +32 497 89 04 28
        // +32 477 40 17 97
        const bePhone = generatePhone(
          "+32",
          [
            "494",
            "495",
            "496",
            "497",
            "498",
            "499",
            "470",
            "471",
            "472",
            "473",
            "474",
            "475",
            "476",
            "477",
            "478",
            "479",
          ],
          randomNumber(6)
        );
        setRandomPhone(bePhone);
        break;
      default:
        setRandomPhone("00000000");
    }
  }
  function openUrl() {
    if (randomPhone !== "") {
      const url = `https://wa.me/${randomPhone}`;
      window.open(url, "_blank")?.focus();
    }
  }
  return {
    generatePhoneByCountry,
    randomPhone,
    country,
    handleChangeCountry,
    openUrl,
  };
};

export default useRandomPhone;
