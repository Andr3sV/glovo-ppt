"use client";

const SCENARIOS = [
  { num: 1, title: "Global Data Protection Compliance Roadmap" },
  { num: 2, title: "Privacy Roles & Group Structure" },
  { num: 3, title: "Ex-Employee Data Incident" },
  { num: 4, title: "AI Support Chatbot" },
  { num: 5, title: '"Parrot" Feedback Platform' },
  { num: 6, title: "In-App Advertising (EU & Morocco)" },
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
          <div
            key={s.num}
            className="relative flex items-start gap-4 p-5 h-[150px] rounded-2xl bg-white shadow-md overflow-hidden"
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
          </div>
        ))}
      </div>
    </div>
  );
}
