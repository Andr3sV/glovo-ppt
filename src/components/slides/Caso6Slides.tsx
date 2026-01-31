"use client";

import { SlideCard, PhaseBanner } from "../SlideCard";

export function Caso6Slide1() {
  return (
    <SlideCard header="Enable Safe App Ads Now" headerBadge={6}>
      <div className="space-y-4 text-sm">
        <div>
          <h4 className="font-bold text-glovo-teal mb-2">What:</h4>
          <p className="text-glovo-dark">1st/3rd-party contextual/personalized banners using location, orders, history in Glovo app.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-glovo-teal/10 border-2 border-glovo-teal">
            <h4 className="font-bold text-glovo-teal mb-2">EU</h4>
            <p className="text-sm text-glovo-dark">Strict GDPR/ePrivacy/DSA rules: Consent + clear labels required.</p>
          </div>
          <div className="p-4 rounded-xl bg-glovo-teal/10 border-2 border-glovo-teal">
            <h4 className="font-bold text-glovo-teal mb-2">Morocco</h4>
            <p className="text-sm text-glovo-dark">Simpler (Law 09-08 consent) + EU data safeguards.</p>
          </div>
        </div>
        <p className="font-bold text-glovo-teal">Glovo Action: Quick audit → UI fixes → Revenue in weeks.</p>
      </div>
    </SlideCard>
  );
}

export function Caso6Slide2() {
  return (
    <SlideCard>
      <PhaseBanner>Consent is Mandatory First</PhaseBanner>
      <h3 className="text-lg font-bold text-glovo-dark mb-4">Step-by-step flowchart</h3>
      <p className="text-sm text-glovo-dark mb-4">App opens → BLOCK ad cookies → &quot;Allow analytics? Marketing?&quot; popup (equal Yes/No buttons) → Unlock ads.</p>
      <div className="space-y-4">
        <div className="p-4 rounded-xl bg-glovo-teal/10 border-2 border-glovo-teal">
          <h4 className="font-bold text-glovo-teal mb-2">EU (ePrivacy Art. 5(3) + GDPR Art. 6):</h4>
          <ul className="space-y-1 text-sm text-glovo-dark">
            <li>• EXPLICIT consent BEFORE tracking cookies</li>
            <li>• GRANULAR (analytics ≠ marketing)</li>
            <li>• No tricks/dark patterns</li>
            <li>• Easy &quot;No&quot; anytime (no pre-checked boxes)</li>
          </ul>
        </div>
        <div className="p-4 rounded-xl bg-glovo-teal/10 border-2 border-glovo-teal">
          <h4 className="font-bold text-glovo-teal mb-2">Morocco (Law 09-08 Art. 9):</h4>
          <p className="text-sm text-glovo-dark">Consent for non-technical cookies (ads); clear/granular like EU.</p>
        </div>
        <p className="text-sm text-glovo-dark"><strong>How:</strong> Use certified CMP (Google Consent Mode v2/IAB TCF); simple contextual ads often exempt.</p>
        <p className="text-sm text-glovo-dark"><strong>Key:</strong> Personalized (your history)? YES consent. General? Often NO.</p>
      </div>
    </SlideCard>
  );
}

export function Caso6Slide3() {
  return (
    <SlideCard>
      <PhaseBanner>Label every single ad (DSA Transparency)</PhaseBanner>
      <h3 className="text-lg font-bold text-glovo-dark mb-4">Real banner example</h3>
      <div className="p-4 rounded-xl bg-glovo-yellow/30 border-2 border-glovo-teal mb-4">
        <p className="text-sm text-glovo-dark">&quot;🔴 AD from Restaurant X&quot; + ⓘ icon (&quot;Why? Your sushi orders + 1km away&quot;) – instant tooltip.</p>
      </div>
      <div className="space-y-4">
        <div>
          <h4 className="font-bold text-glovo-teal mb-2">EU DSA Art. 26:</h4>
          <ul className="space-y-1 text-sm text-glovo-dark">
            <li>• FOR EVERY AD: &quot;AD&quot; label + who pays + why you see it (location/history)</li>
            <li>• No extra clicks needed</li>
          </ul>
        </div>
        <div className="p-4 rounded-xl bg-red-50 border-2 border-red-200">
          <h4 className="font-bold text-red-700 mb-2">Strict Bans EU:</h4>
          <ul className="space-y-1 text-sm text-glovo-dark">
            <li>• No targeted ads to kids (Art. 28, if under 16 suspected)</li>
            <li>• No sensitive guesses (halal → religion, Art. 26(3))</li>
          </ul>
        </div>
        <p className="text-sm text-glovo-dark"><strong>Morocco:</strong> No DSA; basic labels enough.</p>
        <p className="font-bold text-glovo-teal">Glovo Fix: Add &quot;Why this ad?&quot; icon to all banners/recommendations NOW.</p>
      </div>
    </SlideCard>
  );
}

export function Caso6Slide4() {
  return (
    <SlideCard>
      <PhaseBanner>Explain Restaurant Ranking Order</PhaseBanner>
      <h3 className="text-lg font-bold text-glovo-dark mb-4">Ranked list example</h3>
      <div className="p-4 rounded-xl bg-glovo-yellow/30 border-2 border-glovo-teal mb-4">
        <p className="text-sm text-glovo-dark">#1 Fast Pizza (⭐⭐⭐ + paid boost) + toggle buttons: [My Picks | Closest | Top Rated | Fastest]</p>
      </div>
      <div className="space-y-4">
        <div>
          <h4 className="font-bold text-glovo-teal mb-2">EU DSA Art. 27 + P2B:</h4>
          <p className="text-sm text-glovo-dark">Be open: &quot;Order by: 1. Delivery time, 2. Ratings, 3. Your history, 4. Paid premium (YES, boosts position).&quot;</p>
        </div>
        <p className="text-sm text-glovo-dark"><strong>User Control:</strong> Easy switches for views (personalized/distance/etc.)</p>
        <p className="text-sm text-glovo-dark"><strong>GDPR Note:</strong> Behavior profiling (history) needs consent; static (distance/ratings) OK without.</p>
        <p className="font-bold text-glovo-teal">Do: Update Terms + add toggles in app immediately.</p>
      </div>
    </SlideCard>
  );
}

export function Caso6Slide5() {
  return (
    <SlideCard>
      <PhaseBanner>Manage Partners & Morocco Data</PhaseBanner>
      <div className="space-y-4 max-h-[450px] overflow-y-auto">
        <div className="p-4 rounded-xl bg-glovo-teal/10 border-2 border-glovo-teal">
          <h4 className="font-bold text-glovo-teal mb-2">Targeting Restaurants:</h4>
          <p className="text-sm text-glovo-dark">&quot;Joint controllers&quot; GDPR Art. 26 → Written contract + notice &quot;Glovo + Restaurant X responsible.&quot;</p>
        </div>
        <div className="p-4 rounded-xl bg-glovo-teal/10 border-2 border-glovo-teal">
          <h4 className="font-bold text-glovo-teal mb-2">Ad Networks:</h4>
          <p className="text-sm text-glovo-dark">&quot;Processors&quot; Art. 28 → DPA contract: Use only our data, audit (no kids/sensitives), breaches in 48h.</p>
        </div>
        <div className="p-4 rounded-xl bg-glovo-teal/10 border-2 border-glovo-teal">
          <h4 className="font-bold text-glovo-teal mb-2">EU → Morocco Data:</h4>
          <p className="text-sm text-glovo-dark">Not adequate → Sign SCCs + risk assessment (TIA) + security DPA.</p>
        </div>
        <p className="font-bold text-glovo-teal">Audit Now: Stop sharing data that infers religion/health.</p>
      </div>
    </SlideCard>
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
    <SlideCard>
      <PhaseBanner>Launch Checklist – Go Live Fast</PhaseBanner>
      <h3 className="text-lg font-bold text-glovo-dark mb-4">Checklist</h3>
      <ul className="space-y-3 max-h-[400px] overflow-y-auto">
        {checklist.map((item, i) => (
          <li key={i} className="flex gap-3 p-3 rounded-xl bg-glovo-teal/10 border border-glovo-teal">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-glovo-teal text-white font-bold shrink-0 text-sm">
              {i + 1}
            </span>
            <span className="text-glovo-dark font-medium">{item}</span>
          </li>
        ))}
      </ul>
      <p className="text-center font-bold text-xl text-glovo-teal mt-6">→ Ads ON, 100% compliant!</p>
    </SlideCard>
  );
}
