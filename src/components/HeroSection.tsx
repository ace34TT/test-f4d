import React from "react";
import {ImArrowUpRight2} from "react-icons/im";
import {useTheme} from "@/lib/ThemeContext";
import AnimatedLogo from "@/components/AnimatedLogo";
import {BorderTrail} from "@/components/BorderTrail";
import {motion} from "framer-motion";

const HeroSection = () => {
  const {isDarkTheme} = useTheme();
  return (
      <section
          id={"hero"}
          className="z-10 flex-grow gap-5 w-full px-5 md:w-8/12 mx-auto flex flex-col items-center justify-center prose max-w-none"
      >
        {/*{isDarkTheme ? (*/}
        {/*    <img*/}
        {/*        src="/images/custom/animated-logo.svg"*/}
        {/*        alt=""*/}
        {/*        className={"w-7/12 m-0"}*/}
        {/*    />*/}
        {/*) : (*/}
        {/*    <img*/}
        {/*        src="/images/custom/light_logo.svg"*/}
        {/*        alt=""*/}
        {/*        className={"w-7/12 m-0"}*/}
        {/*    />*/}
        {/*)}*/}

        <AnimatedLogo></AnimatedLogo>
        <h1
            className={
              "w-full" +
              isDarkTheme
                  ? "text-4xl font-light text-white md:text-6xl text-center"
                  : "text-4xl md:text-6xl font-light text-primary-950 text-center"
            }
        >
          <span className="font-bold">Solutions</span> de développement <br/>
          <span className="font-bold">rapides</span> et{" "}
          <span className="font-bold">flexibles</span> avec
        </h1>
        <div
            className={isDarkTheme ? "bg-[#070917] trailing_border relative border-2 border-accent-700 px-10 md:px-40 w-fit rounded-2xl my-4 py-4 trailing-border" : "bg-white trailing_border relative border-2 border-accent-700 px-10 md:px-40 w-fit rounded-2xl my-4 py-4 trailing-border"}
        >
          {isDarkTheme ? (
              <img src="/images/custom/strapi_next.png" className={"max-w-none w-56"} alt=""/>
          ) : (
              <img
                  src="/images/custom/light_strapi_next.png"
                  className={"max-w-none w-56"}
                  alt=""
              />
          )}
          {/* Animated border trail */}
          <motion.div
              className={"blur-md bg-accent-600 absolute top-0 left-0 h-full w-full border-2 border-accent-700 rounded-2xl"}
              initial={{x: 0, y: 0}}
              animate={{
                x: [0, 7, 0, -7, 0],
                y: [0, 7, -7, 0, 0],
                transition: {duration: 5, repeat: Infinity, ease: "easeInOut"},
              }}
              style={{zIndex: -1}}
          />
        </div>
        <p
            className={
              isDarkTheme
                  ? "text-white text-center"
                  : "text-primary-950 text-center"
            }
        >
          Nous créons des applications web sur mesure, rapides et évolutives grâce
          à Strapi pour une gestion de contenu flexible et Next.js pour des
          performances optimales et un SEO renforcé.
        </p>
        <button
            className="bg-accent-600 hover:bg-accent-500 text-white font-semibold py-2 pl-6 pr-2 rounded-full flex items-center">
          Demander une démo
          <div className={" ml-4 p-4 rounded-full bg-white"}>
            <ImArrowUpRight2 className={"text-accent-600"}/>
          </div>
        </button>
      </section>
  );
};

export default HeroSection;
