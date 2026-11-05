import Link from "next/link";

const stats = [
  { value: "90s", label: "Pitch Deck Generation" },
  { value: "AI", label: "Investor Matching" },
  { value: "Live", label: "Investor Meetings" },
  { value: "1", label: "Platform: Deck, Match & Outreach" },
];

const features = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "AI Pitch Deck Generator",
    description:
      "Upload your business info and get an investor-ready pitch deck and financial model in 90 seconds. No design skills needed.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Smart Investor Matching",
    description:
      "Our AI identifies your ideal investors from our investor network and executes hyper-personalized outreach automatically.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: "Real Investor Meetings",
    description:
      "Not just introductions -- actual live calls with decision-makers. We work to book qualified investor meetings, typically aiming for the first within 45 days.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: "Secure Data Rooms & Escrow",
    description:
      "Finalize deals through enterprise-grade secure data rooms and complete funding transactions with built-in escrow.",
  },
];

const steps = [
  {
    number: "01",
    title: "Upload Your Business Info",
    description:
      "Answer a few questions about your company, market, and funding goals. Our AI does the rest.",
  },
  {
    number: "02",
    title: "Get Your Pitch Package",
    description:
      "Receive a professionally designed pitch deck, financial model, and executive summary in 90 seconds.",
  },
  {
    number: "03",
    title: "Match with Investors",
    description:
      "Our AI scans our investor network and connects you with VCs who invest in your space.",
  },
  {
    number: "04",
    title: "Close Your Deal",
    description:
      "Manage meetings, share documents via secure data rooms, and close funding through our escrow system.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "4s" }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-8">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-sm text-primary-light font-medium">AI-Powered Fundraising Platform</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Raise Capital{" "}
              <span className="gradient-text">10x Faster</span>{" "}
              with AI
            </h1>

            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
              Create investor-ready pitch decks in 90 seconds. Match with relevant investors in minutes.
              Close deals securely -- all in one AI-powered ecosystem.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Link
                href="/pricing"
                className="btn-accent px-8 py-4 rounded-full text-lg font-bold w-full sm:w-auto"
              >
                Start Raising Capital
              </Link>
              <Link
                href="/features"
                className="group flex items-center gap-2 px-8 py-4 rounded-full border border-white/10 hover:border-primary/40 text-white transition-all w-full sm:w-auto justify-center"
              >
                See How It Works
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold gradient-text mb-1">{stat.value}</div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Everything You Need to{" "}
              <span className="gradient-text">Get Funded</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              One platform replaces your pitch deck designer, investor CRM, outreach tools, data room, and escrow service.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="glass-card rounded-2xl p-8 group cursor-default">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-primary-light mb-6 group-hover:from-primary/30 group-hover:to-secondary/30 transition-all">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider max-w-5xl mx-auto" />

      {/* How It Works */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              How It <span className="gradient-text">Works</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              From upload to funded in four simple steps. Our AI handles the heavy lifting.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={step.number} className="relative">
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-primary/40 to-transparent" />
                )}
                <div className="text-5xl font-bold text-primary/20 mb-4">{step.number}</div>
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider max-w-5xl mx-auto" />


      <div className="section-divider max-w-5xl mx-auto" />

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-card rounded-3xl p-12 sm:p-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
            <div className="relative z-10">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                Ready to <span className="gradient-text">Raise Capital?</span>
              </h2>
              <p className="text-xl text-slate-300 mb-10 max-w-xl mx-auto">
                Join the next generation of funded founders. Your pitch deck is 90 seconds away.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/pricing"
                  className="btn-accent px-10 py-4 rounded-full text-lg font-bold w-full sm:w-auto"
                >
                  Get Started -- It&apos;s Free
                </Link>
                <Link
                  href="/contact"
                  className="px-10 py-4 rounded-full border border-white/10 hover:border-primary/40 text-white transition-all w-full sm:w-auto"
                >
                  Talk to Sales
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
