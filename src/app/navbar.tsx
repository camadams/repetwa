"use client";
import { Inter, Roboto } from "next/font/google";
import React, {
  useState,
  useEffect,
  useCallback,
  Dispatch,
  SetStateAction,
} from "react";
import localFont from "next/font/local";

const myFont = localFont({
  src: [{ path: "../../public/shinAkibapunx.ttf", weight: "700" }],
});
// const inter = Inter({ subsets: ["latin"], weight: "100" });
const NavBar = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = useCallback(() => {
    const currentScrollPos = window.pageYOffset;
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  }, [prevScrollPos]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <nav
      className={`z-10 fixed w-full transition-transform duration-300  ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="p-4 flex items-center bg-primary/70 justify-center">
        <button
          onClick={() => setIsOpen((prev) => (prev = !prev))}
          className="text-3xl absolute left-4 text-slate-300"
        >
          &#9776;
        </button>
        <p className={`text-6xl ${myFont.className} text-slate-300`}>REPETWA</p>
      </div>
    </nav>
  );
};

export default NavBar;
