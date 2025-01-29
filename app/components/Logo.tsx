"use client";
import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  const locle = useLocale();
  return (
    <Link href={"/"} className=" relative w-96 h-20">
      <Image src={`/${locle}.png`} alt="logo" fill className={` object-left object-contain`} />
    </Link>
  );
};

export default Logo;
