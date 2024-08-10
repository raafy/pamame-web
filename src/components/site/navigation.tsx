"use client";

import DownIcon from "@/assets/icons/chevron-down-outline.svg";
import UpIcon from "@/assets/icons/chevron-up-outline.svg";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navigation: React.FC = () => {
  const [menuVisible, setMenuVisible] = useState<boolean>(false);

  const pathname = usePathname();

  const getCurrentPathname = (pathname: string) => {
    switch (pathname) {
      case "/":
        return "Home";
      case "/register":
        return "Register Now";
      case "/parenting-in-nature":
        return "Parenting In Nature";
      case "/little-hero-challenge":
        return "Little Hero Challenge";
      default:
        break;
    }
  };

  return (
    <div className="absolute z-10 flex flex-col self-start p-4 text-xs md:w-[150px]">
      <button
        onClick={() => setMenuVisible(!menuVisible)}
        className="flex items-center justify-between gap-4 rounded bg-[#F49F12] p-2 font-beachday drop-shadow md:px-4 md:py-2"
      >
        <p className="hidden flex-wrap text-left text-xs text-white md:flex">
          {getCurrentPathname(pathname)}
        </p>
        <Image
          src={menuVisible ? UpIcon : DownIcon}
          alt="Dropdown Icon"
          className="h-4 w-4 invert"
        />
      </button>
      {menuVisible && (
        <div className="mt-1 flex flex-col items-center bg-white text-center drop-shadow-md">
          <Link
            href={"/"}
            onClick={() => setMenuVisible(false)}
            className={clsx(
              "w-full px-4 py-2 font-beachday text-black hover:bg-[#F49F12] hover:text-white",
              pathname === "/" && "hidden",
            )}
          >
            Home
          </Link>
          <Link
            href={"/parenting-in-nature"}
            onClick={() => setMenuVisible(false)}
            className={clsx(
              "w-full px-4 py-2 font-beachday text-black hover:bg-[#F49F12] hover:text-white",
              pathname === "/parenting-in-nature" && "hidden",
            )}
          >
            Parenting In Nature
          </Link>
          <Link
            href={"/little-hero-challenge"}
            onClick={() => setMenuVisible(false)}
            className={clsx(
              "w-full px-4 py-2 font-beachday text-black hover:bg-[#F49F12] hover:text-white",
              pathname === "/little-hero-challenge" && "hidden",
            )}
          >
            Little Hero Challenge
          </Link>
          <Link
            href={"/register"}
            onClick={() => setMenuVisible(false)}
            className={clsx(
              "w-full px-4 py-2 font-beachday text-black hover:bg-[#F49F12] hover:text-white",
              pathname === "/register" && "hidden",
            )}
          >
            Register Now
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navigation;
