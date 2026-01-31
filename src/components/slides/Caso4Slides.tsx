"use client";

const CHECK_ICON = (
  <svg className="w-3 h-3 text-glovo-teal" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
);

export function Caso4Slide1() {
  const processingItems = [
    "What we're building: Native chatbot infrastructure + Gemini API integration",
    "Purpose: Respond to order status queries in real-time 24/7",
    "Data subjects: All Glovo users (large scale)",
    "Retention: Up to 90 days (with user manual deletion option)",
    "Business value: Reduces support costs, improves user experience, scales 24/7 service",
    "Legal scope: EU AI Act (Art. 50) + GDPR (Art. 5, 6, 35) + Accessibility Act",
    "Assessment scope: DPIA under GDPR Art. 35 for large-scale automated processing",
    "Deliverable: Complete risk analysis with mitigations & deployment recommendation",
  ];
  const lawfulnessItems = [
    "Legal basis: Art. 6(1)(b) - Contract fulfillment (customer service)",
    "Secondary use (model training): Art. 6(1)(a) - Explicit consent required",
  ];
  const necessityItems = [
    "Data minimized: Only order number + conversation (not payment, history, location)",
    "Proportional to purpose: Exactly what's needed to answer \"Where's my order?\"",
  ];
  return (
    <div className="w-full flex flex-col h-full">
      <div className="w-full rounded-[100px] bg-glovo-teal text-white font-bold text-lg md:text-xl py-3 px-6 text-center mb-3 shrink-0">
        AI Chatbot Risk Assessment
      </div>
      <div className="flex-1 min-h-0 overflow-hidden grid grid-cols-1 md:grid-cols-3 gap-3">
        <div className="relative p-4 rounded-xl bg-white shadow-lg border-2 border-glovo-teal/30 overflow-hidden min-h-0 md:col-span-2">
          <div className="absolute bottom-0 right-0 w-10 h-10 bg-gradient-to-tl from-gray-200 to-transparent rounded-tl-xl" />
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-glovo-teal text-white font-bold text-sm shrink-0">1</span>
            <h4 className="font-bold text-glovo-teal text-sm">Processing Description</h4>
          </div>
          <ul className="space-y-1 relative z-10">
            {processingItems.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-glovo-dark">
                <span className="inline-flex items-center justify-center w-4 h-4 rounded border-2 border-glovo-teal bg-glovo-yellow/20 shrink-0 mt-0.5">{CHECK_ICON}</span>
                <span className="leading-snug">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="grid grid-cols-1 gap-3 md:col-span-1">
          <div className="relative p-4 rounded-xl bg-white shadow-lg border-2 border-glovo-teal/30 overflow-hidden min-h-0">
            <div className="absolute bottom-0 right-0 w-8 h-8 bg-gradient-to-tl from-gray-200 to-transparent rounded-tl-xl" />
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-glovo-teal text-white font-bold text-sm shrink-0">2</span>
              <h4 className="font-bold text-glovo-teal text-sm">Lawfulness (Art. 6 GDPR)</h4>
            </div>
            <ul className="space-y-1 relative z-10">
              {lawfulnessItems.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-glovo-dark">
                  <span className="inline-flex items-center justify-center w-4 h-4 rounded border-2 border-glovo-teal bg-glovo-yellow/20 shrink-0 mt-0.5">{CHECK_ICON}</span>
                  <span className="leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative p-4 rounded-xl bg-white shadow-lg border-2 border-glovo-teal/30 overflow-hidden min-h-0">
            <div className="absolute bottom-0 right-0 w-8 h-8 bg-gradient-to-tl from-gray-200 to-transparent rounded-tl-xl" />
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-glovo-teal text-white font-bold text-sm shrink-0">3</span>
              <h4 className="font-bold text-glovo-teal text-sm">Necessity & Proportionality (Art. 5)</h4>
            </div>
            <ul className="space-y-1 relative z-10">
              {necessityItems.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-glovo-dark">
                  <span className="inline-flex items-center justify-center w-4 h-4 rounded border-2 border-glovo-teal bg-glovo-yellow/20 shrink-0 mt-0.5">{CHECK_ICON}</span>
                  <span className="leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function RiskTag({ value }: { value: string }) {
  const v = value.toLowerCase();
  const styles =
    v === "low"
      ? "bg-green-100 text-green-700 border-green-200"
      : v === "medium"
        ? "bg-amber-100 text-amber-800 border-amber-200"
        : v === "high"
          ? "bg-red-100 text-red-700 border-red-200"
          : "bg-gray-100 text-gray-700 border-gray-200";
  return (
    <span className={`inline-block px-2.5 py-1 rounded-full text-sm font-semibold border ${styles}`}>
      {value}
    </span>
  );
}

export function Caso4Slide2() {
  const risks = [
    { risk: "Wrong information provided", probability: "Medium", impact: "High", mitigation: "System accuracy validation against live order database + human escalation", residual: "LOW" },
    { risk: "Data breach (Google servers)", probability: "Low", impact: "High", mitigation: "DPA + TLS 1.2+ encryption", residual: "LOW" },
    { risk: "Unauthorized automated decisions", probability: "Low", impact: "High", mitigation: "Art. 22 guardrail: no binding decisions", residual: "LOW" },
    { risk: "Data overretention", probability: "Low", impact: "Medium", mitigation: "Auto-delete 90 days + manual delete", residual: "LOW" },
    { risk: "Algorithmic bias", probability: "Low", impact: "Low", mitigation: "Fairness testing by region/language", residual: "LOW" },
  ];
  return (
    <div className="w-full flex flex-col h-full">
      <div className="flex-1 min-h-0 overflow-hidden">
        <div className="relative p-4 rounded-2xl bg-white shadow-lg border-2 border-glovo-teal/30 overflow-hidden h-full flex flex-col">
          <div className="absolute bottom-0 right-0 w-14 h-14 bg-gradient-to-tl from-gray-200 to-transparent rounded-tl-2xl" />
          <div className="flex items-center gap-2 mb-4 relative z-10 shrink-0">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-glovo-teal text-white font-bold text-sm shrink-0">4</span>
            <h4 className="font-bold text-glovo-teal text-sm">Risk Analysis</h4>
          </div>
          <div className="overflow-x-auto relative z-10 flex-1 min-h-0">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-glovo-teal text-white">
                  <th className="p-2 text-left rounded-tl-lg">Risk</th>
                  <th className="p-2 text-center">Probability</th>
                  <th className="p-2 text-center">Impact</th>
                  <th className="p-2 text-left">Mitigation</th>
                  <th className="p-2 text-center rounded-tr-lg">Residual</th>
                </tr>
              </thead>
              <tbody>
                {risks.map((row, i) => (
                  <tr key={i} className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors">
                    <td className="p-2 text-glovo-dark font-medium leading-tight">{row.risk}</td>
                    <td className="p-2 text-center">
                      <RiskTag value={row.probability} />
                    </td>
                    <td className="p-2 text-center">
                      <RiskTag value={row.impact} />
                    </td>
                    <td className="p-2 text-glovo-dark/90 leading-tight">{row.mitigation}</td>
                    <td className="p-2 text-center">
                      <RiskTag value={row.residual} />
                    </td>
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

export function Caso4Slide3() {
  const tomsItems = [
    "Encryption: TLS 1.2+ transit, AES-256 rest",
    "DPA with Google (mandatory, restricted use)",
    "Access controls & audit logging",
    "Auto-delete 90 days + manual deletion",
    "Monitoring dashboard (accuracy, bias, escalations)",
    "Privacy Policy Update (Mandatory): New section: \"AI Processing & Third-Party Services\"",
  ];
  const userRightsItems = ["Download chat history", "Delete conversation", "Opt-out of chatbot"];
  const guardrailItems = [
    "CANNOT: Auto-reject refunds, auto-cancel orders",
    "CAN: Provide order status information",
    "MUST: Escalate action requests to human",
  ];
  return (
    <div className="w-full flex flex-col h-full">
      <div className="flex-1 min-h-0 overflow-hidden grid grid-cols-1 md:grid-cols-3 gap-3">
        <div className="relative p-4 rounded-xl bg-white shadow-lg border-2 border-glovo-teal/30 overflow-hidden min-h-0 md:col-span-2">
          <div className="absolute bottom-0 right-0 w-10 h-10 bg-gradient-to-tl from-gray-200 to-transparent rounded-tl-xl" />
          <h4 className="font-bold text-glovo-teal text-sm mb-2 relative z-10">Technical & Organizational Measures</h4>
          <ul className="space-y-1 relative z-10">
            {tomsItems.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-glovo-dark">
                <span className="inline-flex items-center justify-center w-4 h-4 rounded border-2 border-glovo-teal bg-glovo-yellow/20 shrink-0 mt-0.5">{CHECK_ICON}</span>
                <span className="leading-snug">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative p-4 rounded-xl bg-white shadow-lg border-2 border-glovo-teal/30 overflow-hidden min-h-0">
          <div className="absolute bottom-0 right-0 w-8 h-8 bg-gradient-to-tl from-gray-200 to-transparent rounded-tl-xl" />
          <h4 className="font-bold text-glovo-teal text-sm mb-2 relative z-10">User Rights (Art. 15-22)</h4>
          <ul className="space-y-1 relative z-10">
            {userRightsItems.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-glovo-dark">
                <span className="inline-flex items-center justify-center w-4 h-4 rounded border-2 border-glovo-teal bg-glovo-yellow/20 shrink-0 mt-0.5">{CHECK_ICON}</span>
                <span className="leading-snug">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative p-4 rounded-xl bg-white shadow-lg border-2 border-glovo-teal/30 overflow-hidden min-h-0 md:col-span-3">
            <div className="absolute bottom-0 right-0 w-10 h-10 bg-gradient-to-tl from-gray-200 to-transparent rounded-tl-xl" />
            <h4 className="font-bold text-glovo-teal text-sm mb-2 relative z-10">Critical Guardrail (Art. 22)</h4>
            <ul className="space-y-1 relative z-10">
              {guardrailItems.map((item, i) => (
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

export function Caso4Slide5() {
  return (
    <div className="w-full flex flex-col h-full">
      <div className="w-full rounded-[100px] bg-glovo-teal text-white font-bold text-lg md:text-xl py-3 px-6 text-center mb-3 shrink-0">
        EU AI Act Compliance – Roles & Transparency
      </div>
      <div className="mb-3 flex justify-center shrink-0">
        <span className="inline-block px-4 py-1.5 rounded-full bg-glovo-dark/10 text-glovo-dark font-semibold text-sm text-center">
          EU AI Act Art. 50: Deployer (Glovo) + Provider (Google) Obligations
        </span>
      </div>
      <div className="flex-1 min-h-0 overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="relative p-4 rounded-xl bg-white shadow-lg border-2 border-glovo-teal/30 overflow-hidden min-h-0">
          <div className="absolute bottom-0 right-0 w-10 h-10 bg-gradient-to-tl from-gray-200 to-transparent rounded-tl-xl" />
          <h4 className="font-bold text-glovo-teal text-sm mb-2 relative z-10">Architecture & Roles</h4>
          <ul className="space-y-1 relative z-10 text-sm text-glovo-dark">
            <li><strong>Glovo (Deployer):</strong> Native chatbot layer + Gemini API orchestration + user interface</li>
            <li><strong>Google/Gemini (AI Provider):</strong> GPAI model development & training</li>
          </ul>
        </div>
        <div className="relative p-4 rounded-xl bg-glovo-yellow/30 border-2 border-glovo-teal overflow-hidden min-h-0">
          <div className="absolute bottom-0 right-0 w-10 h-10 bg-gradient-to-tl from-glovo-teal/10 to-transparent rounded-tl-xl" />
          <h4 className="font-bold text-glovo-teal text-sm mb-2 relative z-10">User Disclosure (Before conversation)</h4>
          <p className="text-sm text-glovo-dark italic relative z-10 leading-snug">
            &quot;Hi! I&apos;m Glovo&apos;s AI Assistant (powered by Google Gemini). I help with order status questions. For complex issues, ask for a human agent.&quot;
          </p>
        </div>
      </div>
    </div>
  );
}

export function Caso4Slide6() {
  const consultationItems = [
    "DPO review required before launch",
    "No high risk requiring supervisory authority notification",
  ];
  const conclusionItems = [
    "Overall Assessment: DPIA required under Art. 35 (large-scale automated processing)",
    "Risk Level: LOW (with all TOMs implemented)",
    "Approval: Proceed with deployment",
    "Monitoring: Quarterly fairness audits + annual DPIA review",
  ];
  return (
    <div className="w-full flex flex-col h-full">
      <div className="w-full rounded-[100px] bg-glovo-teal text-white font-bold text-lg md:text-xl py-3 px-6 text-center mb-3 shrink-0">
        Conclusion
      </div>
      <div className="flex-1 min-h-0 overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="relative p-4 rounded-xl bg-white shadow-lg border-2 border-glovo-teal/30 overflow-hidden min-h-0">
          <div className="absolute bottom-0 right-0 w-10 h-10 bg-gradient-to-tl from-gray-200 to-transparent rounded-tl-xl" />
          <h4 className="font-bold text-glovo-teal text-sm mb-2 relative z-10">Consultation (Art. 35(9))</h4>
          <ul className="space-y-1 relative z-10">
            {consultationItems.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-glovo-dark">
                <span className="inline-flex items-center justify-center w-4 h-4 rounded border-2 border-glovo-teal bg-glovo-yellow/20 shrink-0 mt-0.5">{CHECK_ICON}</span>
                <span className="leading-snug">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative p-4 rounded-xl bg-white shadow-lg border-2 border-glovo-teal/30 overflow-hidden min-h-0">
          <div className="absolute bottom-0 right-0 w-10 h-10 bg-gradient-to-tl from-gray-200 to-transparent rounded-tl-xl" />
          <h4 className="font-bold text-glovo-teal text-sm mb-2 relative z-10">Conclusion</h4>
          <ul className="space-y-1 relative z-10">
            {conclusionItems.map((item, i) => (
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
