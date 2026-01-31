"use client";

import { SlideCard, PhaseBanner } from "../SlideCard";

export function Caso1Slide1() {
  return (
    <div className="w-full flex flex-col">
      {/* Main title banner - same style as The 6 Scenarios */}
      <div className="w-full rounded-[100px] bg-glovo-teal text-white font-bold text-xl md:text-2xl py-4 px-8 text-center mb-8">
        Launch Global Data Protection Compliance
      </div>

      <div className="flex-1 flex items-center justify-center min-h-0">
        <div className="flex flex-col md:flex-row items-stretch gap-6 md:gap-8 w-full">
        {/* Phase 1 Card */}
        <div className="flex-1 min-w-0 group">
          <div className="h-full p-8 rounded-3xl bg-white border-2 border-glovo-teal/30 shadow-md hover:shadow-xl hover:border-glovo-teal/60 transition-all duration-300 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-24 h-24 bg-glovo-yellow/20 rounded-bl-full" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-5">
                <span className="flex items-center justify-center w-14 h-14 rounded-2xl bg-glovo-teal text-white shrink-0 shadow-lg">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </span>
                <div>
                  <h3 className="text-xl font-bold text-glovo-teal">Phase 1</h3>
                  <p className="text-glovo-dark font-semibold text-lg">Assess & Design</p>
                </div>
              </div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-glovo-yellow/40 text-glovo-dark font-bold text-sm mb-4">
                4-8 weeks
              </span>
              <p className="text-glovo-dark/90 text-sm leading-relaxed">
                Map, Inventory, ROPA, DPIAs & Gaps
              </p>
            </div>
          </div>
        </div>

        {/* Timeline connector */}
        <div className="flex md:flex-col items-center justify-center gap-4 shrink-0">
          <div className="hidden md:flex flex-col items-center gap-2">
            <div className="w-0.5 h-8 bg-glovo-teal/40 rounded-full" />
            <div className="w-3 h-3 rounded-full bg-glovo-teal shadow-lg animate-pulse" />
            <div className="w-0.5 h-8 bg-glovo-teal/40 rounded-full" />
          </div>
          <div className="flex md:flex-col items-center gap-2">
            <svg className="w-8 h-8 text-glovo-teal shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
            </svg>
            <span className="text-xs font-bold text-glovo-teal uppercase tracking-wider">Assess → Implement</span>
          </div>
          <div className="hidden md:flex flex-col items-center gap-2">
            <div className="w-0.5 h-8 bg-glovo-teal/40 rounded-full" />
            <div className="w-3 h-3 rounded-full bg-glovo-teal shadow-lg" />
            <div className="w-0.5 h-8 bg-glovo-teal/40 rounded-full" />
          </div>
        </div>

        {/* Phase 2 Card */}
        <div className="flex-1 min-w-0 group">
          <div className="h-full p-8 rounded-3xl bg-white border-2 border-glovo-teal/30 shadow-md hover:shadow-xl hover:border-glovo-teal/60 transition-all duration-300 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-24 h-24 bg-glovo-yellow/20 rounded-bl-full" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-5">
                <span className="flex items-center justify-center w-14 h-14 rounded-2xl bg-glovo-teal text-white shrink-0 shadow-lg">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </span>
                <div>
                  <h3 className="text-xl font-bold text-glovo-teal">Phase 2</h3>
                  <p className="text-glovo-dark font-semibold text-lg">Implement</p>
                </div>
              </div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-glovo-yellow/40 text-glovo-dark font-bold text-sm mb-4">
                8-16 weeks+
              </span>
              <p className="text-glovo-dark/90 text-sm leading-relaxed">
                Governance, Ops, Security & Sustain
              </p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export function Caso1Slide2() {
  const steps = [
    {
      num: 1,
      title: "Regulatory Mapping",
      bullets: [
        "EU ops (GDPR), non-EU (SCCs), local laws; riders Spain/Italy",
        "DOC: Matrix (country x law x applicability) + country addenda",
      ],
    },
    {
      num: 2,
      title: "Data Inventory",
      bullets: [
        "Customers, riders, partners, ops (loc/payments/GPS/KPI/logs)",
        "DOC: Table + flow diagrams (onboarding/delivery)",
      ],
    },
    {
      num: 3,
      title: "ROPA (Art. 30)",
      bullets: [
        "6+ activities: delivery, HR, fraud, marketing, onboarding, analytics",
        "DOC: Full Excel w/ owners, review dates, procedure",
      ],
    },
    {
      num: 4,
      title: "DPIA Screening (Art. 35)",
      bullets: [
        "Mandatory: geo-tracking, algo scoring; Likely: ID/biometrics, churn",
        "DOC: Screening matrix + full DPIAs",
      ],
    },
    {
      num: 5,
      title: "Gap Analysis",
      bullets: [
        "Audit: ROPA, DPIA, retention, RBAC, DPO, breach notification",
        "DOC: Thematic report, severity matrix, 90-day roadmap",
      ],
    },
  ];
  return (
    <div className="w-full flex flex-col h-full">
      {/* Main title banner */}
      <div className="w-full rounded-[100px] bg-glovo-teal text-white font-bold text-xl md:text-2xl py-4 px-8 text-center mb-4 shrink-0">
        Phase 1 – Steps 1-5
      </div>
      {/* Subtitle */}
      <p className="text-glovo-dark font-semibold text-sm mb-6 text-center">
        Map, Inventory, ROPA, DPIAs & Gaps
      </p>
      {/* Steps - grid layout: 3 top, 2 bottom centered */}
      <div className="flex-1 min-h-0 overflow-y-auto">
        <div className="flex flex-col gap-4">
          {/* Top row: 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {steps.slice(0, 3).map((s) => (
              <div
                key={s.num}
                className="relative p-5 rounded-2xl bg-white shadow-md border border-gray-100 overflow-hidden"
              >
                <div className="absolute bottom-0 right-0 w-12 h-12 bg-gradient-to-tl from-gray-200 to-transparent rounded-tl-2xl" />
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-glovo-teal text-white font-bold text-lg shrink-0">
                    {s.num}
                  </span>
                  <h4 className="font-bold text-glovo-teal text-base">{s.title}</h4>
                </div>
                <ul className="space-y-1.5 relative z-10">
                  {s.bullets.map((bullet, j) => (
                    <li key={j} className="flex gap-2 text-sm text-glovo-dark/90 leading-relaxed">
                      <span className="text-glovo-teal font-bold shrink-0">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          {/* Bottom row: 2 cards centered */}
          <div className="flex flex-wrap justify-center gap-4">
            {steps.slice(3, 5).map((s) => (
              <div
                key={s.num}
                className="relative p-5 rounded-2xl bg-white shadow-md border border-gray-100 overflow-hidden w-full lg:w-[calc(33.333%-0.5rem)] min-w-[240px] max-w-[380px]"
              >
                <div className="absolute bottom-0 right-0 w-12 h-12 bg-gradient-to-tl from-gray-200 to-transparent rounded-tl-2xl" />
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-glovo-teal text-white font-bold text-lg shrink-0">
                    {s.num}
                  </span>
                  <h4 className="font-bold text-glovo-teal text-base">{s.title}</h4>
                </div>
                <ul className="space-y-1.5 relative z-10">
                  {s.bullets.map((bullet, j) => (
                    <li key={j} className="flex gap-2 text-sm text-glovo-dark/90 leading-relaxed">
                      <span className="text-glovo-teal font-bold shrink-0">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Caso1Slide4() {
  const steps = [
    {
      num: 6,
      title: "Governance Fix",
      bullets: [
        "Formal DPO (internal/external), notify AEPD/all authorities – address past €25k fine",
        "DOC: Appointment order, AEPD notif, governance charter, RACI matrix",
      ],
    },
    {
      num: 7,
      title: "Bases & Transparency (Arts. 6/12-14)",
      bullets: [
        "Per purpose: Contract (service), consent/LI (marketing), legal (fraud/HR); clear notices, CMP",
        "DOC: Jurisdiction-specific policies, LIAs, cookie policy, consent logs/proofs",
      ],
    },
    {
      num: 8,
      title: "Execute DPIAs",
      bullets: [
        "Detail ops/risks (bias/surveillance), mitigations (human override/bias tests), residual eval",
        "DOC: Per high-risk treatment + annual review plan",
      ],
    },
    {
      num: 9,
      title: "Ops Policies",
      bullets: [
        "Retention (e.g., GPS 30d auto), RBAC/access, breaches (72h notif), DSAR (30d SLA)",
        "DOC: Step-by-step SOPs, templates, request logs",
      ],
    },
  ];
  return (
    <div className="w-full flex flex-col h-full">
      {/* Main title banner */}
      <div className="w-full rounded-[100px] bg-glovo-teal text-white font-bold text-xl md:text-2xl py-4 px-8 text-center mb-4 shrink-0">
        Phase 2 – Steps 6-9
      </div>
      {/* Subtitle */}
      <p className="text-glovo-dark font-semibold text-sm mb-6 text-center">
        Governance to Ops
      </p>
      {/* Steps - grid layout: 2 top, 2 bottom centered */}
      <div className="flex-1 min-h-0 overflow-y-auto">
        <div className="flex flex-col gap-4">
          {/* Top row: 2 cards centered */}
          <div className="flex flex-wrap justify-center gap-4">
            {steps.slice(0, 2).map((s) => (
              <div
                key={s.num}
                className="relative p-5 rounded-2xl bg-white shadow-md border border-gray-100 overflow-hidden w-full lg:w-[calc(33.333%-0.5rem)] min-w-[240px] max-w-[380px]"
              >
                <div className="absolute bottom-0 right-0 w-12 h-12 bg-gradient-to-tl from-gray-200 to-transparent rounded-tl-2xl" />
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-glovo-teal text-white font-bold text-lg shrink-0">
                    {s.num}
                  </span>
                  <h4 className="font-bold text-glovo-teal text-base">{s.title}</h4>
                </div>
                <ul className="space-y-1.5 relative z-10">
                  {s.bullets.map((bullet, j) => (
                    <li key={j} className="flex gap-2 text-sm text-glovo-dark/90 leading-relaxed">
                      <span className="text-glovo-teal font-bold shrink-0">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          {/* Bottom row: 2 cards centered */}
          <div className="flex flex-wrap justify-center gap-4">
            {steps.slice(2, 4).map((s) => (
              <div
                key={s.num}
                className="relative p-5 rounded-2xl bg-white shadow-md border border-gray-100 overflow-hidden w-full lg:w-[calc(33.333%-0.5rem)] min-w-[240px] max-w-[380px]"
              >
                <div className="absolute bottom-0 right-0 w-12 h-12 bg-gradient-to-tl from-gray-200 to-transparent rounded-tl-2xl" />
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-glovo-teal text-white font-bold text-lg shrink-0">
                    {s.num}
                  </span>
                  <h4 className="font-bold text-glovo-teal text-base">{s.title}</h4>
                </div>
                <ul className="space-y-1.5 relative z-10">
                  {s.bullets.map((bullet, j) => (
                    <li key={j} className="flex gap-2 text-sm text-glovo-dark/90 leading-relaxed">
                      <span className="text-glovo-teal font-bold shrink-0">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Caso1Slide5() {
  const steps = [
    {
      num: 10,
      title: "Security Controls (Art. 32)",
      bullets: [
        "IAM/MFA/RBAC, TLS/AES-256 encryption, DLP (no personal cloud), full logging/monitoring",
        "DOC: Security policy, tech specs, implementation checklist/tests",
      ],
    },
    {
      num: 11,
      title: "Vendors/Transfers (Arts. 28/44-49)",
      bullets: [
        "Audit processors (cloud/payments), DPAs w/ subs/audits; SCCs/TIAs for non-adequate",
        "DOC: Vendor matrix, signed DPAs, due diligence reports, transfer register",
      ],
    },
    {
      num: 12,
      title: "Training/Audits/Continuous",
      bullets: [
        "Mandatory onboarding/annual by role; semi-annual audits; KPIs (DSAR time/breaches/training%)",
        "DOC: Training plans, audit reports, compliance dashboard, regulator evidence pack",
      ],
    },
  ];
  return (
    <div className="w-full flex flex-col h-full">
      {/* Main title banner */}
      <div className="w-full rounded-[100px] bg-glovo-teal text-white font-bold text-xl md:text-2xl py-4 px-8 text-center mb-4 shrink-0">
        Phase 2 – Steps 10-12
      </div>
      {/* Subtitle */}
      <p className="text-glovo-dark font-semibold text-sm mb-6 text-center">
        Secure & Sustain
      </p>
      {/* Steps - grid layout: 2 top, 1 bottom centered */}
      <div className="flex-1 min-h-0 overflow-y-auto">
        <div className="flex flex-col gap-4">
          {/* Top row: 2 cards centered */}
          <div className="flex flex-wrap justify-center gap-4">
            {steps.slice(0, 2).map((s) => (
              <div
                key={s.num}
                className="relative p-5 rounded-2xl bg-white shadow-md border border-gray-100 overflow-hidden w-full lg:w-[calc(33.333%-0.5rem)] min-w-[240px] max-w-[380px]"
              >
                <div className="absolute bottom-0 right-0 w-12 h-12 bg-gradient-to-tl from-gray-200 to-transparent rounded-tl-2xl" />
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-glovo-teal text-white font-bold text-lg shrink-0">
                    {s.num}
                  </span>
                  <h4 className="font-bold text-glovo-teal text-base">{s.title}</h4>
                </div>
                <ul className="space-y-1.5 relative z-10">
                  {s.bullets.map((bullet, j) => (
                    <li key={j} className="flex gap-2 text-sm text-glovo-dark/90 leading-relaxed">
                      <span className="text-glovo-teal font-bold shrink-0">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          {/* Bottom row: 1 card centered */}
          <div className="flex flex-wrap justify-center gap-4">
            {steps.slice(2, 3).map((s) => (
              <div
                key={s.num}
                className="relative p-5 rounded-2xl bg-white shadow-md border border-gray-100 overflow-hidden w-full lg:w-[calc(33.333%-0.5rem)] min-w-[240px] max-w-[380px]"
              >
                <div className="absolute bottom-0 right-0 w-12 h-12 bg-gradient-to-tl from-gray-200 to-transparent rounded-tl-2xl" />
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-glovo-teal text-white font-bold text-lg shrink-0">
                    {s.num}
                  </span>
                  <h4 className="font-bold text-glovo-teal text-base">{s.title}</h4>
                </div>
                <ul className="space-y-1.5 relative z-10">
                  {s.bullets.map((bullet, j) => (
                    <li key={j} className="flex gap-2 text-sm text-glovo-dark/90 leading-relaxed">
                      <span className="text-glovo-teal font-bold shrink-0">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Caso1Slide6() {
  const phase1 = [
    "Regulatory map + country addenda",
    "Data inventory + flow diagrams",
    "ROPA (Art. 30) complete",
    "DPIA screening + full DPIAs",
    "Gap analysis + severity matrix + roadmap",
  ];
  const phase2 = [
    "DPO appointment + AEPD notification",
    "Privacy policies + LIAs + CMP evidence",
    "Ops policies (retention/access/breaches/DSAR)",
    "Security policy + tech checklist",
    "DPAs + vendor audits + transfer register",
    "Training/audit plans + dashboard",
  ];
  return (
    <div className="w-full flex flex-col h-full">
      {/* Main title banner */}
      <div className="w-full rounded-[100px] bg-glovo-teal text-white font-bold text-xl md:text-2xl py-4 px-8 text-center mb-6 shrink-0">
        Documentation Master List
      </div>
      {/* Two checklist containers */}
      <div className="grid md:grid-cols-2 gap-6 flex-1 min-h-0 overflow-y-auto">
        {/* Phase 1 Checklist */}
        <div className="relative p-6 rounded-2xl bg-white shadow-lg border-2 border-glovo-teal/30 overflow-hidden">
          <div className="absolute bottom-0 right-0 w-14 h-14 bg-gradient-to-tl from-gray-200 to-transparent rounded-tl-2xl" />
          <div className="flex items-center gap-3 mb-5">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-glovo-teal text-white font-bold text-lg shrink-0">
              1
            </span>
            <h3 className="font-bold text-glovo-teal text-xl">Phase 1</h3>
          </div>
          <ul className="space-y-3 relative z-10">
            {phase1.map((item, i) => (
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
        {/* Phase 2 Checklist */}
        <div className="relative p-6 rounded-2xl bg-white shadow-lg border-2 border-glovo-teal/30 overflow-hidden">
          <div className="absolute bottom-0 right-0 w-14 h-14 bg-gradient-to-tl from-gray-200 to-transparent rounded-tl-2xl" />
          <div className="flex items-center gap-3 mb-5">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-glovo-teal text-white font-bold text-lg shrink-0">
              2
            </span>
            <h3 className="font-bold text-glovo-teal text-xl">Phase 2</h3>
          </div>
          <ul className="space-y-3 relative z-10">
            {phase2.map((item, i) => (
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
    </div>
  );
}
