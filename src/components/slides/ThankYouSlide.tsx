"use client";

import PixelTransition from "@/components/ui/PixelTransition";

export function ThankYouSlide() {
  return (
    <div className="w-full flex flex-col items-center justify-center min-h-[500px]">
      <div className="relative w-full max-w-2xl">
        <PixelTransition
          firstContent={
            <div className="w-full h-full flex flex-col items-center justify-center p-12 md:p-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-glovo-dark">
                Thank you!
              </h1>
            </div>
          }
          secondContent={
            <div className="w-full h-full flex flex-col items-center justify-center p-12 md:p-16">
              <p className="text-2xl md:text-3xl font-bold text-glovo-dark">
                Patricia Belestá / Lawyer
              </p>
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
  );
}
