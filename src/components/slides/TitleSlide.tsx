"use client";

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

      {/* Central white box with title */}
      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="relative bg-white rounded-3xl shadow-xl p-12 md:p-16 w-full max-w-2xl">
          {/* Page curl effect */}
          <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-gray-200 to-transparent rounded-tl-3xl" />

          <div className="text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-glovo-dark uppercase tracking-tight mb-3">
              Glovo Data Privacy
            </h1>
            <p className="text-xl md:text-2xl text-glovo-dark uppercase tracking-wide font-normal">
              Business Case Interview
            </p>
          </div>
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
