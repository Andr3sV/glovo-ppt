"use client";

export function Caso3Slide1() {
  const phases = [
    { time: "0–2h", title: "Containment", desc: "Access block, evidence lock, incident registration" },
    { time: "0–24h", title: "Evaluation", desc: "Risk assessment & GDPR breach determination" },
    { time: "24–72h", title: "AEPD", desc: "Notification to authority (if required)" },
    { time: "48–72h", title: "Individuals", desc: "Notification to affected parties (if high risk)" },
    { time: "30–60 days", title: "Remediation", desc: "Technical controls, training, governance updates" },
  ];
  return (
    <div className="w-full flex flex-col h-full">
      <div className="w-full rounded-[100px] bg-glovo-teal text-white font-bold text-lg md:text-xl py-3 px-6 text-center mb-3 shrink-0">
        Breach Response Playbook
      </div>
      <div className="flex-1 min-h-0 overflow-hidden flex flex-col">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 flex-1 min-h-0">
          {phases.map((p, i) => (
            <div key={i} className="relative p-3 rounded-xl bg-white shadow-lg border-2 border-glovo-teal/30 overflow-hidden min-h-0">
              <div className="absolute bottom-0 right-0 w-8 h-8 bg-gradient-to-tl from-gray-200 to-transparent rounded-tl-xl" />
              <div className="flex items-center gap-1.5 mb-1">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-glovo-teal text-white font-bold text-xs shrink-0">{i + 1}</span>
                <p className="font-bold text-glovo-teal text-sm">{p.time}</p>
              </div>
              <p className="font-semibold text-glovo-dark text-sm relative z-10">{p.title}</p>
              <p className="text-sm text-glovo-dark/90 leading-tight relative z-10">{p.desc}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-2 shrink-0">
          <span className="inline-block px-4 py-1.5 rounded-full bg-glovo-teal/20 text-glovo-teal font-bold text-sm">
            Speed + Structure = Compliance + Control
          </span>
        </div>
      </div>
    </div>
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
    <div className="w-full flex flex-col h-full">
      <div className="w-full rounded-[100px] bg-glovo-teal text-white font-bold text-lg md:text-xl py-3 px-6 text-center mb-3 shrink-0">
        Phase 1 – Immediate Containment
      </div>
      <div className="mb-4 flex justify-center shrink-0">
        <span className="inline-block px-6 py-1.5 rounded-full bg-glovo-dark/10 text-glovo-dark font-semibold text-sm text-center">
          Stop the Bleeding
        </span>
      </div>
      <div className="flex-1 min-h-0 overflow-hidden">
        <div className="flex flex-col gap-3">
          {/* Top row: 3 cards centered */}
          <div className="flex flex-wrap justify-center gap-3">
            {items.slice(0, 3).map((item, i) => (
              <div key={i} className="relative flex gap-3 p-3 rounded-xl bg-white shadow-lg border-2 border-glovo-teal/30 overflow-hidden w-full md:w-[calc(33.333%-0.5rem)] min-w-[200px] max-w-[320px]">
                <div className="absolute bottom-0 right-0 w-10 h-10 bg-gradient-to-tl from-gray-200 to-transparent rounded-tl-xl" />
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-glovo-teal text-white font-bold shrink-0 text-xs relative z-10">{i + 1}</span>
                <div className="relative z-10 flex-1 min-w-0">
                  <h4 className="font-bold text-glovo-dark text-sm leading-tight">{item.title}</h4>
                  <p className="text-sm text-glovo-dark/90 leading-snug mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Bottom row: 2 cards centered */}
          <div className="flex flex-wrap justify-center gap-3">
            {items.slice(3, 5).map((item, i) => (
              <div key={i + 3} className="relative flex gap-3 p-3 rounded-xl bg-white shadow-lg border-2 border-glovo-teal/30 overflow-hidden w-full md:w-[calc(33.333%-0.5rem)] min-w-[200px] max-w-[320px]">
                <div className="absolute bottom-0 right-0 w-10 h-10 bg-gradient-to-tl from-gray-200 to-transparent rounded-tl-xl" />
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-glovo-teal text-white font-bold shrink-0 text-xs relative z-10">{i + 4}</span>
                <div className="relative z-10 flex-1 min-w-0">
                  <h4 className="font-bold text-glovo-dark text-sm leading-tight">{item.title}</h4>
                  <p className="text-sm text-glovo-dark/90 leading-snug mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Caso3Slide3() {
  const riskItems = [
    "Data Type: Names, IDs, emails, financial, health, special category (Art. 9)?",
    "Volume: Number of individuals affected?",
    "Protection: Encrypted, pseudonymized, or plaintext?",
    "Exfiltration: Left corporate environment? Evidence of actual misuse?",
    "Harm Probability: Conflictual termination? Real abuse risk?",
  ];
  return (
    <div className="w-full flex flex-col h-full">
      <div className="w-full rounded-[100px] bg-glovo-teal text-white font-bold text-lg md:text-xl py-3 px-6 text-center mb-3 shrink-0">
        Phase 2 – Risk Assessment Decision Tree
      </div>
      <div className="mb-3 flex justify-center shrink-0">
        <span className="inline-block px-4 py-1.5 rounded-full bg-glovo-dark/10 text-glovo-dark font-semibold text-sm text-center">
          Classify the Breach: Is This GDPR Art. 33–34?
        </span>
      </div>
      <div className="flex-1 min-h-0 overflow-hidden grid grid-cols-1 md:grid-cols-3 gap-2">
        <div className="relative p-3 rounded-xl bg-glovo-yellow/30 border-2 border-glovo-teal overflow-hidden min-h-0">
          <div className="absolute bottom-0 right-0 w-8 h-8 bg-gradient-to-tl from-glovo-teal/10 to-transparent rounded-tl-xl" />
          <p className="font-bold text-glovo-teal text-sm relative z-10">First Gate:</p>
          <p className="text-sm text-glovo-dark leading-tight relative z-10">Do the 50 documents contain personal data? (Yes = proceed; No = security incident only, no GDPR notification)</p>
        </div>
        <div className="relative p-3 rounded-xl bg-white shadow-lg border-2 border-glovo-teal/30 overflow-hidden min-h-0 md:col-span-2">
          <div className="absolute bottom-0 right-0 w-10 h-10 bg-gradient-to-tl from-gray-200 to-transparent rounded-tl-xl" />
          <h4 className="font-bold text-glovo-teal text-sm mb-2 relative z-10">Risk Matrix Dimensions</h4>
          <ul className="space-y-1 relative z-10">
            {riskItems.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-glovo-dark">
                <span className="inline-flex items-center justify-center w-3.5 h-3.5 rounded border-2 border-glovo-teal bg-glovo-yellow/20 shrink-0 mt-0.5">
                  <svg className="w-2 h-2 text-glovo-teal" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="leading-tight">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative p-3 rounded-xl bg-glovo-teal/10 border-2 border-glovo-teal overflow-hidden min-h-0 md:col-span-3">
          <p className="font-bold text-glovo-teal text-sm relative z-10">Decision Output:</p>
          <p className="text-sm text-glovo-dark leading-tight relative z-10">Low Risk → Document & remediate | Probable Risk → Notify AEPD (72h) | High Risk → Notify AEPD + Individuals</p>
        </div>
      </div>
    </div>
  );
}

export function Caso3Slide4() {
  const matrix = [
    { scenario: "Low Risk", indicators: "Encrypted/pseudonymized data; no exfiltration evidence; low harm probability", aepd: "❌ No", individuals: "❌ No", actions: "Document the incident and close it after implementing corrective measures; no AEPD notification required." },
    { scenario: "Probable Risk", indicators: "Unencrypted data; exfiltration indicators; plausible misuse", aepd: "✅ Yes", individuals: "❌ No", actions: "We notify the AEPD without undue delay and within 72 hours from the moment the breach is established; we provide supplementary information in phases if details are incomplete (Art. 33 GDPR)" },
    { scenario: "High Risk", indicators: "Sensitive/financial/minor data; confirmed exfiltration; probable significant harm", aepd: "✅ Yes", individuals: "✅ Yes", actions: "Notify AEPD and communicate with affected individuals without undue delay (Art. 34)" },
  ];
  return (
    <div className="w-full flex flex-col h-full">
      <div className="w-full rounded-[100px] bg-glovo-teal text-white font-bold text-lg md:text-xl py-3 px-6 text-center mb-3 shrink-0">
        Risk-Based Notification Matrix
      </div>
      <div className="mb-3 flex justify-center shrink-0">
        <span className="inline-block px-4 py-1.5 rounded-full bg-glovo-dark/10 text-glovo-dark font-semibold text-sm text-center">
          When to Notify: Decision Matrix by Risk Level
        </span>
      </div>
      <div className="flex-1 min-h-0 overflow-hidden">
        <div className="relative p-3 rounded-xl bg-white shadow-lg border-2 border-glovo-teal/30 overflow-hidden h-full">
          <div className="absolute bottom-0 right-0 w-10 h-10 bg-gradient-to-tl from-gray-200 to-transparent rounded-tl-xl" />
          <div className="overflow-x-auto relative z-10 h-full">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-glovo-teal text-white">
                  <th className="p-1.5 text-left rounded-tl-lg">Scenario</th>
                  <th className="p-1.5 text-left">Key Indicators</th>
                  <th className="p-1.5 text-center">AEPD</th>
                  <th className="p-1.5 text-center">Individuals</th>
                  <th className="p-1.5 text-left rounded-tr-lg">Key actions</th>
                </tr>
              </thead>
              <tbody>
                {matrix.map((row, i) => (
                  <tr key={i} className="border-b border-gray-200 bg-white">
                    <td className="p-1.5 font-semibold text-glovo-dark">{row.scenario}</td>
                    <td className="p-1.5 text-glovo-dark/90 leading-tight">{row.indicators}</td>
                    <td className="p-1.5 text-center">{row.aepd}</td>
                    <td className="p-1.5 text-center">{row.individuals}</td>
                    <td className="p-1.5 text-glovo-dark/90 leading-tight">{row.actions}</td>
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
    <div className="w-full flex flex-col h-full">
      <div className="w-full rounded-[100px] bg-glovo-teal text-white font-bold text-lg md:text-xl py-3 px-6 text-center mb-3 shrink-0">
        Phase 3 – Remediation & Prevention
      </div>
      <div className="flex-1 min-h-0 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 h-full">
          {sections.map((s, i) => (
            <div key={i} className="relative p-4 rounded-xl bg-white shadow-lg border-2 border-glovo-teal/30 overflow-hidden min-h-0">
              <div className="absolute bottom-0 right-0 w-10 h-10 bg-gradient-to-tl from-gray-200 to-transparent rounded-tl-xl" />
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-glovo-teal text-white font-bold text-sm shrink-0">{i + 1}</span>
                <h4 className="font-bold text-glovo-teal text-sm">{s.title}</h4>
              </div>
              <ul className="space-y-1 relative z-10">
                {s.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-glovo-dark">
                    <span className="inline-flex items-center justify-center w-4 h-4 rounded border-2 border-glovo-teal bg-glovo-yellow/20 shrink-0 mt-0.5">
                      <svg className="w-2.5 h-2.5 text-glovo-teal" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
