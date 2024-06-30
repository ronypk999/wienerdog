// src/Dropdown.tsx
import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";

const ChangeLangBtn = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  const lang = (lang: string) => {
    if (lang === "en-US") {
      return true;
    }
    if (lang === "bn") {
      return true;
    }

    return false;
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="btn hover:bg-transparent hover:border-0 border-0 btn-ghost uppercase"
        onClick={() => setIsOpen(!isOpen)}
      >
        {lang(i18n.language) ? (
          <>
            <img
              src={`/lang/${i18n.language}/flag.png`}
              className="rounded-full"
            />
            {i18n.language}
          </>
        ) : (
          <>
            <img src={`/lang/en-US/flag.png`} className="rounded-full" />
            {t("en_US")}
          </>
        )}
      </button>
      {isOpen && (
        <div className="absolute md:right-1 top-16">
          <div className="flex flex-col bg-black text-white p-3 w-48">
            <button
              className="pr-6 pl-2 flex items-center gap-2 py-2 hover:bg-slate-500"
              onClick={() => changeLanguage("en-US")}
            >
              <img src={`/lang/en-US/flag.png`} className="rounded-full" />
              <span>{t("en_US")}</span>
            </button>
            <button
              className="pr-6 pl-2 flex items-center gap-2 py-2 hover:bg-slate-500"
              onClick={() => changeLanguage("bn")}
            >
              <img src={`/lang/bn/flag.png`} className="rounded-full" />
              <span>{t("bn")}</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChangeLangBtn;
