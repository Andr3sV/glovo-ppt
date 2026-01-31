"use client";

import { SlideCard, PhaseBanner } from "../SlideCard";

export function Caso5Slide1() {
  return (
    <SlideCard header="Parrot Legal Memo" headerBadge={5}>
      <div className="space-y-4 text-sm">
        <div className="p-4 rounded-xl bg-gray-50 border border-glovo-teal/30">
          <p><strong>To:</strong> People Team</p>
          <p><strong>From:</strong> Data Privacy Team</p>
          <p><strong>Date:</strong> Jan 31, 2026</p>
          <p><strong>Re:</strong> &quot;Parrot&quot; Employee Feedback System – Legal Review & Go-Live Path</p>
        </div>
        <div>
          <p><strong>Scope:</strong> Anonymous ratings + free-text feedback; SaaS processor + HRIS; EU-wide aggregated analytics</p>
          <p className="mt-2"><strong>Assessment:</strong> All GDPR principles covered; 8 risks identified w/ practical mitigations and next steps</p>
        </div>
      </div>
    </SlideCard>
  );
}

export function Caso5Slide2() {
  const principles = [
    { principle: "Lawfulness/Transparency (5(1)(a),6,12-14)", ownership: "LIA basis; clear notices at collection" },
    { principle: "Purpose/Minimization (5(1)(b)(c))", ownership: "Feedback only; justify data categories" },
    { principle: "Accuracy/Storage Limit (5(1)(d)(e))", ownership: "Rectify prompts; defined retention/deletion" },
    { principle: "Security (5(1)(f),32)", ownership: "TOMs (RBAC/encryption); incident playbook" },
    { principle: "Accountability/Design (5(2),25,28)", ownership: "RoPA update; PbD/default; SaaS DPA" },
  ];
  return (
    <SlideCard>
      <PhaseBanner>GDPR Principles</PhaseBanner>
      <h3 className="text-lg font-bold text-glovo-dark mb-4">Principle (Art. 5) → Parrot Ownership</h3>
      <div className="overflow-x-auto max-h-[420px] overflow-y-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-glovo-teal text-white">
              <th className="p-2 text-left rounded-tl-lg">Principle (Art. 5)</th>
              <th className="p-2 text-left rounded-tr-lg">Parrot Ownership</th>
            </tr>
          </thead>
          <tbody>
            {principles.map((row, i) => (
              <tr key={i} className="border-b border-gray-200 bg-white">
                <td className="p-2 font-semibold text-glovo-dark">{row.principle}</td>
                <td className="p-2 text-glovo-dark/90">{row.ownership}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </SlideCard>
  );
}

export function Caso5Slide3() {
  const risks = [
    { risk: "Free-text + small teams allow identifying authors despite \"anonymous\" label", solution: "Minimum 5 responses to show results; No drill-down in small groups; Separate HR vs manager views" },
    { risk: "Health info or names accidentally included in feedback comments", solution: "Form warnings (\"Don't include names/health data\"); Moderate text before sharing; Escalate serious claims formally" },
    { risk: "Employees fear reprisals → won't participate honestly", solution: "\"No reprisals\" policy; Clear rules: trends only, no individual actions; HR/management training" },
    { risk: "Drift to performance reviews or manager rankings over time", solution: "Fixed purpose policy; HR system SSO access only; Track all exports" },
    { risk: "Security breaches, data transfers, AI issues, DPIA needed", solution: "Access controls + logs; Check vendor locations first; AI emotion check (disable if found); DPIA screening" },
  ];
  return (
    <SlideCard>
      <PhaseBanner>Key Risks Identified & Practical Mitigations</PhaseBanner>
      <div className="overflow-x-auto max-h-[450px] overflow-y-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-glovo-teal text-white">
              <th className="p-2 text-left rounded-tl-lg">Privacy Risk</th>
              <th className="p-2 text-left rounded-tr-lg">Our Solution</th>
            </tr>
          </thead>
          <tbody>
            {risks.map((row, i) => (
              <tr key={i} className="border-b border-gray-200 bg-white">
                <td className="p-2 font-semibold text-glovo-dark">{row.risk}</td>
                <td className="p-2 text-glovo-dark/90">{row.solution}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </SlideCard>
  );
}

export function Caso5Slide5() {
  return (
    <SlideCard>
      <PhaseBanner>Additional Notes</PhaseBanner>
      <h3 className="text-lg font-bold text-glovo-dark mb-4">Re-identification despite &quot;no direct identification&quot;</h3>
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="p-4 rounded-xl bg-glovo-teal/10 border-2 border-glovo-teal">
          <h4 className="font-bold text-glovo-teal mb-2">Pseudonymized</h4>
          <p className="text-sm text-glovo-dark">Key reverses ID</p>
        </div>
        <div className="p-4 rounded-xl bg-glovo-teal/10 border-2 border-glovo-teal">
          <h4 className="font-bold text-glovo-teal mb-2">Anon</h4>
          <p className="text-sm text-glovo-dark">Impossible re-ID</p>
        </div>
      </div>
      <p className="text-sm text-glovo-dark mb-4">
        Even without shown names, free-text + team/dept/region segmentation can identify author or third parties. Parrot: Treat as personal—full GDPR applies.
      </p>
      <div className="p-4 rounded-xl bg-glovo-yellow/30 border-2 border-glovo-teal">
        <h4 className="font-bold text-glovo-teal mb-2">EU AI Act Quick Check (If AI Used)</h4>
        <ul className="space-y-1 text-sm text-glovo-dark">
          <li>• <strong>Prohibited:</strong> Workplace emotion inference (Art.5(1)(f))—vendor confirm/disable.</li>
          <li>• <strong>Transparency:</strong> If analytics AI (Art.50)—employee notices</li>
        </ul>
      </div>
    </SlideCard>
  );
}

export function Caso5Slide6() {
  return (
    <SlideCard>
      <PhaseBanner>Next Steps & Launch Gates</PhaseBanner>
      <div className="space-y-4 max-h-[450px] overflow-y-auto">
        <div className="p-4 rounded-xl bg-red-100 border-2 border-red-300">
          <h4 className="font-bold text-red-700 mb-2">🚫 GATE 0 (Day 1): AI Act Red Flag Check</h4>
          <ul className="space-y-1 text-sm text-glovo-dark">
            <li>• Vendor confirm: NO emotion inference (Art.5(1)(f)) → ❌ DISABLE if yes</li>
            <li>• Limited risk AI → ✅ Prep Art.50 transparency</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-glovo-teal mb-3">Week-by-Week Timeline:</h4>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-3 rounded-xl bg-glovo-teal/10 border border-glovo-teal">
              <p className="font-bold text-glovo-teal text-sm mb-2">Week 1: Legal Core</p>
              <ul className="text-xs text-glovo-dark space-y-1">
                <li>• LIA Art.6(1)(f)</li>
                <li>• DPIA screen Art.35</li>
                <li>• SaaS DPA + due diligence</li>
                <li>• RoPA update Art.30</li>
              </ul>
            </div>
            <div className="p-3 rounded-xl bg-glovo-teal/10 border border-glovo-teal">
              <p className="font-bold text-glovo-teal text-sm mb-2">Week 2: Comms & Gov</p>
              <ul className="text-xs text-glovo-dark space-y-1">
                <li>• Employee info Arts.13/14</li>
                <li>• HR training</li>
              </ul>
            </div>
            <div className="p-3 rounded-xl bg-glovo-teal/10 border border-glovo-teal">
              <p className="font-bold text-glovo-teal text-sm mb-2">Week 3: Final Tech</p>
              <ul className="text-xs text-glovo-dark space-y-1">
                <li>• Re-ID privacy test</li>
                <li>• Access/exports review</li>
              </ul>
            </div>
          </div>
        </div>
        <p className="text-center font-bold text-glovo-teal">✅ All gates → EU rollout</p>
      </div>
    </SlideCard>
  );
}
