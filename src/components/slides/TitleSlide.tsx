"use client";

export function TitleSlide() {
  return (
    <div className="relative w-full min-h-[500px] flex flex-col">
      {/* Top-left: Speaker info (offset for logo) */}
      <div className="absolute top-0 left-16 md:left-20 z-10 flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-glovo-teal flex items-center justify-center">
          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.91-3c-.49 0-.9.36-.98.85C16.52 14.2 14.47 16 12 16s-4.52-1.8-4.93-4.15c-.08-.49-.49-.85-.98-.85-.61 0-1.09.54-1 1.14.49 3 2.89 5.35 5.91 5.78V20c0 .55.45 1 1 1s1-.45 1-1v-2.08c3.02-.43 5.42-2.78 5.91-5.78.1-.6-.39-1.14-1-1.14z" />
          </svg>
        </div>
        <p className="text-glovo-dark text-sm md:text-base">
          <span className="font-bold">Patricia Belestá (she/her)</span>
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
