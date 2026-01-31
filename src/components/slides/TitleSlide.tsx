"use client";

import Image from "next/image";
import PixelTransition from "@/components/ui/PixelTransition";

export function TitleSlide() {
  return (
    <div className="relative w-full min-h-[500px] flex flex-col">
      {/* Top center: Speaker info */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10 flex justify-center">
        <p className="text-glovo-dark text-sm md:text-base text-center">
          <span className="font-bold">Patricia Belestá</span>
          <span className="mx-1">|</span>
          <span>Data Privacy Lawyer</span>
        </p>
      </div>

      {/* Central white box with title + pixel transition to logo */}
      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="relative w-full max-w-2xl">
          <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-gray-200 to-transparent rounded-tl-3xl z-20 pointer-events-none" />
          <PixelTransition
            firstContent={
              <div className="w-full h-full flex flex-col items-center justify-center p-12 md:p-16 text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-glovo-dark uppercase tracking-tight mb-6 md:mb-8">
                  Glovo Data Privacy
                </h1>
                <p className="text-xl md:text-2xl text-glovo-dark uppercase tracking-wide font-normal">
                  Business Case Interview
                </p>
              </div>
            }
            secondContent={
              <div className="w-full h-full flex items-center justify-center p-8 md:p-12">
                <Image
                  src="/logoglovo.png"
                  alt="Glovo logo"
                  width={200}
                  height={200}
                  className="object-contain w-32 h-32 md:w-48 md:h-48"
                />
              </div>
            }
            gridSize={8}
            pixelColor="#00a082"
            once={false}
            animationStepDuration={0.4}
            aspectRatio="56.25%"
            className="shadow-xl"
          />
        </div>
      </div>

      {/* Bottom footer */}
      <div className="flex items-center justify-center gap-4 py-6 flex-wrap">
        <div className="flex items-center gap-2 text-glovo-dark">
          <div className="w-6 h-6 rounded-full bg-glovo-teal flex items-center justify-center">
            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z" />
            </svg>
          </div>
          <span className="font-semibold text-sm md:text-base">6 Scenarios</span>
        </div>
        <div className="w-px h-5 bg-glovo-dark/30" />
        <div className="flex items-center gap-2 text-glovo-dark">
          <span className="font-semibold text-sm md:text-base">45 Minutes</span>
        </div>
        <div className="w-px h-5 bg-glovo-dark/30" />
        <div className="flex items-center gap-2 text-glovo-dark">
          <span className="font-semibold text-sm md:text-base">Privacy-First Approach</span>
        </div>
      </div>

      {/* Thin lighter yellow stripe at bottom */}
      <div className="h-1 bg-glovo-yellow/80 rounded-b" />
    </div>
  );
}
