"use client";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";

export default function ImageHero({ title }) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Register the GSAP plugin
      gsap.registerPlugin(ScrollTrigger);

      // Match media for responsive animations
      ScrollTrigger.matchMedia({
        // Desktop screens (840px and above)
        "(min-width: 940px)": () => {
          gsap.fromTo(
            ".programmes-text",
            { y: "0", opacity: 1, color: "white" }, // Initial state
            {
              y: "45vh",
              x: "13vw", // Move down
              opacity: 1,
              color: "#800080", // Transition to violet
              duration: 3,
              scrollTrigger: {
                trigger: ".programmes-text",
                start: "top 0", // Start animation
                end: "bottom 0", // End animation
                scrub: 1, // Sync animation with scroll
                markers: true,
                onUpdate: (self) => {
                  const progress = self.progress; // Animation progress (0 to 1)
                  const contentDiv = document.querySelector(".content-div");
                  contentDiv.style.paddingTop = `${5 + progress * 20}vh`; // From 5vh to 25vh
                },
              },
            }
          );
        },

        // Medium screens (between 640px and 840px)
        "(min-width: 640px) and (max-width: 939px)": () => {
          gsap.fromTo(
            ".programmes-text",
            { y: "0", opacity: 1, color: "white" }, // Initial state
            {
              y: "45vh", // Adjust movement for medium screens
              x: "7vw", // Horizontal adjustment
              opacity: 1,
              color: "#800080", // Transition to violet
              duration: 2.5,
              scrollTrigger: {
                trigger: ".programmes-text",
                start: "top 0", // Start animation
                end: "bottom 0", // End animation
                scrub: 1, // Sync animation with scroll
                markers: true,
                onUpdate: (self) => {
                  const progress = self.progress; // Animation progress (0 to 1)
                  const contentDiv = document.querySelector(".content-div");
                  contentDiv.style.paddingTop = `${4 + progress * 15}vh`; // From 4vh to 22vh
                },
              },
            }
          );
        },

        // Mobile screens (below 640px)
        "(max-width: 639px)": () => {
          gsap.fromTo(
            ".programmes-text",
            { y: "0", opacity: 1, color: "white" }, // Initial state
            {
              y: "25vh", // Smaller movement for mobile
              opacity: 1,
              color: "#800080", // Transition to violet
              duration: 2,
              scrollTrigger: {
                trigger: ".programmes-text",
                start: "top 0", // Start animation
                end: "bottom 0", // End animation
                scrub: 1, // Sync animation with scroll
                markers: true,
                onUpdate: (self) => {
                  const progress = self.progress; // Animation progress (0 to 1)
                  const contentDiv = document.querySelector(".content-div");
                  contentDiv.style.paddingTop = `${3 + progress * 15}vh`; // From 3vh to 18vh
                },
              },
            }
          );
        },
      });
    }
  }, []);

  return (
    <div className="relative top-0 w-full h-[40vh] sm:h-[70vh]">
      <img
        src="landing.png"
        className="absolute w-full h-[40vh] sm:h-full object-cover -z-20"
        alt="Background"
      />
      <div className="absolute inset-0 h-[40vh] sm:h-full bg-black opacity-35 -z-20"></div>
      <div
        className="font-saira programmes-text text-[5em] pt-[17vh] sm:pt-[25vh] font-bold uppercase text-center sm:text-[7em]"
        style={{ color: "white" }} // Initial color set to white
      >
        {title}
      </div>
    </div>
  );
}
