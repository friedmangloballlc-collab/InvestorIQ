import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing | Pitch Capital",
  description: "Simple, transparent pricing. Choose the plan that fits your fundraising stage. From free pitch decks to full-service capital raising.",
};

const plans = [
  {
    name: "Starter",
    price: "Free",
    period: "",
    description: "Perfect for founders exploring fundraising options.",
    features: [
      "1 AI-generated pitch deck",
      "Basic financial model",
      "PDF & PPTX export",
      "Community access",
      "Email support",
    ],
    cta: "Start Free",
    highlighted: false,
    gradient: "from-slate-500 to-slate-600",
  },
  {
    name: "Growth",
    price: "$299",
    period: "/month",
    description: "For founders actively raising their round.",
    features: [
      "Unlimited pitch decks",
      "Advanced financial models",
      "2 guaranteed investor meetings/month",
      "AI investor matching",
      "Personalized outreach campaigns",
      "Basic data room",
      "Priority support",
    ],
    cta: "Start Raising",
    highlighted: false,
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    name: "Scale",
    price: "$799",
    period: "/month",
    description: "Maximum velocity for serious fundraising.",
    features: [
      "Everything in Growth",
      "5 guaranteed investor meetings/month",
      "Premium investor network access",
      "Advanced secure data rooms",
      "Built-in escrow service",
      "Cap table management",
      "Dedicated account manager",
      "Phone & video support",
    ],
    cta: "Accelerate Now",
    highlighted: true,
    gradient: "from-primary to-primary-light",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For companies raising Series B+ rounds.",
    features: [
      "Everything in Scale",
      "10+ guaranteed meetings/month",
      "White-glove onboarding",
      "Custom integrations",
      "Dedicated fundraising strategist",
      "Priority investor introductions",
      "SLA guarantees",
      "Custom billing",
    ],
    cta: "Contact Sales",
    highlighted: false,
    gradient: "from-amber-500 to-orange-600",
  },
];

const faqs = [
  {
    q: "What does 'guaranteed meetings' mean?",
    a: "We guarantee actual live calls with verified, decision-making investors who actively invest in your sector. If we don't deliver within 45 days, you get a full refund.",
  },
  {
    q: "Can I switch plans anytime?",
    a: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.",
  },
  {
    q: "Is there a contract or commitment?",
    a: "No long-term contracts. All plans are month-to-month and you can cancel anytime.",
  },
];

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6">
            <span className="text-sm text-primary-light font-medium">Simple Pricing</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">
            Invest in Your{" "}
            <span className="gradient-text">Fundraising</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Transparent pricing with no hidden fees. Start free, scale when you&apos;re ready.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 -mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl p-8 flex flex-col relative ${
                  plan.highlighted
                    ? "bg-gradient-to-b from-primary/20 to-dark-light border-2 border-primary/40 scale-[1.02]"
                    : "glass-card"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-primary-light px-4 py-1 rounded-full text-xs font-bold text-white">
                    MOST POPULAR
                  </div>
                )}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${plan.gradient} flex items-center justify-center text-white font-bold text-lg mb-4`}>
                  {plan.name[0]}
                </div>
                <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                <p className="text-slate-400 text-sm mb-4">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && <span className="text-slate-400">{plan.period}</span>}
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <svg className="w-4 h-4 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-300">{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={plan.name === "Enterprise" ? "/contact" : "/contact"}
                  className={`block text-center py-3 rounded-full font-semibold text-sm transition-all ${
                    plan.highlighted
                      ? "btn-accent"
                      : "border border-white/10 hover:border-primary/40 text-white hover:bg-primary/10"
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider max-w-5xl mx-auto" />

      {/* Meeting Guarantee */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card rounded-3xl p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5" />
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold mb-4">Our Meeting Guarantee</h2>
              <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
                Pitch Capital guarantees that eligible clients will receive at least one qualified investor meeting within 90 days of completing onboarding. If we don&apos;t deliver, you get a full refund. No questions asked.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick FAQ */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Pricing <span className="gradient-text">FAQ</span>
          </h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="glass-card rounded-xl p-6">
                <h3 className="font-semibold mb-2">{faq.q}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/faq" className="text-primary-light hover:text-white transition-colors text-sm">
              View all FAQs &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
