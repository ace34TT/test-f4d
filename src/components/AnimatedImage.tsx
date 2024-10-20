import React, { useRef } from "react";
import { gsap } from "gsap";

interface AnimationConfig {
  toB: {
    x?: string;
    y?: string; // For vertical movement
    rotation?: number; // Rotation in degrees
    duration: number; // Duration of the movement to B
    ease?: string; // Easing function
  };
  toA: {
    x?: string;
    y?: string; // For vertical movement
    rotation?: number; // Rotation in degrees
    duration: number; // Duration of the return to A
    ease?: string; // Easing function
  };
}

interface AnimatedImageProps {
  src: string; // Image source
  animationConfig: AnimationConfig; // Animation configuration
  className?: string; // Additional class names for the image container (optional)
}

const AnimatedImage: React.FC<AnimatedImageProps> = ({
  src,
  animationConfig,
  className, // Use 'className' directly
}) => {
  const animatedImageRef = useRef<HTMLImageElement | null>(null);

  const animateImage = () => {
    // Move to position B
    gsap.to(animatedImageRef.current, {
      ...animationConfig.toB,
      onComplete: () => {
        // Pause at position B
        gsap.delayedCall(1, () => {
          // Move back to position A
          gsap.to(animatedImageRef.current, {
            ...animationConfig.toA,
            onComplete: () => {
              // Pause at position A
              gsap.delayedCall(1, animateImage); // Restart the animation after the pause
            },
          });
        });
      },
    });
  };

  // Start the animation on render
  animateImage();

  return (
    <img
      ref={animatedImageRef}
      src={src}
      className={`absolute ${className}`}
      alt=""
    />
  );
};

export default AnimatedImage;
