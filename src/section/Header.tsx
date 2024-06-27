import { FaTelegram } from "react-icons/fa";
import logo from "../assets/logo.svg";
import { FaSquareXTwitter } from "react-icons/fa6";
import { useEffect, useRef, useState } from "react";
const Header = () => {
  const [isSticky, setIsSticky] = useState(true);
  const stickyElement = useRef(null);
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

  return (
    <>
      <div
        ref={stickyElement}
        className={`sticky top-0 mb-[-100px] flex items-center justify-around ${
          isSticky ? "bg-transparent" : "bg-black"
        } z-10`}
      >
        <div>
          <img src={logo} />
        </div>
        <div className="flex text-white text-2xl gap-6">
          <a href="#">What is this?</a>
          <a href="#">How to buy?</a>
          <a href="#">Faq</a>
        </div>
        <div className="flex gap-3 text-5xl text-white">
          <FaSquareXTwitter />
          <FaTelegram />
          <button className="btn bg-theme-1 text-base px-6">Buy Now</button>
        </div>
      </div>
    </>
  );
};

export default Header;
