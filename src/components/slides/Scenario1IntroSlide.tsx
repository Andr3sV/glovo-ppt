"use client";

interface ScenarioIntroSlideProps {
  num: number;
  title: string;
  description: string;
}

export function ScenarioIntroSlide({ num, title, description }: ScenarioIntroSlideProps) {
  return (
    <div className="w-full flex flex-col items-center justify-center min-h-[500px]">
      {/* Wrapper: badge overlaps top of card - half in yellow, half on white */}
      <div className="relative w-full max-w-2xl mt-12">
        {/* Number badge - bigger, centered, half above card (yellow) half on card (white) */}
        <div className="absolute left-1/2 -translate-x-1/2 z-20" style={{ top: "-48px" }}>
          <span className="inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-glovo-teal text-white font-bold text-3xl md:text-4xl shadow-lg border-4 border-white">
            {num}
          </span>
        </div>

        {/* White central card - pt adds space for badge overlap */}
        <div className="relative w-full rounded-3xl bg-white shadow-xl overflow-hidden pt-8">
        {/* Folded corner */}
        <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-gray-200 to-transparent rounded-tl-3xl" />
        
        {/* Three dots top-right */}
        <div className="absolute top-6 right-6 flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-glovo-teal" />
          <span className="w-2.5 h-2.5 rounded-full bg-glovo-teal" />
          <span className="w-2.5 h-2.5 rounded-full bg-glovo-teal" />
        </div>

        {/* Content */}
        <div className="p-10 md:p-12 pt-6">
          {/* Main title */}
          <h2 className="text-2xl md:text-3xl font-bold text-glovo-dark text-center mb-6">
            {title}
          </h2>
          
          {/* Subtitle in pill container */}
          <div className="flex justify-center">
            <div className="inline-block px-6 py-3 rounded-full bg-gray-100 text-glovo-dark/90 text-center text-sm md:text-base max-w-lg">
              {description}
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
