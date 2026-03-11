import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Pitch Capital",
  description: "Learn about our mission to democratize fundraising with AI. Founded by Franco Ieraci, Pitch Capital is revolutionizing how founders raise capital.",
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
    description: "Connecting founders across North America, Europe, Asia, and the GCC with verified investors worldwide.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const team = [
  {
    name: "Franco Ieraci",
    role: "Founder & CEO",
    bio: "Serial AI entrepreneur with multiple exits. Built and exited Clickedin Inc. and Creatively.io before founding Pitch Capital.",
  },
  {
    name: "James Stephan-Usypchuk",
    role: "Chief Strategy & Information Security Officer",
    bio: "Oversees investor relations, strategic partnerships, and platform security across the ecosystem.",
  },
  {
    name: "Cassandra Steele",
    role: "Director of Sales",
    bio: "Leads our sales team in connecting founders with the right fundraising solutions for their stage.",
  },
];

const milestones = [
  { year: "2022", event: "Pitch Capital founded in Boca Raton, FL" },
  { year: "2023", event: "Launched AI pitch deck generator" },
  { year: "2024", event: "Expanded investor network to 5,000+ verified VCs" },
  { year: "2025", event: "Launched secure data rooms & escrow system" },
  { year: "2026", event: "Surpassed $2B in total capital raised for founders" },
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
              The old way of raising capital was slow, unfair, and exclusive. Pitch Capital was built for a new era -- where every visionary founder gets fast, transparent access to the capital they need to change the world.
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
                Born from a <span className="gradient-text">Founder&apos;s Pain</span>
              </h2>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  Franco Ieraci has successfully built and exited multiple tech companies, consistently pushing the boundaries of what AI can do.
                </p>
                <p>
                  Through every success, one painful truth remained -- fundraising was a broken system. It meant months wasted on pitch decks, endless investor searches, and sacrificing valuable time that should have been spent building the actual business.
                </p>
                <p>
                  Franco envisioned a better way -- a platform that wasn&apos;t just another tool, but an AI-powered ecosystem built to automate the grind and level the playing field.
                </p>
                <p className="text-white font-medium">
                  Pitch Capital is the solution he once wished he had.
                </p>
              </div>
            </div>
            <div className="glass-card rounded-3xl p-10 text-center">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-secondary mx-auto mb-6 flex items-center justify-center text-5xl font-bold text-white">
                FI
              </div>
              <h3 className="text-2xl font-bold">Franco Ieraci</h3>
              <p className="text-primary-light mb-4">Founder & CEO</p>
              <p className="text-slate-400 text-sm italic">
                &ldquo;We don&apos;t just build software; we build connections.&rdquo;
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

      <div className="section-divider max-w-5xl mx-auto" />

      {/* Team */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Meet the <span className="gradient-text">Team</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              A passionate team of entrepreneurs, engineers, and operators.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="glass-card rounded-2xl p-8 text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-primary-light">
                  {member.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <h3 className="text-lg font-bold">{member.name}</h3>
                <p className="text-primary-light text-sm mb-3">{member.role}</p>
                <p className="text-slate-400 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider max-w-5xl mx-auto" />

      {/* Timeline */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Our <span className="gradient-text">Journey</span>
            </h2>
          </div>

          <div className="space-y-8">
            {milestones.map((m, i) => (
              <div key={m.year} className="flex gap-6 items-start">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-sm shrink-0">
                    {m.year}
                  </div>
                  {i < milestones.length - 1 && (
                    <div className="w-px h-12 bg-gradient-to-b from-primary/40 to-transparent mt-2" />
                  )}
                </div>
                <div className="glass-card rounded-xl p-5 flex-1">
                  <p className="text-slate-300">{m.event}</p>
                </div>
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
            Thousands of founders trust Pitch Capital to raise the capital they need.
          </p>
          <Link href="/pricing" className="btn-accent px-10 py-4 rounded-full text-lg font-bold inline-block">
            Get Started Today
          </Link>
        </div>
      </section>
    </>
  );
}
