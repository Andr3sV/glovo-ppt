"use client";

import { SlideCard, PhaseBanner } from "../SlideCard";

export function Caso4Slide1() {
  return (
    <SlideCard header="AI Chatbot Risk Assessment" headerBadge={4}>
      <div className="space-y-4 text-sm max-h-[450px] overflow-y-auto">
        <div>
          <h4 className="font-bold text-glovo-teal mb-2">1. Processing Description:</h4>
          <ul className="space-y-1 text-glovo-dark">
            <li>• <strong>What we&apos;re building:</strong> Native chatbot infrastructure + Gemini API integration</li>
            <li>• <strong>Purpose:</strong> Respond to order status queries in real-time 24/7</li>
            <li>• <strong>Data subjects:</strong> All Glovo users (large scale)</li>
            <li>• <strong>Retention:</strong> Up to 90 days (with user manual deletion option)</li>
            <li>• <strong>Business value:</strong> Reduces support costs, improves user experience, scales 24/7 service</li>
            <li>• <strong>Legal scope:</strong> EU AI Act (Art. 50) + GDPR (Art. 5, 6, 35) + Accessibility Act</li>
            <li>• <strong>Assessment scope:</strong> DPIA under GDPR Art. 35 for large-scale automated processing</li>
            <li>• <strong>Deliverable:</strong> Complete risk analysis with mitigations & deployment recommendation</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-glovo-teal mb-2">2. Lawfulness Assessment (Art. 6 GDPR):</h4>
          <ul className="space-y-1 text-glovo-dark">
            <li>✅ <strong>Legal basis:</strong> Art. 6(1)(b) - Contract fulfillment (customer service)</li>
            <li>✅ <strong>Secondary use (model training):</strong> Art. 6(1)(a) - Explicit consent required</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-glovo-teal mb-2">3. Necessity & Proportionality (Art. 5 GDPR):</h4>
          <ul className="space-y-1 text-glovo-dark">
            <li>✅ <strong>Data minimized:</strong> Only order number + conversation (not payment, history, location)</li>
            <li>✅ <strong>Proportional to purpose:</strong> Exactly what&apos;s needed to answer &quot;Where&apos;s my order?&quot;</li>
          </ul>
        </div>
      </div>
    </SlideCard>
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
    <SlideCard>
      <PhaseBanner>Risk Analysis</PhaseBanner>
      <h3 className="text-lg font-bold text-glovo-dark mb-4">4. Risk Analysis</h3>
      <div className="overflow-x-auto max-h-[420px] overflow-y-auto">
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
              <tr key={i} className="border-b border-gray-200 bg-white">
                <td className="p-2 text-glovo-dark">{row.risk}</td>
                <td className="p-2 text-center">{row.probability}</td>
                <td className="p-2 text-center">{row.impact}</td>
                <td className="p-2 text-glovo-dark/90">{row.mitigation}</td>
                <td className="p-2 text-center font-bold text-green-600">{row.residual}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </SlideCard>
  );
}

export function Caso4Slide3() {
  return (
    <SlideCard>
      <PhaseBanner>Technical & Organizational Measures (TOMs)</PhaseBanner>
      <div className="space-y-4 max-h-[420px] overflow-y-auto">
        <div>
          <h4 className="font-bold text-glovo-teal mb-2">Technical & Organizational Measures (TOMs):</h4>
          <ul className="space-y-1 text-sm text-glovo-dark">
            <li>✅ Encryption: TLS 1.2+ transit, AES-256 rest</li>
            <li>✅ DPA with Google (mandatory, restricted use)</li>
            <li>✅ Access controls & audit logging</li>
            <li>✅ Auto-delete 90 days + manual deletion</li>
            <li>✅ Monitoring dashboard (accuracy, bias, escalations)</li>
            <li>✅ Privacy Policy Update (Mandatory): New section: &quot;AI Processing & Third-Party Services&quot;</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-glovo-teal mb-2">User Rights Implementation (Art. 15-22):</h4>
          <ul className="space-y-1 text-sm text-glovo-dark">
            <li>✅ Download chat history</li>
            <li>✅ Delete conversation</li>
            <li>✅ Opt-out of chatbot</li>
          </ul>
        </div>
        <div className="p-4 rounded-xl bg-glovo-yellow/30 border-2 border-glovo-teal">
          <h4 className="font-bold text-glovo-teal mb-2">Critical Guardrail (Art. 22):</h4>
          <ul className="space-y-1 text-sm text-glovo-dark">
            <li>⚠️ CANNOT: Auto-reject refunds, auto-cancel orders</li>
            <li>✅ CAN: Provide order status information</li>
            <li>✅ MUST: Escalate action requests to human</li>
          </ul>
        </div>
      </div>
    </SlideCard>
  );
}

export function Caso4Slide5() {
  return (
    <SlideCard>
      <PhaseBanner>EU AI Act Compliance – Roles & Transparency</PhaseBanner>
      <h3 className="text-lg font-bold text-glovo-dark mb-4">EU AI Act Art. 50: Deployer (Glovo) + Provider (Google) Obligations</h3>
      <div className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-glovo-teal/10 border-2 border-glovo-teal">
            <h4 className="font-bold text-glovo-teal mb-2">Architecture & Roles:</h4>
            <ul className="space-y-1 text-sm text-glovo-dark">
              <li><strong>Glovo (Deployer):</strong> Native chatbot layer + Gemini API orchestration + user interface</li>
              <li><strong>Google/Gemini (AI Provider):</strong> GPAI model development & training</li>
            </ul>
          </div>
        </div>
        <div className="p-4 rounded-xl bg-glovo-yellow/30 border-2 border-glovo-teal">
          <h4 className="font-bold text-glovo-teal mb-2">User Disclosure (Before conversation):</h4>
          <p className="text-sm text-glovo-dark italic">
            &quot;Hi! I&apos;m Glovo&apos;s AI Assistant (powered by Google Gemini). I help with order status questions. For complex issues, ask for a human agent.&quot;
          </p>
        </div>
      </div>
    </SlideCard>
  );
}

export function Caso4Slide6() {
  return (
    <SlideCard>
      <PhaseBanner>Conclusion</PhaseBanner>
      <h3 className="text-lg font-bold text-glovo-dark mb-4">Consultation (Art. 35(9)):</h3>
      <ul className="space-y-2 text-sm text-glovo-dark mb-6">
        <li>✅ DPO review required before launch</li>
        <li>✅ No high risk requiring supervisory authority notification</li>
      </ul>
      <div className="space-y-3 p-4 rounded-xl bg-glovo-teal/10 border-2 border-glovo-teal">
        <h4 className="font-bold text-glovo-teal">Conclusion:</h4>
        <ul className="space-y-1 text-sm text-glovo-dark">
          <li>• <strong>Overall Assessment:</strong> DPIA required under Art. 35 (large-scale automated processing)</li>
          <li>• <strong>Risk Level:</strong> LOW (with all TOMs implemented)</li>
          <li>• <strong>Approval:</strong> ✅ Proceed with deployment</li>
          <li>• <strong>Monitoring:</strong> Quarterly fairness audits + annual DPIA review</li>
        </ul>
      </div>
    </SlideCard>
  );
}
