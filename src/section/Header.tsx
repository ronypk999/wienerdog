import { FaTelegram } from "react-icons/fa";
import logo from "../assets/logo.svg";
import { FaSquareXTwitter } from "react-icons/fa6";
import { useEffect, useRef, useState } from "react";
import { LuMenu } from "react-icons/lu";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { useInfoContext } from "../hook/ContextHook";
const Header = () => {
  const [isSticky, setIsSticky] = useState(true);
  const [hide, setHide] = useState(true);
  const [hide2, setHide2] = useState(true);
  const stickyElement = useRef<HTMLDivElement>(null);
  const { scrollToTarget } = useInfoContext();
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
      setHide2(!hide);
      setTimeout(() => {
        setHide(!hide);
      }, 100);
    } else {
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
          <div className="flex flex-col md:flex-row text-white text-2xl gap-6">
            <a href="#">What is this?</a>
            <a href="#">How to buy?</a>
            <a href="#">Faq</a>
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
              Buy Now
            </button>
            <button
              onClick={() => {
                scrollToTarget();
              }}
              className="hidden md:block btn bg-theme-1 text-base px-6"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
