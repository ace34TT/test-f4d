import React from 'react'
import {ImArrowUpRight2} from "react-icons/im";

const HeroSection = () => {
  return (
      <section
          id={"hero"}
          className="z-10 flex-grow w-6/12 mx-auto flex flex-col items-center justify-center prose max-w-none"
      >
        <img src="images/animated-logo.svg" alt="" className={"w-7/12 m-0"}/>
        {/*<AnimatedLogo></AnimatedLogo>*/}
        <h1 className="font-light text-white text-6xl text-center">
          <span className="font-bold">Solutions</span> de développement <br/>
          <span className="font-bold">rapides</span> et{" "}
          <span className="font-bold">flexibles</span> avec
        </h1>
        <div className={"border border-accent-700 px-40 rounded-2xl"}>
          <img src="images/strapi_next.png" className={"my-6"} alt=""/>
        </div>
        <p className={"text-white text-center"}>
          Nous créons des applications web sur mesure, rapides et évolutives
          grâce à Strapi pour une gestion de contenu flexible et Next.js pour
          des performances optimales et un SEO renforcé.
        </p>
        <button
            className="bg-accent-600 hover:bg-accent-500 text-white font-semibold py-2 pl-6 pr-2 rounded-full flex items-center">
          Demander une démo
          <div className={" ml-4 p-4 rounded-full bg-white"}>
            <ImArrowUpRight2 className={"text-accent-600"}/>
          </div>
        </button>
      </section>
  )
}

export default HeroSection