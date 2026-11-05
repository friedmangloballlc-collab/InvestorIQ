"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(result.error || "Something went wrong. Please try again.");
      form.reset();
      setStatus("sent");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  return (
    <form className="space-y-6" onSubmit={onSubmit}>
      {/* honeypot: hidden from people, bots fill it */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">First Name</label>
          <input
            type="text"
            className="w-full bg-dark-lighter border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-primary/40 transition-colors"
            placeholder="John"
            name="firstName" required maxLength={80} autoComplete="given-name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">Last Name</label>
          <input
            type="text"
            className="w-full bg-dark-lighter border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-primary/40 transition-colors"
            placeholder="Doe"
            name="lastName" maxLength={80} autoComplete="family-name"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
        <input
          type="email"
          className="w-full bg-dark-lighter border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-primary/40 transition-colors"
          placeholder="john@company.com"
            name="email" required maxLength={200} autoComplete="email"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-300 mb-2">Company</label>
        <input
          type="text"
          className="w-full bg-dark-lighter border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-primary/40 transition-colors"
          placeholder="Your Company"
            name="company" maxLength={200} autoComplete="organization"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-300 mb-2">Fundraising Stage</label>
        <select name="stage" className="w-full bg-dark-lighter border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/40 transition-colors">
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
          name="message" required maxLength={4000}
        />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-accent w-full py-4 rounded-full text-lg font-bold disabled:opacity-60"
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>
      {status === "sent" && <p role="status" className="text-sm text-emerald-400">Thanks! Your message was received. We&apos;ll reply by email.</p>}
      {status === "error" && <p role="alert" className="text-sm text-red-400">{error}</p>}
    </form>
  );
}
