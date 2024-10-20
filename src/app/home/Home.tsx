"use client";
import React from "react";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import { useTheme } from "@/lib/ThemeContext";
import HeroBgAnimation from "@/components/HeroBGAnimation";

const Home = () => {
  const { isDarkTheme } = useTheme();
  return (
    <div
      className={` ${
        isDarkTheme
          ? "bg-gradient-to-b from-[#070b14] to-[#07071b] text-white"
          : "bg-white text-black"
      }`}
    >
      <div className={"h-screen overflow-y-hidden max-h-screen flex flex-col"}>
        <HeroBgAnimation></HeroBgAnimation>
        <Navbar />
        <HeroSection />
      </div>
    </div>
  );
};

export default Home;
