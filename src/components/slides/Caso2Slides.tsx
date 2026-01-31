"use client";

import { SlideCard, PhaseBanner } from "../SlideCard";

export function Caso2Slide1() {
  return (
    <SlideCard header="The Right Privacy Architecture" headerBadge={2}>
      <h3 className="text-xl font-bold text-glovo-teal mb-4">Independent Controllers, Coordinated Governance</h3>
      <ul className="space-y-3 text-glovo-dark">
        <li className="flex gap-2">
          <span className="text-glovo-teal font-bold">•</span>
          GDPR controller/processor definitions require deliberate structure
        </li>
        <li className="flex gap-2">
          <span className="text-glovo-teal font-bold">•</span>
          Our recommendation: Independent country controllers + central governance
        </li>
        <li className="flex gap-2">
          <span className="text-glovo-teal font-bold">•</span>
          Outcome: Clear accountability, operational flexibility, sustainable compliance
        </li>
      </ul>
    </SlideCard>
  );
}

export function Caso2Slide2() {
  return (
    <SlideCard>
      <PhaseBanner>The Problem & Our Solution</PhaseBanner>
      <h3 className="text-lg font-bold text-glovo-dark mb-4">Multi-Jurisdictional Operations Need Clear Accountability</h3>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-4 rounded-xl bg-red-50 border-2 border-red-200">
          <h4 className="font-bold text-red-700 mb-2">Ambiguous Structure</h4>
          <p className="text-sm text-glovo-dark">Messy lines, unclear accountability</p>
        </div>
        <div className="p-4 rounded-xl bg-green-50 border-2 border-glovo-teal">
          <h4 className="font-bold text-glovo-teal mb-2">Our Model</h4>
          <p className="text-sm text-glovo-dark">Clean structure with country entities as independent controllers</p>
        </div>
      </div>
      <ul className="mt-6 space-y-2 text-sm text-glovo-dark">
        <li><strong>Why it matters:</strong> Each country has its own DPA, local laws, and distinct user/rider/merchant bases</li>
        <li><strong>Our recommendation:</strong> Each Glovo [Country] = Independent Data Controller for its market</li>
        <li><strong>Accountability:</strong> Clear lines to local regulators; each entity determines purposes, means, data retention</li>
        <li><strong>Central coordination:</strong> Group DPO sets minimum standards (security, retention, incident response)—NOT a joint controller</li>
      </ul>
    </SlideCard>
  );
}

export function Caso2Slide3() {
  return (
    <SlideCard>
      <PhaseBanner>Independent Controllers + Central Governance = Scalable Compliance</PhaseBanner>
      <h3 className="text-lg font-bold text-glovo-dark mb-4">The Structure in Practice</h3>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-4 rounded-xl bg-glovo-teal/10 border-2 border-glovo-teal">
          <h4 className="font-bold text-glovo-teal mb-3">Each Country Entity:</h4>
          <ul className="space-y-1 text-sm text-glovo-dark">
            <li>• Controls its own data processing (users, riders, merchants)</li>
            <li>• Maintains its own Records of Processing (ROPA) and DPIAs</li>
            <li>• Adapts retention, purposes, and bases to local law</li>
          </ul>
        </div>
        <div className="p-4 rounded-xl bg-glovo-teal/10 border-2 border-glovo-teal">
          <h4 className="font-bold text-glovo-teal mb-3">Central Group Role:</h4>
          <ul className="space-y-1 text-sm text-glovo-dark">
            <li>• Sets common security and compliance standards</li>
            <li>• Provides support and supervision</li>
            <li>• Coordinates multi-country incidents</li>
          </ul>
        </div>
      </div>
      <p className="mt-4 p-3 rounded-xl bg-glovo-yellow/30 text-sm text-glovo-dark">
        <strong>Joint Controllership:</strong> Reserved only for genuinely shared decisions (e.g., global algorithmic systems)—formalized via Article 26 Co-Controller Agreement
      </p>
    </SlideCard>
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
