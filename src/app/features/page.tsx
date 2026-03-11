import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Features | Pitch Capital",
  description: "Explore our AI-powered features: pitch deck generator, investor matching, secure data rooms, escrow, and guaranteed meetings.",
};

const features = [
  {
    title: "AI Pitch Deck Generator",
    description: "Upload your business info and get a professional, investor-ready pitch deck in 90 seconds. Our AI analyzes thousands of successful decks to craft the perfect narrative for your company.",
    highlights: [
      "Generates 15+ slide pitch decks instantly",
      "Includes financial models and projections",
      "Custom design themes matching your brand",
      "Export to PDF, PPTX, or share via link",
      "Continuously improved based on investor feedback",
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    gradient: "from-violet-500 to-purple-600",
  },
  {
    title: "Smart Investor Matching",
    description: "Our AI scans our network of 5,000+ verified investors and matches you with VCs who actively invest in your sector, stage, and geography. No more cold outreach.",
    highlights: [
      "5,000+ pre-qualified, verified investors",
      "AI-powered compatibility scoring",
      "Hyper-personalized outreach sequences",
      "Focus on AI, HealthTech, FinTech, and more",
      "Global reach: NA, Europe, Asia, GCC",
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    title: "Guaranteed Investor Meetings",
    description: "Not just introductions -- actual live meetings with decision-makers. We guarantee qualified investor meetings within 45 days or your money back.",
    highlights: [
      "Live calls with verified decision-makers",
      "Calendar invites, not just email intros",
      "2, 5, or 10 meetings/month based on plan",
      "45-day meeting guarantee",
      "Pre-qualified investors in your vertical",
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    gradient: "from-amber-500 to-orange-600",
  },
  {
    title: "Secure Data Rooms",
    description: "Share sensitive documents with investors through enterprise-grade encrypted data rooms. Track who views what and control access at a granular level.",
    highlights: [
      "End-to-end encryption",
      "Granular access controls per document",
      "Real-time activity tracking and analytics",
      "Watermarking and download restrictions",
      "SOC 2 compliant infrastructure",
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    gradient: "from-emerald-500 to-green-600",
  },
  {
    title: "Built-in Escrow",
    description: "Complete funding transactions securely through our built-in escrow system. Protect both founders and investors with transparent, secure fund transfers.",
    highlights: [
      "Secure fund holding and release",
      "Milestone-based disbursement options",
      "Full transaction transparency",
      "Regulatory compliant",
      "Instant notifications and receipts",
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    gradient: "from-rose-500 to-pink-600",
  },
  {
    title: "AI Financial Modeling",
    description: "Generate comprehensive financial models alongside your pitch deck. Revenue projections, unit economics, and cap tables -- all powered by AI.",
    highlights: [
      "5-year revenue projections",
      "Unit economics breakdowns",
      "Cap table management",
      "Scenario modeling (bull/base/bear)",
      "Investor-ready financial appendix",
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    gradient: "from-indigo-500 to-violet-600",
  },
];

const comparison = [
  { feature: "Pitch Deck Creation", traditional: "2-4 weeks", pitchCapital: "90 seconds" },
  { feature: "Investor Research", traditional: "Months of networking", pitchCapital: "Instant AI matching" },
  { feature: "Outreach", traditional: "Cold emails & LinkedIn", pitchCapital: "Automated & personalized" },
  { feature: "Meetings", traditional: "No guarantee", pitchCapital: "Guaranteed in 45 days" },
  { feature: "Due Diligence", traditional: "Scattered documents", pitchCapital: "Secure data rooms" },
  { feature: "Deal Close", traditional: "Wire transfers & lawyers", pitchCapital: "Built-in escrow" },
];

export default function FeaturesPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6">
              <span className="text-sm text-primary-light font-medium">Platform Features</span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              One Platform.{" "}
              <span className="gradient-text">Every Tool.</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Replace your pitch deck designer, investor CRM, outreach tools, data room, and escrow service with a single AI-powered platform.
            </p>
          </div>
        </div>
      </section>

      {/* Features Detail */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div>
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-white mb-6`}>
                  {feature.icon}
                </div>
                <h2 className="text-3xl font-bold mb-4">{feature.title}</h2>
                <p className="text-slate-300 text-lg leading-relaxed mb-6">
                  {feature.description}
                </p>
                <ul className="space-y-3">
                  {feature.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-400">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="glass-card rounded-2xl p-8 h-64 flex items-center justify-center">
                <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-white opacity-40`}>
                  {feature.icon}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="section-divider max-w-5xl mx-auto" />

      {/* Comparison Table */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Traditional vs{" "}
              <span className="gradient-text">Pitch Capital</span>
            </h2>
            <p className="text-xl text-slate-400">See the difference AI makes in your fundraising journey.</p>
          </div>

          <div className="glass-card rounded-2xl overflow-hidden">
            <div className="grid grid-cols-3 bg-dark-lighter/50 p-4 font-semibold text-sm">
              <div className="text-slate-400">Process</div>
              <div className="text-center text-slate-400">Traditional</div>
              <div className="text-center text-primary-light">Pitch Capital</div>
            </div>
            {comparison.map((row, i) => (
              <div
                key={row.feature}
                className={`grid grid-cols-3 p-4 items-center text-sm ${
                  i < comparison.length - 1 ? "border-b border-white/5" : ""
                }`}
              >
                <div className="font-medium">{row.feature}</div>
                <div className="text-center text-slate-500">{row.traditional}</div>
                <div className="text-center text-accent font-medium">{row.pitchCapital}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Experience the <span className="gradient-text">Future?</span>
          </h2>
          <p className="text-xl text-slate-400 mb-10 max-w-xl mx-auto">
            Start with a free pitch deck and see why thousands of founders chose Pitch Capital.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/pricing" className="btn-accent px-10 py-4 rounded-full text-lg font-bold">
              Get Started Free
            </Link>
            <Link href="/contact" className="px-10 py-4 rounded-full border border-white/10 hover:border-primary/40 text-white transition-all">
              Schedule a Demo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
