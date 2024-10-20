import React from "react";
import {ImArrowUpRight2} from "react-icons/im";
import {useTheme} from "@/lib/ThemeContext";
import AnimatedLogo from "@/components/AnimatedLogo";
import {motion} from "framer-motion";
import AnimatedButton from "@/components/AnimatedButton";
import {isMobile} from "react-device-detect";

const HeroSection = () => {
  const {isDarkTheme} = useTheme();
  return (
      <section id={"hero"} className=" z-10 flex-grow gap-5 w-full px-5 md:w-11/12 lg:w-8/12 mx-auto flex flex-col items-center justify-center prose max-w-none">
        <AnimatedLogo></AnimatedLogo>
        <h1 className={`w-full -mt-8 text-4xl md:text-6xl font-light text-center ${isDarkTheme ? "" : "text-primary-950"}`}>
          <span className="font-bold">Solutions</span> de développement <br/>
          <span className="font-bold">rapides</span> et{" "}
          <span className="font-bold">flexibles</span> avec
        </h1>

        {/*{*/}
        {/*  isMobile ? <div*/}
        {/*      className={isDarkTheme ? "bg-[#070917] trailing_border relative border-2 border-accent-700 px-10 md:px-40 w-fit rounded-2xl my-4 py-4 trailing-border" : "bg-white trailing_border relative border-2 border-accent-700 px-10 md:px-40 w-fit rounded-2xl my-4 py-4 trailing-border"}>*/}
        {/*    {isDarkTheme ? (*/}
        {/*        <img src="/images/custom/strapi_next.png" className={"max-w-none w-56"} alt=""/>*/}
        {/*    ) : (*/}
        {/*        <img src="/images/custom/light_strapi_next.png" className={"max-w-none w-56"} alt=""/>*/}
        {/*    )}*/}
        {/*    <motion.div*/}
        {/*        className={"blur-md bg-accent-600 absolute top-0 left-0 h-full w-full border-2 border-accent-700 rounded-2xl"}*/}
        {/*        initial={{x: 0, y: 0}}*/}
        {/*        animate={{*/}
        {/*          x: [0, 7, 0, -7, 0],*/}
        {/*          y: [0, 7, -7, 0, 0],*/}
        {/*          transition: {duration: 5, repeat: Infinity, ease: "easeInOut"},*/}
        {/*        }}*/}
        {/*        style={{zIndex: -1}}*/}
        {/*    />*/}
        {/*  </div>*/}
        {/*      : <AnimatedButton></AnimatedButton>*/}
        {/*}*/}

        <AnimatedButton></AnimatedButton>

        <p className={`text-center font-medium ${isDarkTheme ? "text-white" : "text-primary-950"}`}>
          Nous créons des applications web sur mesure, rapides et évolutives grâce
          à Strapi pour une gestion de contenu flexible et Next.js pour des
          performances optimales et un SEO renforcé.
        </p>

        <button
            className="bg-accent-600 hover:bg-accent-500 text-white font-semibold py-2 pl-6 pr-2 rounded-full flex items-center ">
          Demander une démo
          <div className={"ml-4 p-2 rounded-full bg-white"}>
            <ImArrowUpRight2 className={"text-accent-600"}/>
          </div>
        </button>
      </section>
  );
};

export default HeroSection;
