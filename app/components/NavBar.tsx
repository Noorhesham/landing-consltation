"use client";
import React, { useEffect, useState } from "react";

import { AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

import { useLocale } from "next-intl";
import MaxWidthWrapper from "./MaxWidthWrapper";
import MotionItem from "./MotionItem";
import Logo from "./Logo";
import NavLink from "./NavLink";
import Language from "./Language";

const NavBar = () => {
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [isPhone, setIsPhone] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isTopPage, setIsTopPage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 50) {
        setIsTopPage(true);
      } else setIsTopPage(false);
      if (window.scrollY > lastScrollY) {
        setIsScrollingDown(true);
      } else {
        setIsScrollingDown(false);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isTopPage]);
  useEffect(() => {
    console.log(isPhone);
    const handleResize = () => {
      setIsPhone(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  let links = [
    {
      text: "ABOUT US",
      href: "#about",
    },
    {
      text: "Contact",
      href: "#contact",
    },
    {
      text: "Our Services",
      href: "#services",
    },
  ];
  const locale = useLocale();
  return (
    <header className=" w-full">
      <nav
        className={` text-main font-semibold  placeholder:text-white  ${
          isScrollingDown && "bg-white/80 "
        } fixed inset-0 text-white  max-h-[5rem] lg:max-h-[7rem]  z-[99]   flex flex-col gap-2  py-4 transition-all duration-300 ${
          isScrollingDown
            ? "translate-y-[-110%]"
            : !isTopPage && !isScrollingDown
            ? `!text-black  -translate-y-2 lg:-translate-y-5 `
            : "translate-y-0 !text-white"
        }`}
      >
        {" "}
        <MaxWidthWrapper noPadding>
          <div
            className={cn(
              "flex relative z-20 w-full items-center    ",
              !isTopPage && !isScrollingDown ? "justify-center lg:justify-between" : "justify-between"
            )}
          >
            <div className="flex w-full  justify-between items-center  gap-20 ">
              <div className=" w-full  md:hidden flex">
                <AnimatePresence>
                  {isTopPage && isPhone && (
                    <MotionItem
                      nohover
                      exit={{ opacity: 0 }}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      className={` flex duration-150  items-center`}
                    >
                      <Logo />
                    </MotionItem>
                  )}
                </AnimatePresence>
              </div>

              <div className={`  md:flex hidden duration-150  items-center`}>
                <Logo />
              </div>

              <ul className=" hidden lg:flex z-30 relative items-center  gap-4 xl:gap-8 ">
                {links.map((link) => (
                  <NavLink key={link.text} href={link.href} text={link.text} />
                ))}
                <Language />
              </ul>
            </div>
          </div>
        </MaxWidthWrapper>
      </nav>
    </header>
  );
};

export default NavBar;
