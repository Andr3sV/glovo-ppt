"use client";

import { SlideCard, PhaseBanner } from "../SlideCard";

export function Caso2Slide1() {
  const bullets = [
    "GDPR controller/processor definitions require deliberate structure",
    "Our recommendation: Independent country controllers + central governance",
    "Outcome: Clear accountability, operational flexibility, sustainable compliance",
  ];
  return (
    <div className="w-full flex flex-col h-full">
      {/* Main title banner - same style as Documentation Master List */}
      <div className="w-full rounded-[100px] bg-glovo-teal text-white font-bold text-xl md:text-2xl py-4 px-8 text-center mb-6 shrink-0">
        The Right Privacy Architecture
      </div>
      {/* White container with subtitle and bullet points */}
      <div className="relative flex-1 min-h-0 overflow-y-auto">
        <div className="relative p-8 rounded-2xl bg-white shadow-lg border-2 border-glovo-teal/30 overflow-hidden">
          {/* Folded corner */}
          <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-gray-200 to-transparent rounded-tl-2xl" />
          {/* Three dots top-right */}
          <div className="absolute top-6 right-6 flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-glovo-teal" />
            <span className="w-2.5 h-2.5 rounded-full bg-glovo-teal" />
            <span className="w-2.5 h-2.5 rounded-full bg-glovo-teal" />
          </div>
          {/* Subtitle */}
          <h3 className="text-lg font-bold text-glovo-teal mb-6 pr-12">Independent Controllers, Coordinated Governance</h3>
          {/* Bullet points - checklist style */}
          <ul className="space-y-4 relative z-10">
            {bullets.map((item, i) => (
              <li key={i} className="flex items-start gap-4 text-glovo-dark">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-lg border-2 border-glovo-teal bg-glovo-yellow/20 shrink-0 mt-0.5">
                  <svg className="w-3.5 h-3.5 text-glovo-teal" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="text-base leading-relaxed flex-1">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export function Caso2Slide2() {
  const bullets = [
    "Why it matters: Each country has its own DPA, local laws, and distinct user/rider/merchant bases",
    "Our recommendation: Each Glovo [Country] = Independent Data Controller for its market",
    "Accountability: Clear lines to local regulators; each entity determines purposes, means, data retention",
    "Central coordination: Group DPO sets minimum standards (security, retention, incident response)—NOT a joint controller",
  ];
  return (
    <div className="w-full flex flex-col h-full">
      {/* Main title banner - same style as Documentation Master List */}
      <div className="w-full rounded-[100px] bg-glovo-teal text-white font-bold text-xl md:text-2xl py-4 px-8 text-center mb-4 shrink-0">
        The Problem & Our Solution
      </div>
      {/* Subtitle pill */}
      <div className="mb-6 flex justify-center">
        <span className="inline-block px-6 py-2 rounded-full bg-glovo-dark/10 text-glovo-dark font-semibold text-sm md:text-base text-center">
          Multi-Jurisdictional Operations Need Clear Accountability
        </span>
      </div>
      {/* Content - two cards + bullet points */}
      <div className="flex-1 min-h-0 overflow-y-auto space-y-6">
        {/* Problem vs Solution cards - enhanced design */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative p-6 rounded-2xl bg-white shadow-xl border-2 border-red-200 overflow-hidden transition-shadow hover:shadow-2xl">
            <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-red-50 to-transparent rounded-tl-2xl" />
            <div className="flex items-center gap-4 mb-4">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-red-500 text-white shrink-0 shadow-md">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </span>
              <h4 className="font-bold text-red-700 text-lg md:text-xl">Ambiguous Structure</h4>
            </div>
            <p className="text-sm md:text-base text-glovo-dark/90 relative z-10 leading-relaxed">Messy lines, unclear accountability</p>
          </div>
          <div className="relative p-6 rounded-2xl bg-white shadow-xl border-2 border-glovo-teal overflow-hidden transition-shadow hover:shadow-2xl">
            <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-glovo-teal/10 to-transparent rounded-tl-2xl" />
            <div className="flex items-center gap-4 mb-4">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-glovo-teal text-white shrink-0 shadow-md">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              <h4 className="font-bold text-glovo-teal text-lg md:text-xl">Our Model</h4>
            </div>
            <p className="text-sm md:text-base text-glovo-dark/90 relative z-10 leading-relaxed">Clean structure with country entities as independent controllers</p>
          </div>
        </div>
        {/* Bullet points - checklist style matching Documentation Master List */}
        <div className="relative p-6 rounded-2xl bg-white shadow-lg border-2 border-glovo-teal/30 overflow-hidden">
          <div className="absolute bottom-0 right-0 w-14 h-14 bg-gradient-to-tl from-gray-200 to-transparent rounded-tl-2xl" />
          <h4 className="font-bold text-glovo-teal mb-4 text-base md:text-lg">Key Points</h4>
          <ul className="space-y-3 relative z-10">
            {bullets.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-glovo-dark">
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-md border-2 border-glovo-teal bg-glovo-yellow/20 shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-glovo-teal" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="leading-relaxed flex-1">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export function Caso2Slide3() {
  const countryItems = [
    "Controls its own data processing (users, riders, merchants)",
    "Maintains its own Records of Processing (ROPA) and DPIAs",
    "Adapts retention, purposes, and bases to local law",
  ];
  const centralItems = [
    "Sets common security and compliance standards",
    "Provides support and supervision",
    "Coordinates multi-country incidents",
  ];
  return (
    <div className="w-full flex flex-col h-full">
      {/* Main title banner - same style as Documentation Master List */}
      <div className="w-full rounded-[100px] bg-glovo-teal text-white font-bold text-xl md:text-2xl py-4 px-8 text-center mb-4 shrink-0">
        Independent Controllers + Central Governance = Scalable Compliance
      </div>
      {/* Subtitle pill */}
      <div className="mb-6 flex justify-center">
        <span className="inline-block px-6 py-2 rounded-full bg-glovo-dark/10 text-glovo-dark font-semibold text-sm md:text-base text-center">
          The Structure in Practice
        </span>
      </div>
      {/* Content */}
      <div className="flex-1 min-h-0 overflow-y-auto space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative p-6 rounded-2xl bg-white shadow-lg border-2 border-glovo-teal/30 overflow-hidden">
            <div className="absolute bottom-0 right-0 w-14 h-14 bg-gradient-to-tl from-gray-200 to-transparent rounded-tl-2xl" />
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-glovo-teal text-white font-bold text-lg shrink-0">1</span>
              <h4 className="font-bold text-glovo-teal text-lg">Each Country Entity</h4>
            </div>
            <ul className="space-y-3 relative z-10">
              {countryItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-glovo-dark">
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-md border-2 border-glovo-teal bg-glovo-yellow/20 shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-glovo-teal" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative p-6 rounded-2xl bg-white shadow-lg border-2 border-glovo-teal/30 overflow-hidden">
            <div className="absolute bottom-0 right-0 w-14 h-14 bg-gradient-to-tl from-gray-200 to-transparent rounded-tl-2xl" />
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-glovo-teal text-white font-bold text-lg shrink-0">2</span>
              <h4 className="font-bold text-glovo-teal text-lg">Central Group Role</h4>
            </div>
            <ul className="space-y-3 relative z-10">
              {centralItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-glovo-dark">
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-md border-2 border-glovo-teal bg-glovo-yellow/20 shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-glovo-teal" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="relative p-4 rounded-2xl bg-glovo-yellow/30 border-2 border-glovo-teal/30 overflow-hidden">
          <p className="text-sm md:text-base text-glovo-dark leading-relaxed">
            <strong className="text-glovo-teal">Joint Controllership:</strong> Reserved only for genuinely shared decisions (e.g., global algorithmic systems)—formalized via Article 26 Co-Controller Agreement
          </p>
        </div>
      </div>
    </div>
  );
}

export function Caso2Slide4() {
  return (
    <SlideCard>
      <PhaseBanner>Processors & Transfers – Maintaining the Chain</PhaseBanner>
      <h3 className="text-lg font-bold text-glovo-dark mb-4">Extending the Model: Processors and International Transfers</h3>
      <div className="space-y-4">
        <div className="p-4 rounded-xl bg-gray-50 border border-glovo-teal/30">
          <p className="text-sm text-glovo-dark"><strong>Flow:</strong> Group → Local Controller → Processor</p>
        </div>
        <div className="p-4 rounded-xl bg-glovo-teal/10 border-2 border-glovo-teal">
          <h4 className="font-bold text-glovo-teal mb-2">Cross-Border Transfers</h4>
          <p className="text-sm text-glovo-dark">Safeguards: SCCs, Adequacy Decisions</p>
        </div>
      </div>
      <ul className="mt-6 space-y-2 text-sm text-glovo-dark">
        <li><strong>Third-Party Vendors:</strong> Standard processor contracts (DPAs); vendors act on Glovo&apos;s instructions</li>
        <li><strong>Cross-Border Transfers:</strong> Case-by-case risk assessment; deploy appropriate transfer mechanisms (adequacy decisions, Standard Contractual Clauses, BCRs)</li>
        <li className="font-bold text-glovo-teal">Key Takeaway: Clear contractual chain preserves accountability from Group → Local Entity → Processor</li>
      </ul>
    </SlideCard>
  );
}
