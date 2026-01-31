"use client";

const SCENARIOS = [
  { num: 1, title: "Global Data Protection Compliance Roadmap", slideIndex: 2 },
  { num: 2, title: "Privacy Roles & Group Structure", slideIndex: 8 },
  { num: 3, title: "Ex-Employee Data Incident", slideIndex: 13 },
  { num: 4, title: "AI Support Chatbot", slideIndex: 19 },
  { num: 5, title: '"Parrot" Feedback Platform', slideIndex: 26 },
  { num: 6, title: "In-App Advertising (EU & Morocco)", slideIndex: 32 },
];

export function IndexSlide() {
  return (
    <div className="w-full flex flex-col">
      {/* Main title banner - teal, full width, centered */}
      <div className="w-full rounded-[100px] bg-glovo-teal text-white font-bold text-xl md:text-2xl py-4 px-8 text-center mb-8">
        The 6 Scenarios
      </div>

      {/* 6 scenario cards in 2x3 grid - all same size */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {SCENARIOS.map((s) => (
          <button
            key={s.num}
            type="button"
            onClick={() =>
              window.dispatchEvent(
                new CustomEvent("goToSlide", { detail: { index: s.slideIndex } })
              )
            }
            aria-label={`Go to scenario ${s.num}: ${s.title}`}
            className="relative flex items-start gap-4 p-5 h-[150px] rounded-2xl bg-white shadow-md overflow-hidden text-left cursor-pointer hover:opacity-90 transition-opacity"
          >
            {/* Folded corner effect */}
            <div className="absolute bottom-0 right-0 w-14 h-14 bg-gradient-to-tl from-gray-200 to-transparent rounded-tl-2xl" />

            {/* Yellow number box */}
            <span className="relative z-10 inline-flex items-center justify-center min-w-[48px] w-12 h-12 rounded-xl bg-glovo-yellow text-glovo-dark font-bold text-xl shrink-0">
              {s.num}
            </span>

            {/* Title text */}
            <span className="relative z-10 text-glovo-dark font-medium text-sm md:text-base leading-snug pt-1 flex-1">
              {s.title}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
