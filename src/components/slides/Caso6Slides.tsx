"use client";

const CHECK_ICON = (
  <svg className="w-3 h-3 text-glovo-teal" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
);

export function Caso6Slide1() {
  return (
    <div className="w-full flex flex-col h-full">
      <div className="w-full rounded-[100px] bg-glovo-teal text-white font-bold text-lg md:text-xl py-3 px-6 text-center mb-3 shrink-0">
        Enable Safe App Ads Now
      </div>
      <div className="flex-1 min-h-0 overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="relative p-4 rounded-xl bg-white shadow-lg border-2 border-glovo-teal/30 overflow-hidden min-h-0 md:col-span-2">
          <div className="absolute bottom-0 right-0 w-10 h-10 bg-gradient-to-tl from-gray-200 to-transparent rounded-tl-xl" />
          <h4 className="font-bold text-glovo-teal text-sm mb-2 relative z-10">What</h4>
          <p className="text-sm text-glovo-dark relative z-10 leading-snug">1st/3rd-party contextual/personalized banners using location, orders, history in Glovo app.</p>
        </div>
        <div className="grid grid-cols-2 gap-3 md:col-span-2">
          <div className="relative p-4 rounded-xl bg-white shadow-lg border-2 border-glovo-teal/30 overflow-hidden min-h-0">
            <div className="absolute bottom-0 right-0 w-8 h-8 bg-gradient-to-tl from-gray-200 to-transparent rounded-tl-xl" />
            <h4 className="font-bold text-glovo-teal text-sm mb-1 relative z-10">EU</h4>
            <p className="text-sm text-glovo-dark relative z-10 leading-snug">Strict GDPR/ePrivacy/DSA rules: Consent + clear labels required.</p>
          </div>
          <div className="relative p-4 rounded-xl bg-white shadow-lg border-2 border-glovo-teal/30 overflow-hidden min-h-0">
            <div className="absolute bottom-0 right-0 w-8 h-8 bg-gradient-to-tl from-gray-200 to-transparent rounded-tl-xl" />
            <h4 className="font-bold text-glovo-teal text-sm mb-1 relative z-10">Morocco</h4>
            <p className="text-sm text-glovo-dark relative z-10 leading-snug">Simpler (Law 09-08 consent) + EU data safeguards.</p>
          </div>
        </div>
        <div className="flex justify-center shrink-0 md:col-span-2">
          <span className="inline-block px-4 py-1.5 rounded-full bg-glovo-teal/20 text-glovo-teal font-bold text-sm">
            Glovo Action: Quick audit → UI fixes → Revenue in weeks.
          </span>
        </div>
      </div>
    </div>
  );
}

export function Caso6Slide2() {
  const euItems = [
    "EXPLICIT consent BEFORE tracking cookies",
    "GRANULAR (analytics ≠ marketing)",
    "No tricks/dark patterns",
    "Easy \"No\" anytime (no pre-checked boxes)",
  ];
  return (
    <div className="w-full flex flex-col h-full">
      <div className="w-full rounded-[100px] bg-glovo-teal text-white font-bold text-lg md:text-xl py-3 px-6 text-center mb-3 shrink-0">
        Consent is Mandatory First
      </div>
      <div className="mb-3 flex justify-center shrink-0">
        <span className="inline-block px-4 py-1.5 rounded-full bg-glovo-dark/10 text-glovo-dark font-semibold text-sm text-center">
          Step-by-step flowchart
        </span>
      </div>
      <div className="flex-1 min-h-0 overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="relative p-3 rounded-xl bg-glovo-yellow/30 border-2 border-glovo-teal overflow-hidden min-h-0 md:col-span-2">
          <p className="text-sm text-glovo-dark relative z-10 leading-snug">App opens → BLOCK ad cookies → &quot;Allow analytics? Marketing?&quot; popup (equal Yes/No buttons) → Unlock ads.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:col-span-2">
          <div className="relative p-4 rounded-xl bg-white shadow-lg border-2 border-glovo-teal/30 overflow-hidden min-h-0">
            <div className="absolute bottom-0 right-0 w-10 h-10 bg-gradient-to-tl from-gray-200 to-transparent rounded-tl-xl" />
            <h4 className="font-bold text-glovo-teal text-sm mb-2 relative z-10">EU (ePrivacy Art. 5(3) + GDPR Art. 6)</h4>
            <ul className="space-y-2 relative z-10">
              {euItems.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-glovo-dark">
                  <span className="inline-flex items-center justify-center w-4 h-4 rounded border-2 border-glovo-teal bg-glovo-yellow/20 shrink-0 mt-0.5">{CHECK_ICON}</span>
                  <span className="leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative p-4 rounded-xl bg-white shadow-lg border-2 border-glovo-teal/30 overflow-hidden min-h-0">
            <div className="absolute bottom-0 right-0 w-10 h-10 bg-gradient-to-tl from-gray-200 to-transparent rounded-tl-xl" />
            <h4 className="font-bold text-glovo-teal text-sm mb-2 relative z-10">Morocco (Law 09-08 Art. 9)</h4>
            <p className="text-sm text-glovo-dark relative z-10 leading-snug">Consent for non-technical cookies (ads); clear/granular like EU.</p>
          </div>
        </div>
        <div className="relative p-3 rounded-xl bg-white shadow-lg border-2 border-glovo-teal/30 overflow-hidden min-h-0 md:col-span-2">
          <div className="absolute bottom-0 right-0 w-8 h-8 bg-gradient-to-tl from-gray-200 to-transparent rounded-tl-xl" />
          <p className="text-sm text-glovo-dark relative z-10 leading-snug"><strong>How:</strong> Use certified CMP (Google Consent Mode v2/IAB TCF); simple contextual ads often exempt.</p>
          <p className="text-sm text-glovo-dark mt-1 relative z-10 leading-snug"><strong>Key:</strong> Personalized (your history)? YES consent. General? Often NO.</p>
        </div>
      </div>
    </div>
  );
}

export function Caso6Slide3() {
  const dsaItems = [
    "FOR EVERY AD: \"AD\" label + who pays + why you see it (location/history)",
    "No extra clicks needed",
  ];
  const bansItems = [
    "No targeted ads to kids (Art. 28, if under 16 suspected)",
    "No sensitive guesses (halal → religion, Art. 26(3))",
  ];
  return (
    <div className="w-full flex flex-col h-full">
      <div className="w-full rounded-[100px] bg-glovo-teal text-white font-bold text-lg md:text-xl py-3 px-6 text-center mb-3 shrink-0">
        Label every single ad (DSA Transparency)
      </div>
      <div className="mb-3 flex justify-center shrink-0">
        <span className="inline-block px-4 py-1.5 rounded-full bg-glovo-dark/10 text-glovo-dark font-semibold text-sm text-center">
          Real banner example
        </span>
      </div>
      <div className="flex-1 min-h-0 overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="relative p-3 rounded-xl bg-glovo-yellow/30 border-2 border-glovo-teal overflow-hidden min-h-0 md:col-span-2">
          <p className="text-sm text-glovo-dark relative z-10 leading-snug">&quot;🔴 AD from Restaurant X&quot; + ⓘ icon (&quot;Why? Your sushi orders + 1km away&quot;) – instant tooltip.</p>
        </div>
        <div className="relative p-4 rounded-xl bg-white shadow-lg border-2 border-glovo-teal/30 overflow-hidden min-h-0">
          <div className="absolute bottom-0 right-0 w-10 h-10 bg-gradient-to-tl from-gray-200 to-transparent rounded-tl-xl" />
          <h4 className="font-bold text-glovo-teal text-sm mb-2 relative z-10">EU DSA Art. 26</h4>
          <ul className="space-y-2 relative z-10">
            {dsaItems.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-glovo-dark">
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-md border-2 border-glovo-teal bg-glovo-yellow/20 shrink-0 mt-0.5">{CHECK_ICON}</span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative p-4 rounded-xl bg-red-50 border-2 border-red-200 overflow-hidden min-h-0">
          <div className="absolute bottom-0 right-0 w-10 h-10 bg-gradient-to-tl from-red-100 to-transparent rounded-tl-xl" />
          <h4 className="font-bold text-red-700 text-sm mb-2 relative z-10">Strict Bans EU</h4>
          <ul className="space-y-2 relative z-10">
            {bansItems.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-glovo-dark">
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-md border-2 border-red-300 bg-red-100 shrink-0 mt-0.5">{CHECK_ICON}</span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative p-3 rounded-xl bg-white shadow-lg border-2 border-glovo-teal/30 overflow-hidden min-h-0 md:col-span-2">
          <div className="absolute bottom-0 right-0 w-8 h-8 bg-gradient-to-tl from-gray-200 to-transparent rounded-tl-xl" />
          <p className="text-sm text-glovo-dark relative z-10 leading-snug"><strong>Morocco:</strong> No DSA; basic labels enough.</p>
          <p className="font-bold text-glovo-teal text-sm mt-1 relative z-10">Glovo Fix: Add &quot;Why this ad?&quot; icon to all banners/recommendations NOW.</p>
        </div>
      </div>
    </div>
  );
}

export function Caso6Slide4() {
  return (
    <div className="w-full flex flex-col h-full">
      <div className="w-full rounded-[100px] bg-glovo-teal text-white font-bold text-lg md:text-xl py-3 px-6 text-center mb-3 shrink-0">
        Explain Restaurant Ranking Order
      </div>
      <div className="mb-3 flex justify-center shrink-0">
        <span className="inline-block px-4 py-1.5 rounded-full bg-glovo-dark/10 text-glovo-dark font-semibold text-sm text-center">
          Ranked list example
        </span>
      </div>
      <div className="flex-1 min-h-0 overflow-hidden grid grid-cols-1 gap-3">
        <div className="relative p-3 rounded-xl bg-glovo-yellow/30 border-2 border-glovo-teal overflow-hidden min-h-0">
          <p className="text-sm text-glovo-dark relative z-10 leading-snug">#1 Fast Pizza (⭐⭐⭐ + paid boost) + toggle buttons: [My Picks | Closest | Top Rated | Fastest]</p>
        </div>
        <div className="relative p-4 rounded-xl bg-white shadow-lg border-2 border-glovo-teal/30 overflow-hidden min-h-0">
          <div className="absolute bottom-0 right-0 w-10 h-10 bg-gradient-to-tl from-gray-200 to-transparent rounded-tl-xl" />
          <h4 className="font-bold text-glovo-teal text-sm mb-2 relative z-10">EU DSA Art. 27 + P2B</h4>
          <p className="text-sm text-glovo-dark mb-2 relative z-10 leading-snug">Be open: &quot;Order by: 1. Delivery time, 2. Ratings, 3. Your history, 4. Paid premium (YES, boosts position).&quot;</p>
          <p className="text-sm text-glovo-dark mb-1 relative z-10 leading-snug"><strong>User Control:</strong> Easy switches for views (personalized/distance/etc.)</p>
          <p className="text-sm text-glovo-dark relative z-10 leading-snug"><strong>GDPR Note:</strong> Behavior profiling (history) needs consent; static (distance/ratings) OK without.</p>
        </div>
        <div className="flex justify-center shrink-0">
          <span className="inline-block px-4 py-1.5 rounded-full bg-glovo-teal/20 text-glovo-teal font-bold text-sm">
            Do: Update Terms + add toggles in app immediately.
          </span>
        </div>
      </div>
    </div>
  );
}

export function Caso6Slide5() {
  return (
    <div className="w-full flex flex-col h-full">
      <div className="w-full rounded-[100px] bg-glovo-teal text-white font-bold text-lg md:text-xl py-3 px-6 text-center mb-3 shrink-0">
        Manage Partners & Morocco Data
      </div>
      <div className="flex-1 min-h-0 overflow-hidden grid grid-cols-1 md:grid-cols-3 gap-3">
        <div className="relative p-4 rounded-xl bg-white shadow-lg border-2 border-glovo-teal/30 overflow-hidden min-h-0">
          <div className="absolute bottom-0 right-0 w-10 h-10 bg-gradient-to-tl from-gray-200 to-transparent rounded-tl-xl" />
          <h4 className="font-bold text-glovo-teal text-sm mb-2 relative z-10">Targeting Restaurants</h4>
          <p className="text-sm text-glovo-dark relative z-10 leading-snug">&quot;Joint controllers&quot; GDPR Art. 26 → Written contract + notice &quot;Glovo + Restaurant X responsible.&quot;</p>
        </div>
        <div className="relative p-4 rounded-xl bg-white shadow-lg border-2 border-glovo-teal/30 overflow-hidden min-h-0">
          <div className="absolute bottom-0 right-0 w-10 h-10 bg-gradient-to-tl from-gray-200 to-transparent rounded-tl-xl" />
          <h4 className="font-bold text-glovo-teal text-sm mb-2 relative z-10">Ad Networks</h4>
          <p className="text-sm text-glovo-dark relative z-10 leading-snug">&quot;Processors&quot; Art. 28 → DPA contract: Use only our data, audit (no kids/sensitives), breaches in 48h.</p>
        </div>
        <div className="relative p-4 rounded-xl bg-white shadow-lg border-2 border-glovo-teal/30 overflow-hidden min-h-0">
          <div className="absolute bottom-0 right-0 w-10 h-10 bg-gradient-to-tl from-gray-200 to-transparent rounded-tl-xl" />
          <h4 className="font-bold text-glovo-teal text-sm mb-2 relative z-10">EU → Morocco Data</h4>
          <p className="text-sm text-glovo-dark relative z-10 leading-snug">Not adequate → Sign SCCs + risk assessment (TIA) + security DPA.</p>
        </div>
        <div className="flex justify-center shrink-0 md:col-span-3">
          <span className="inline-block px-4 py-1.5 rounded-full bg-glovo-teal/20 text-glovo-teal font-bold text-sm">
            Audit Now: Stop sharing data that infers religion/health.
          </span>
        </div>
      </div>
    </div>
  );
}

export function Caso6Slide6() {
  const checklist = [
    "Consent: Granular banner + auto-block (EU/Morocco)",
    "Ads: \"AD\" labels + \"Why?\" tooltips; mandatory age check at signup",
    "Ranking: List factors + toggles; \"Paid boosts\" in Terms",
    "Partners/Transfers: Contracts + SCCs for Morocco",
    "AI Act Bonus: Label \"AI-generated\" if used; no hidden tricks",
  ];
  return (
    <div className="w-full flex flex-col h-full">
      <div className="w-full rounded-[100px] bg-glovo-teal text-white font-bold text-lg md:text-xl py-3 px-6 text-center mb-3 shrink-0">
        Launch Checklist – Go Live Fast
      </div>
      <div className="flex-1 min-h-0 overflow-hidden flex flex-col justify-center items-center">
        <div className="flex flex-col gap-2 items-center w-full max-w-4xl">
          <div className="flex flex-wrap justify-center gap-2 w-full">
            {checklist.slice(0, 3).map((item, i) => (
              <div key={i} className="relative flex items-start gap-3 p-3 rounded-xl bg-white shadow-lg border-2 border-glovo-teal/30 overflow-hidden w-full md:w-[calc(33.333%-0.5rem)] min-w-[200px] max-w-[380px]">
                <div className="absolute bottom-0 right-0 w-12 h-12 bg-gradient-to-tl from-gray-200 to-transparent rounded-tl-2xl" />
                <span className="inline-flex items-start gap-3 text-glovo-dark font-medium relative z-10 flex-1">
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-md border-2 border-glovo-teal bg-glovo-yellow/20 shrink-0 mt-0.5">{CHECK_ICON}</span>
                  <span className="leading-relaxed text-sm">{item}</span>
                </span>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-2 w-full">
            {checklist.slice(3, 5).map((item, i) => (
              <div key={i + 3} className="relative flex items-start gap-3 p-3 rounded-xl bg-white shadow-lg border-2 border-glovo-teal/30 overflow-hidden w-full md:w-[calc(33.333%-0.5rem)] min-w-[200px] max-w-[380px]">
                <div className="absolute bottom-0 right-0 w-12 h-12 bg-gradient-to-tl from-gray-200 to-transparent rounded-tl-2xl" />
                <span className="inline-flex items-start gap-3 text-glovo-dark font-medium relative z-10 flex-1">
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-md border-2 border-glovo-teal bg-glovo-yellow/20 shrink-0 mt-0.5">{CHECK_ICON}</span>
                  <span className="leading-relaxed text-sm">{item}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-3 flex justify-center shrink-0">
        <span className="inline-block px-4 py-1.5 rounded-full bg-glovo-teal/20 text-glovo-teal font-bold text-sm">
          → Ads ON, 100% compliant!
        </span>
      </div>
    </div>
  );
}
