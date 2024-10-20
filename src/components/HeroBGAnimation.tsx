import { motion } from "framer-motion";
import React from "react";
import AnimatedImage from "@/components/AnimatedImage";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";

const HeroBgAnimation = () => {
  return (
    <div className={"w-full h-full overflow-hidden absolute top-0 left-0 z-0"}>
      <div className={"relative w-full h-full"}>
        {/* Blured background*/}
        <AnimatedImage
          src="/images/custom/hero_bg/1.png"
          className={"absolute top-1/2 transform -translate-y-1/2"}
          animationConfig={{
            toB: {
              y: "+=250", // Move up by 100px
              rotation: 60, // Rotate 360 degrees
              duration: 2, // Duration to move to B
              ease: "power1.inOut",
            },
            toA: {
              y: "-=250", // Move back down
              rotation: 0, // Reset rotation
              duration: 2, // Duration to return to A
              ease: "power1.inOut",
            },
          }}
        />
        <AnimatedImage
          src="/images/custom/hero_bg/2.png"
          className={
            "left-[250px] absolute top-1/2  transform -translate-y-[450px]"
          }
          animationConfig={{
            toB: {
              y: "-=500", // Move up by 100px
              rotation: 60, // Rotate 360 degrees
              duration: 2, // Duration to move to B
              ease: "power1.inOut",
            },
            toA: {
              y: "+=500", // Move back down
              rotation: 0, // Reset rotation
              duration: 2, // Duration to return to A
              ease: "power1.inOut",
            },
          }}
        />
        <BrowserView>
          <AnimatedImage
            src="/images/custom/hero_bg/3.png"
            className={
              "-right-24 absolute top-1/2  transform -translate-y-1/2"
            }
            animationConfig={{
              toB: {
                y: "+100",
                rotation: 90, // Rotate 360 degrees
                duration: 2, // Duration to move to B
                ease: "power1.inOut",
              },
              toA: {
                y: "-100",
                rotation: 0, // Reset rotation
                duration: 2, // Duration to return to A
                ease: "power1.inOut",
              },
            }}
          />
        </BrowserView>

        {/* Forground */}
        <AnimatedImage
          src="/images/custom/hero_bg/4.png"
          className={
            "rotate-90 scale-50 absolute top-1/2  transform -translate-y-1/2"
          }
          animationConfig={{
            toB: {
              x: "+=250", // Move up by 100px
              y: "+25",
              rotation: 190, // Rotate 360 degrees
              duration: 2, // Duration to move to B
              ease: "power1.inOut",
            },
            toA: {
              x: "-=250", // Move back down
              y: "-25",
              rotation: 0, // Reset rotation
              duration: 2, // Duration to return to A
              ease: "power1.inOut",
            },
          }}
        />

          {" "}
          <AnimatedImage
            src="/images/custom/hero_bg/5.png"
            className={
              "hidden md:block right-[400px] absolute top-1/2  transform -translate-y-[300px]"
            }
            animationConfig={{
              toB: {
                y: "+100",
                rotation: 190, // Rotate 360 degrees
                duration: 2, // Duration to move to B
                ease: "power1.inOut",
              },
              toA: {
                y: "-100",
                rotation: 0, // Reset rotation
                duration: 2, // Duration to return to A
                ease: "power1.inOut",
              },
            }}
          />
          <AnimatedImage
            src="/images/custom/hero_bg/6.png"
            className={
              "hidden md:block right-[150px] rotate-45 absolute top-1/2  transform -translate-y-1/2"
            }
            animationConfig={{
              toB: {
                y: "+100",
                rotation: 90, // Rotate 360 degrees
                duration: 2, // Duration to move to B
                ease: "power1.inOut",
              },
              toA: {
                y: "-100",
                rotation: 0, // Reset rotation
                duration: 2, // Duration to return to A
                ease: "power1.inOut",
              },
            }}
          />

      </div>
    </div>
  );
};

export default HeroBgAnimation;
