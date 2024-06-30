import { FaTelegram } from "react-icons/fa";
import logo from "../assets/logo.svg";
import { FaSquareXTwitter } from "react-icons/fa6";
import { useEffect, useRef, useState } from "react";
import { LuMenu } from "react-icons/lu";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { useInfoContext } from "../hook/ContextHook";
import ChangeLangBtn from "../components/ChangeLangBtn";
import { useTranslation } from "react-i18next";
const Header = () => {
  const [isSticky, setIsSticky] = useState(true);
  const [hide, setHide] = useState(true);
  const [hide2, setHide2] = useState(true);
  const { t } = useTranslation();
  const stickyElement = useRef<HTMLDivElement>(null);
  const { scrollToTarget, scrollToFaq, scrollToHow, scrollToWhat } =
    useInfoContext();
  useEffect(() => {
    const handleScroll = () => {
      if (stickyElement && stickyElement.current) {
        const currentTop =
          stickyElement.current.getBoundingClientRect().top + window.scrollY;
        if (currentTop === 0) {
          setIsSticky(true);
        } else {
          if (isSticky) {
            setIsSticky(false);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menuHandle = () => {
    if (hide) {
      document.body.style.overflow = "hidden";
      setHide2(!hide);
      setTimeout(() => {
        setHide(!hide);
      }, 100);
    } else {
      document.body.style.overflow = "";
      setHide(!hide);
      setTimeout(() => {
        setHide2(!hide);
      }, 500);
    }
  };

  return (
    <>
      <div
        ref={stickyElement}
        className={`max-w-[1600px] mx-auto sticky top-0 mb-[-100px] flex items-center gap-12 ${
          isSticky ? "bg-transparent" : "bg-black"
        } z-10`}
      >
        <div className="flex px-3 justify-between items-center w-full md:w-fit">
          <div className="">
            <img src={logo} />
          </div>
          <div className="md:hidden">
            <div onClick={menuHandle} className="text-3xl">
              {hide2 ? <LuMenu /> : <MdOutlineRestaurantMenu />}
            </div>
          </div>
        </div>
        <div
          className={`${hide ? "-right-[100rem]" : "right-0"} ${
            hide2 && "hidden"
          } absolute h-screen nav bg-black md:bg-transparent md:h-fit p-3 space-y-12 md:space-y-0 md:p-0 top-24 bottom-0 md:static md:flex items-center w-full justify-around lg:justify-between lg:px-6`}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className="hidden md:flex flex-col md:flex-row text-white items-start text-2xl gap-6">
            <button onClick={scrollToWhat}>{t("nav_1")}</button>
            <button onClick={scrollToHow}>{t("nav_2")}</button>
            <button onClick={scrollToFaq}>{t("nav_3")}</button>
          </div>
          <div className="md:hidden flex flex-col md:flex-row text-white items-start text-2xl gap-6">
            <button
              onClick={() => {
                scrollToWhat();
                menuHandle();
              }}
            >
              {t("nav_1")}
            </button>
            <button
              onClick={() => {
                scrollToHow();
                menuHandle();
              }}
            >
              {t("nav_2")}
            </button>
            <button
              onClick={() => {
                scrollToFaq();
                menuHandle();
              }}
            >
              {t("nav_3")}
            </button>
          </div>
          <div className="flex flex-col md:flex-row gap-3 text-white">
            <div className="flex gap-2 text-5xl">
              <FaSquareXTwitter />
              <FaTelegram />
            </div>
            <button
              onClick={() => {
                scrollToTarget();
                menuHandle();
              }}
              className="md:hidden btn bg-theme-1 text-base px-6"
            >
              {t("nav_buy_btn")}
            </button>
            <button
              onClick={() => {
                scrollToTarget();
              }}
              className="hidden md:block btn bg-theme-1 text-base px-6"
            >
              {t("nav_buy_btn")}
            </button>
            <ChangeLangBtn></ChangeLangBtn>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
