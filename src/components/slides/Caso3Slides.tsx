"use client";

import { SlideCard, PhaseBanner } from "../SlideCard";

export function Caso3Slide1() {
  const phases = [
    { time: "0–2h", title: "Containment", desc: "Access block, evidence lock, incident registration" },
    { time: "0–24h", title: "Evaluation", desc: "Risk assessment & GDPR breach determination" },
    { time: "24–72h", title: "AEPD", desc: "Notification to authority (if required)" },
    { time: "48–72h", title: "Individuals", desc: "Notification to affected parties (if high risk)" },
    { time: "30–60 days", title: "Remediation", desc: "Technical controls, training, governance updates" },
  ];
  return (
    <SlideCard>
      <PhaseBanner>Breach Response Playbook</PhaseBanner>
      <div className="flex flex-wrap gap-3 justify-between mb-6">
        {phases.map((p, i) => (
          <div key={i} className="flex-1 min-w-[120px] p-3 rounded-xl bg-glovo-teal/10 border border-glovo-teal">
            <p className="font-bold text-glovo-teal text-sm">{p.time}</p>
            <p className="font-semibold text-glovo-dark text-sm">{p.title}</p>
            <p className="text-xs text-glovo-dark/80">{p.desc}</p>
          </div>
        ))}
      </div>
      <p className="text-center font-bold text-xl text-glovo-teal">Speed + Structure = Compliance + Control</p>
    </SlideCard>
  );
}

export function Caso3Slide2() {
  const items = [
    { title: "Access revocation", desc: "SSO, email, drives, VPN, databases, Slack, GitHub + active sessions + physical access (badges, parking)" },
    { title: "Prevent active exfiltration", desc: "Recover forwarded emails; contact cloud providers (Dropbox, OneDrive) to block & retain logs; block personal cloud access" },
    { title: "Evidence preservation", desc: "Chain-of-custody logging (auth logs, download logs, exfiltration trails, device artifacts)" },
    { title: "Formal registration", desc: "Open incident record with timestamp, reporter, actions, responsible parties, next steps—classify later as breach if confirmed" },
    { title: "Communication lock", desc: "Need-to-know circle only; no broad announcements" },
  ];
  return (
    <SlideCard>
      <PhaseBanner>Phase 1 – Immediate Containment</PhaseBanner>
      <h3 className="text-xl font-bold text-glovo-dark mb-4">Stop the Bleeding</h3>
      <div className="space-y-3 max-h-[380px] overflow-y-auto">
        {items.map((item, i) => (
          <div key={i} className="flex gap-3 p-3 rounded-xl bg-gray-50">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-glovo-teal text-white font-bold shrink-0 text-sm">
              {i + 1}
            </span>
            <div>
              <h4 className="font-bold text-glovo-dark">{item.title}</h4>
              <p className="text-sm text-glovo-dark/90">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </SlideCard>
  );
}

export function Caso3Slide3() {
  return (
    <SlideCard>
      <PhaseBanner>Phase 2 – Risk Assessment Decision Tree</PhaseBanner>
      <h3 className="text-lg font-bold text-glovo-dark mb-4">Classify the Breach: Is This GDPR Art. 33–34?</h3>
      <div className="space-y-4 text-sm">
        <div className="p-3 rounded-xl bg-glovo-yellow/30 border-2 border-glovo-teal">
          <p className="font-bold text-glovo-teal">First Gate:</p>
          <p>Do the 50 documents contain personal data? (Yes = proceed; No = security incident only, no GDPR notification)</p>
        </div>
        <div>
          <h4 className="font-bold text-glovo-dark mb-2">Risk Matrix Dimensions:</h4>
          <ul className="space-y-1 text-glovo-dark">
            <li>• <strong>Data Type:</strong> Names, IDs, emails, financial, health, special category (Art. 9)?</li>
            <li>• <strong>Volume:</strong> Number of individuals affected?</li>
            <li>• <strong>Protection:</strong> Encrypted, pseudonymized, or plaintext?</li>
            <li>• <strong>Exfiltration:</strong> Left corporate environment? Evidence of actual misuse?</li>
            <li>• <strong>Harm Probability:</strong> Conflictual termination? Real abuse risk?</li>
          </ul>
        </div>
        <div className="p-3 rounded-xl bg-glovo-teal/10">
          <p className="font-bold text-glovo-teal">Decision Output:</p>
          <p>Low Risk → Document & remediate | Probable Risk → Notify AEPD (72h) | High Risk → Notify AEPD + Individuals</p>
        </div>
      </div>
    </SlideCard>
  );
}

export function Caso3Slide4() {
  const matrix = [
    { scenario: "Low Risk", indicators: "Encrypted/pseudonymized data; no exfiltration evidence; low harm probability", aepd: "❌ No", individuals: "❌ No", actions: "Document the incident and close it after implementing corrective measures; no AEPD notification required." },
    { scenario: "Probable Risk", indicators: "Unencrypted data; exfiltration indicators; plausible misuse", aepd: "✅ Yes", individuals: "❌ No", actions: "We notify the AEPD without undue delay and within 72 hours from the moment the breach is established; we provide supplementary information in phases if details are incomplete (Art. 33 GDPR)" },
    { scenario: "High Risk", indicators: "Sensitive/financial/minor data; confirmed exfiltration; probable significant harm", aepd: "✅ Yes", individuals: "✅ Yes", actions: "Notify AEPD and communicate with affected individuals without undue delay (Art. 34)" },
  ];
  return (
    <SlideCard>
      <PhaseBanner>Risk-Based Notification Matrix</PhaseBanner>
      <h3 className="text-lg font-bold text-glovo-dark mb-4">When to Notify: Decision Matrix by Risk Level</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-glovo-teal text-white">
              <th className="p-2 text-left rounded-tl-lg">Scenario</th>
              <th className="p-2 text-left">Key Indicators</th>
              <th className="p-2 text-center">AEPD</th>
              <th className="p-2 text-center">Individuals</th>
              <th className="p-2 text-left rounded-tr-lg">Key actions</th>
            </tr>
          </thead>
          <tbody>
            {matrix.map((row, i) => (
              <tr key={i} className="border-b border-gray-200 bg-white">
                <td className="p-2 font-semibold text-glovo-dark">{row.scenario}</td>
                <td className="p-2 text-glovo-dark/90">{row.indicators}</td>
                <td className="p-2 text-center">{row.aepd}</td>
                <td className="p-2 text-center">{row.individuals}</td>
                <td className="p-2 text-glovo-dark/90">{row.actions}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </SlideCard>
  );
}

export function Caso3Slide5() {
  const sections = [
    {
      title: "Technical Controls",
      items: ["Enhanced offboarding checklist (automated, asset recovery, auto-expiring access)", "Role-Based Access Control (RBAC) + Multi-Factor Authentication (MFA)"],
    },
    {
      title: "Detection Controls",
      items: ["Anomaly monitoring (mass downloads, off-hours, unusual location, correlated with HR terminations)", "Data Loss Prevention (DLP): Restrict exports, block personal cloud uploads, watermark sensitive docs"],
    },
    {
      title: "Encryption & Key Management",
      items: ["Sensitive data encrypted at rest + in transit; keys managed so ex-employee cannot decrypt post-exit"],
    },
    {
      title: "Governance",
      items: ["Root Cause Analysis + retest (simulate termination, verify revocation & alerts)", "Vendor DPA review & immediate notification clauses (if applicable)", "Annual privacy awareness training for all staff"],
    },
  ];
  return (
    <SlideCard>
      <PhaseBanner>Phase 3 – Remediation & Prevention</PhaseBanner>
      <div className="space-y-4 max-h-[420px] overflow-y-auto">
        {sections.map((s, i) => (
          <div key={i} className="p-4 rounded-xl bg-glovo-teal/10 border border-glovo-teal">
            <h4 className="font-bold text-glovo-teal mb-2">{s.title}:</h4>
            <ul className="space-y-1 text-sm text-glovo-dark">
              {s.items.map((item, j) => (
                <li key={j}>• {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SlideCard>
  );
}
