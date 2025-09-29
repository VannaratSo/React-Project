import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "kh" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <div className="relative row items-center">
      <button
        onClick={toggleLanguage}
        className=" inline-flex h-7 w-18 items-center px-4 py-3 bg-white text-dark text-sm rounded-full shadow-lg hover:bg-gray-700 transition"
      >
        {i18n.language === "en" ? "English" : "ភាសាខ្មែរ"}
      </button>
    </div>
  );
};

export default LanguageSwitcher;
