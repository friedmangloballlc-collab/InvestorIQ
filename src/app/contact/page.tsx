import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Pitch Capital",
  description: "Get in touch with the Pitch Capital team. Schedule a demo, ask questions, or learn more about our AI fundraising platform.",
};

const contactOptions = [
  {
    title: "Sales & Demos",
    description: "Want to see the platform in action? Our team will walk you through everything.",
    email: "sales@pitchcapital.com",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Support",
    description: "Already a customer? Our support team is ready to help you with anything.",
    email: "support@pitchcapital.com",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    title: "Partnerships",
    description: "Interested in partnering with us? Let's explore opportunities together.",
    email: "partnerships@pitchcapital.com",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6">
            <span className="text-sm text-primary-light font-medium">Get in Touch</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">
            Let&apos;s Start a{" "}
            <span className="gradient-text">Conversation</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Whether you&apos;re ready to raise capital or just exploring, we&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <div className="glass-card rounded-2xl p-8 sm:p-10">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full bg-dark-lighter border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-primary/40 transition-colors"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full bg-dark-lighter border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-primary/40 transition-colors"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full bg-dark-lighter border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-primary/40 transition-colors"
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Company</label>
                  <input
                    type="text"
                    className="w-full bg-dark-lighter border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-primary/40 transition-colors"
                    placeholder="Your Company"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Fundraising Stage</label>
                  <select className="w-full bg-dark-lighter border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/40 transition-colors">
                    <option value="">Select your stage</option>
                    <option value="pre-seed">Pre-Seed</option>
                    <option value="seed">Seed</option>
                    <option value="series-a">Series A</option>
                    <option value="series-b">Series B</option>
                    <option value="series-c">Series C+</option>
                    <option value="other">Other / Not Sure</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full bg-dark-lighter border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-primary/40 transition-colors resize-none"
                    placeholder="Tell us about your company and fundraising goals..."
                  />
                </div>
                <button
                  type="submit"
                  className="btn-accent w-full py-4 rounded-full text-lg font-bold"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Reach Out Directly</h2>
                <p className="text-slate-400 leading-relaxed">
                  Prefer a direct approach? Choose the department that best fits your needs.
                </p>
              </div>

              <div className="space-y-4">
                {contactOptions.map((option) => (
                  <div key={option.title} className="glass-card rounded-xl p-6 flex gap-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-primary-light shrink-0">
                      {option.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{option.title}</h3>
                      <p className="text-slate-400 text-sm mb-2">{option.description}</p>
                      <a href={`mailto:${option.email}`} className="text-primary-light text-sm hover:text-white transition-colors">
                        {option.email}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <div className="glass-card rounded-xl p-6">
                <h3 className="font-semibold mb-3">Headquarters</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Boca Raton, Florida<br />
                  United States
                </p>
              </div>

              <div className="glass-card rounded-xl p-6">
                <h3 className="font-semibold mb-3">Global Coverage</h3>
                <div className="flex flex-wrap gap-2">
                  {["North America", "Europe", "Asia", "GCC"].map((region) => (
                    <span key={region} className="bg-primary/10 border border-primary/20 text-primary-light text-xs px-3 py-1 rounded-full">
                      {region}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
