"use client";

const CHECK_ICON = (
  <svg className="w-3 h-3 text-glovo-teal" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
);

export function Caso5Slide1() {
  return (
    <div className="w-full flex flex-col h-full">
      <div className="w-full rounded-[100px] bg-glovo-teal text-white font-bold text-lg md:text-xl py-3 px-6 text-center mb-3 shrink-0">
        Parrot Legal Memo
      </div>
      <div className="flex-1 min-h-0 overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="relative p-4 rounded-xl bg-white shadow-lg border-2 border-glovo-teal/30 overflow-hidden min-h-0">
          <div className="absolute bottom-0 right-0 w-10 h-10 bg-gradient-to-tl from-gray-200 to-transparent rounded-tl-xl" />
          <div className="space-y-1 relative z-10 text-sm text-glovo-dark">
            <p><strong>To:</strong> People Team</p>
            <p><strong>From:</strong> Data Privacy Team</p>
            <p><strong>Date:</strong> Jan 31, 2026</p>
            <p><strong>Re:</strong> &quot;Parrot&quot; Employee Feedback System – Legal Review & Go-Live Path</p>
          </div>
        </div>
        <div className="relative p-4 rounded-xl bg-white shadow-lg border-2 border-glovo-teal/30 overflow-hidden min-h-0">
          <div className="absolute bottom-0 right-0 w-10 h-10 bg-gradient-to-tl from-gray-200 to-transparent rounded-tl-xl" />
          <div className="space-y-1 relative z-10 text-sm text-glovo-dark">
            <p><strong>Scope:</strong> Anonymous ratings + free-text feedback; SaaS processor + HRIS; EU-wide aggregated analytics</p>
            <p><strong>Assessment:</strong> All GDPR principles covered; 8 risks identified w/ practical mitigations and next steps</p>
          </div>
        </div>
      </div>
    </div>
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
    <div className="w-full flex flex-col h-full">
      <div className="w-full rounded-[100px] bg-glovo-teal text-white font-bold text-lg md:text-xl py-3 px-6 text-center mb-3 shrink-0">
        GDPR Principles
      </div>
      <div className="mb-3 flex justify-center shrink-0">
        <span className="inline-block px-4 py-1.5 rounded-full bg-glovo-dark/10 text-glovo-dark font-semibold text-sm text-center">
          Principle (Art. 5) → Parrot Ownership
        </span>
      </div>
      <div className="flex-1 min-h-0 overflow-hidden">
        <div className="relative p-3 rounded-xl bg-white shadow-lg border-2 border-glovo-teal/30 overflow-hidden h-full">
          <div className="absolute bottom-0 right-0 w-10 h-10 bg-gradient-to-tl from-gray-200 to-transparent rounded-tl-xl" />
          <div className="overflow-x-auto relative z-10 h-full">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-glovo-teal text-white">
                  <th className="p-1.5 text-left rounded-tl-lg">Principle (Art. 5)</th>
                  <th className="p-1.5 text-left rounded-tr-lg">Parrot Ownership</th>
                </tr>
              </thead>
              <tbody>
                {principles.map((row, i) => (
                  <tr key={i} className="border-b border-gray-200 bg-white">
                    <td className="p-1.5 font-semibold text-glovo-dark leading-tight">{row.principle}</td>
                    <td className="p-1.5 text-glovo-dark/90 leading-tight">{row.ownership}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
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
    <div className="w-full flex flex-col h-full">
      <div className="w-full rounded-[100px] bg-glovo-teal text-white font-bold text-lg md:text-xl py-3 px-6 text-center mb-3 shrink-0">
        Key Risks Identified & Practical Mitigations
      </div>
      <div className="flex-1 min-h-0 overflow-hidden">
        <div className="relative p-3 rounded-xl bg-white shadow-lg border-2 border-glovo-teal/30 overflow-hidden h-full">
          <div className="absolute bottom-0 right-0 w-10 h-10 bg-gradient-to-tl from-gray-200 to-transparent rounded-tl-xl" />
          <div className="overflow-x-auto relative z-10 h-full">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-glovo-teal text-white">
                  <th className="p-1.5 text-left rounded-tl-lg">Privacy Risk</th>
                  <th className="p-1.5 text-left rounded-tr-lg">Our Solution</th>
                </tr>
              </thead>
              <tbody>
                {risks.map((row, i) => (
                  <tr key={i} className="border-b border-gray-200 bg-white">
                    <td className="p-1.5 font-semibold text-glovo-dark leading-tight">{row.risk}</td>
                    <td className="p-1.5 text-glovo-dark/90 leading-tight">{row.solution}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Caso5Slide5() {
  const aiActItems = [
    "Prohibited: Workplace emotion inference (Art.5(1)(f))—vendor confirm/disable.",
    "Transparency: If analytics AI (Art.50)—employee notices",
  ];
  return (
    <div className="w-full flex flex-col h-full">
      <div className="w-full rounded-[100px] bg-glovo-teal text-white font-bold text-lg md:text-xl py-3 px-6 text-center mb-3 shrink-0">
        Additional Notes
      </div>
      <div className="mb-3 flex justify-center shrink-0">
        <span className="inline-block px-4 py-1.5 rounded-full bg-glovo-dark/10 text-glovo-dark font-semibold text-sm text-center">
          Re-identification despite &quot;no direct identification&quot;
        </span>
      </div>
      <div className="flex-1 min-h-0 overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="grid grid-cols-2 gap-3 md:col-span-2">
          <div className="relative p-4 rounded-xl bg-white shadow-lg border-2 border-glovo-teal/30 overflow-hidden min-h-0">
            <div className="absolute bottom-0 right-0 w-8 h-8 bg-gradient-to-tl from-gray-200 to-transparent rounded-tl-xl" />
            <h4 className="font-bold text-glovo-teal text-sm mb-1 relative z-10">Pseudonymized</h4>
            <p className="text-sm text-glovo-dark relative z-10">Key reverses ID</p>
          </div>
          <div className="relative p-4 rounded-xl bg-white shadow-lg border-2 border-glovo-teal/30 overflow-hidden min-h-0">
            <div className="absolute bottom-0 right-0 w-8 h-8 bg-gradient-to-tl from-gray-200 to-transparent rounded-tl-xl" />
            <h4 className="font-bold text-glovo-teal text-sm mb-1 relative z-10">Anon</h4>
            <p className="text-sm text-glovo-dark relative z-10">Impossible re-ID</p>
          </div>
        </div>
        <div className="relative p-4 rounded-xl bg-white shadow-lg border-2 border-glovo-teal/30 overflow-hidden min-h-0 md:col-span-2">
          <div className="absolute bottom-0 right-0 w-10 h-10 bg-gradient-to-tl from-gray-200 to-transparent rounded-tl-xl" />
          <p className="text-sm text-glovo-dark mb-2 relative z-10">
            Even without shown names, free-text + team/dept/region segmentation can identify author or third parties. Parrot: Treat as personal—full GDPR applies.
          </p>
          <h4 className="font-bold text-glovo-teal text-sm mb-2 relative z-10">EU AI Act Quick Check (If AI Used)</h4>
          <ul className="space-y-1 relative z-10">
            {aiActItems.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-glovo-dark">
                <span className="inline-flex items-center justify-center w-4 h-4 rounded border-2 border-glovo-teal bg-glovo-yellow/20 shrink-0 mt-0.5">{CHECK_ICON}</span>
                <span className="leading-snug">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export function Caso5Slide6() {
  const week1Items = ["LIA Art.6(1)(f)", "DPIA screen Art.35", "SaaS DPA + due diligence", "RoPA update Art.30"];
  const week2Items = ["Employee info Arts.13/14", "HR training"];
  const week3Items = ["Re-ID privacy test", "Access/exports review"];
  const gate0Items = [
    "Vendor confirm: NO emotion inference (Art.5(1)(f)) → ❌ DISABLE if yes",
    "Limited risk AI → ✅ Prep Art.50 transparency",
  ];
  return (
    <div className="w-full flex flex-col h-full">
      <div className="w-full rounded-[100px] bg-glovo-teal text-white font-bold text-lg md:text-xl py-3 px-6 text-center mb-3 shrink-0">
        Next Steps & Launch Gates
      </div>
      <div className="flex-1 min-h-0 overflow-hidden grid grid-cols-1 md:grid-cols-3 gap-3">
        <div className="relative p-4 rounded-xl bg-red-50 border-2 border-red-200 overflow-hidden min-h-0 md:col-span-3">
          <div className="absolute bottom-0 right-0 w-10 h-10 bg-gradient-to-tl from-red-100 to-transparent rounded-tl-xl" />
          <h4 className="font-bold text-red-700 text-sm mb-2 relative z-10">🚫 GATE 0 (Day 1): AI Act Red Flag Check</h4>
          <ul className="space-y-1 relative z-10">
            {gate0Items.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-glovo-dark">
                <span className="inline-flex items-center justify-center w-4 h-4 rounded border-2 border-red-300 bg-red-100 shrink-0 mt-0.5">{CHECK_ICON}</span>
                <span className="leading-snug">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-3">
          <h4 className="font-bold text-glovo-teal text-sm mb-2">Week-by-Week Timeline</h4>
          <div className="grid md:grid-cols-3 gap-3">
            <div className="relative p-4 rounded-xl bg-white shadow-lg border-2 border-glovo-teal/30 overflow-hidden min-h-0">
              <div className="absolute bottom-0 right-0 w-8 h-8 bg-gradient-to-tl from-gray-200 to-transparent rounded-tl-xl" />
              <p className="font-bold text-glovo-teal text-sm mb-2 relative z-10">Week 1: Legal Core</p>
              <ul className="space-y-2 relative z-10 text-sm text-glovo-dark">
                {week1Items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="inline-flex items-center justify-center w-4 h-4 rounded border-2 border-glovo-teal bg-glovo-yellow/20 shrink-0 mt-0.5">{CHECK_ICON}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative p-4 rounded-xl bg-white shadow-lg border-2 border-glovo-teal/30 overflow-hidden min-h-0">
              <div className="absolute bottom-0 right-0 w-8 h-8 bg-gradient-to-tl from-gray-200 to-transparent rounded-tl-xl" />
              <p className="font-bold text-glovo-teal text-sm mb-2 relative z-10">Week 2: Comms & Gov</p>
              <ul className="space-y-2 relative z-10 text-sm text-glovo-dark">
                {week2Items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="inline-flex items-center justify-center w-4 h-4 rounded border-2 border-glovo-teal bg-glovo-yellow/20 shrink-0 mt-0.5">{CHECK_ICON}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative p-4 rounded-xl bg-white shadow-lg border-2 border-glovo-teal/30 overflow-hidden min-h-0">
              <div className="absolute bottom-0 right-0 w-8 h-8 bg-gradient-to-tl from-gray-200 to-transparent rounded-tl-xl" />
              <p className="font-bold text-glovo-teal text-sm mb-2 relative z-10">Week 3: Final Tech</p>
              <ul className="space-y-2 relative z-10 text-sm text-glovo-dark">
                {week3Items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="inline-flex items-center justify-center w-4 h-4 rounded border-2 border-glovo-teal bg-glovo-yellow/20 shrink-0 mt-0.5">{CHECK_ICON}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex justify-center shrink-0 md:col-span-3">
          <span className="inline-block px-4 py-1.5 rounded-full bg-glovo-teal/20 text-glovo-teal font-bold text-sm">
            ✅ All gates → EU rollout
          </span>
        </div>
      </div>
    </div>
  );
}
