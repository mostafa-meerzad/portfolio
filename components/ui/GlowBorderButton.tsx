"use client";
import { PropsWithChildren } from "react";

const FancyGlowButton = ({ children }: PropsWithChildren) => {
  return (
    <div className="relative inline-flex items-center justify-center p-[2px] rounded-lg overflow-hidden group">
      <div
        className="absolute size-56 rounded-full bg-conic  via-blue-600 to-blue-500 from-blue-600/50 opacity-0 group-hover:opacity-100 group-hover:animate-spin transition-opacity delay-75 duration-300"
        style={{
          animationDuration: "3s",
          animationTimingFunction: "cubic-bezier(0.46, 0.03, 0.52, 0.96)",
        }}
      ></div>
      <div className="z-10"> {children}</div>
    </div>
  );
};

export default FancyGlowButton;
