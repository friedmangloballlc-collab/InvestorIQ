import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | InvestorIQ",
  description: "Learn about InvestorIQ, an AI platform that helps founders build pitch decks, find relevant investors and manage outreach.",
};

const values = [
  {
    title: "Speed Over Bureaucracy",
    description: "Traditional fundraising takes 6-12 months. We compress it to weeks with AI automation.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Transparency First",
    description: "No hidden fees, no gatekeeping. Every founder deserves clear, fair access to capital.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  {
    title: "Founders First",
    description: "Built by founders, for founders. We understand the grind because we've lived it.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "Global Reach",
    description: "Connecting founders across North America, Europe, Asia, and the GCC with investors worldwide.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6">
              <span className="text-sm text-primary-light font-medium">Our Story</span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              We&apos;re Building the{" "}
              <span className="gradient-text">Future of Fundraising</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              The old way of raising capital was slow, unfair, and exclusive. InvestorIQ was built for a new era -- where every visionary founder gets fast, transparent access to the capital they need to change the world.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Why <span className="gradient-text">InvestorIQ</span>
              </h2>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  Raising capital takes founders away from building their business: weeks on a pitch deck, long investor searches, and outreach that rarely lands.
                </p>
                <p>
                  InvestorIQ brings the work into one place: build an investor-ready deck, find investors who back your sector and stage, and manage outreach and meetings.
                </p>
                <p>
                  We use AI to handle the repetitive parts so founders can spend their time on the conversations that matter.
                </p>
                <p className="text-white font-medium">
                  InvestorIQ is a technology platform, not a broker-dealer or investment adviser.
                </p>
              </div>
            </div>
            <div className="glass-card rounded-3xl p-10 text-center">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-secondary mx-auto mb-6 flex items-center justify-center text-5xl font-bold text-white">
                IQ
              </div>
              <h3 className="text-2xl font-bold">InvestorIQ</h3>
              <p className="text-primary-light mb-4">AI fundraising platform</p>
              <p className="text-slate-400 text-sm italic">
                Deck, investor matching and outreach in one place.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider max-w-5xl mx-auto" />

      {/* Values */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              What <span className="gradient-text">Drives Us</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Our core values shape everything we build and every founder we serve.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="glass-card rounded-2xl p-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-accent mb-4">
                  {v.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{v.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Join the <span className="gradient-text">Revolution</span>
          </h2>
          <p className="text-xl text-slate-400 mb-10 max-w-xl mx-auto">
            InvestorIQ helps founders prepare, match and pitch to raise the capital they need.
          </p>
          <Link href="/pricing" className="btn-accent px-10 py-4 rounded-full text-lg font-bold inline-block">
            Get Started Today
          </Link>
        </div>
      </section>
    </>
  );
}
