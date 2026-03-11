"use client";

import Link from "next/link";
import { useState } from "react";

const categories = [
  {
    name: "General",
    faqs: [
      {
        q: "What is Pitch Capital?",
        a: "Pitch Capital is the world's first AI fundraising platform. We automate your entire capital-raising journey -- from creating investor-ready pitch decks in 90 seconds, to matching you with verified VCs, to closing deals through secure data rooms and escrow.",
      },
      {
        q: "Who is Pitch Capital for?",
        a: "Pitch Capital serves founders and companies at all stages -- from Pre-seed to Series C+. Whether you're a first-time founder or a serial entrepreneur, our platform streamlines the fundraising process for you.",
      },
      {
        q: "Is Pitch Capital a broker-dealer or investment adviser?",
        a: "No. Pitch Capital is a technology platform only. We provide tools, data, and communication features to connect founders with investors. We are not a broker-dealer, investment adviser, or financial intermediary.",
      },
      {
        q: "What sectors do you focus on?",
        a: "While our platform works for any industry, we have particularly strong investor networks in AI, HealthTech, FinTech, SaaS, and Financial Services.",
      },
    ],
  },
  {
    name: "Platform & Features",
    faqs: [
      {
        q: "How does the AI pitch deck generator work?",
        a: "Simply upload your business information -- company details, market size, revenue, and funding goals. Our AI analyzes thousands of successful pitch decks and generates a customized, investor-ready deck in about 90 seconds.",
      },
      {
        q: "How does investor matching work?",
        a: "Our AI analyzes your company profile, sector, stage, and geography, then matches you with investors from our pre-qualified network of 5,000+ VCs who actively invest in companies like yours.",
      },
      {
        q: "What are secure data rooms?",
        a: "Our data rooms provide enterprise-grade encrypted storage for sharing sensitive documents with potential investors. You control who can view, download, or print each document, with full activity tracking.",
      },
      {
        q: "How does the escrow feature work?",
        a: "When you're ready to close a deal, our built-in escrow system securely holds and transfers funds between parties. This protects both founders and investors throughout the transaction.",
      },
    ],
  },
  {
    name: "Meetings & Results",
    faqs: [
      {
        q: "What does 'guaranteed meetings' mean?",
        a: "The meetings included in your plan are actual, live calls with decision-making investors -- not just introductions or email intros. We guarantee qualified investor meetings within 45 days. If we don't deliver, you get a full refund.",
      },
      {
        q: "What's the success rate?",
        a: "We have a 93% success rate across our platform. Most founders who complete our process receive at least one qualified investor meeting within 45 days of onboarding.",
      },
      {
        q: "How quickly can I expect results?",
        a: "Your pitch deck is ready in 90 seconds. Investor matching begins immediately. Most founders receive their first investor meeting within 2-4 weeks of onboarding.",
      },
      {
        q: "What if I don't get any meetings?",
        a: "We stand behind our guarantee. Eligible clients who don't receive at least one qualified investor meeting within 90 days of completing onboarding receive a full refund.",
      },
    ],
  },
  {
    name: "Pricing & Billing",
    faqs: [
      {
        q: "Is there a free plan?",
        a: "Yes! Our Starter plan is completely free and includes one AI-generated pitch deck, a basic financial model, and PDF/PPTX export. No credit card required.",
      },
      {
        q: "Can I cancel anytime?",
        a: "Absolutely. All paid plans are month-to-month with no long-term contracts. You can cancel at any time and your plan will remain active until the end of your current billing period.",
      },
      {
        q: "Do you offer refunds?",
        a: "Yes. In addition to our 45-day meeting guarantee refund, we offer a 14-day money-back guarantee on all paid plans if you're not satisfied for any reason.",
      },
      {
        q: "Are there any hidden fees?",
        a: "None. The price you see is the price you pay. There are no setup fees, no per-meeting charges, and no success fees on capital raised.",
      },
    ],
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="glass-card rounded-xl overflow-hidden">
      <button
        className="w-full px-6 py-5 flex items-center justify-between text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold pr-4">{q}</span>
        <svg
          className={`w-5 h-5 text-primary-light shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="px-6 pb-5">
          <p className="text-slate-400 leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6">
            <span className="text-sm text-primary-light font-medium">Help Center</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">
            Frequently Asked{" "}
            <span className="gradient-text">Questions</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Everything you need to know about Pitch Capital. Can&apos;t find what you&apos;re looking for? Reach out to our team.
          </p>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {categories.map((cat) => (
            <div key={cat.name}>
              <h2 className="text-2xl font-bold mb-6">
                <span className="gradient-text">{cat.name}</span>
              </h2>
              <div className="space-y-3">
                {cat.faqs.map((faq) => (
                  <FAQItem key={faq.q} q={faq.q} a={faq.a} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still have questions CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-card rounded-3xl p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
              <p className="text-slate-300 text-lg mb-8 max-w-xl mx-auto">
                Our team is here to help. Get in touch and we&apos;ll get back to you within 24 hours.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact" className="btn-accent px-8 py-3 rounded-full font-semibold">
                  Contact Us
                </Link>
                <Link href="/pricing" className="px-8 py-3 rounded-full border border-white/10 hover:border-primary/40 text-white transition-all">
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
