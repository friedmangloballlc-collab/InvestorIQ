// Contact form -> Supabase `contact_submissions` (insert-only for this key; see supabase/contact_submissions.sql).
// Agent Vault on the owner's Mac pulls new rows into its local CRM as Leads.
import { NextResponse } from "next/server";

const STAGES = new Set(["", "pre-seed", "seed", "series-a", "series-b", "series-c", "other"]);
const EMAIL = /^[^\s@]{1,64}@[^\s@]{1,190}\.[^\s@]{2,}$/;

// Best-effort per-instance limit; the table's insert policy and Supabase rate limits are the real backstop.
const hits = new Map<string, number[]>();
function limited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < 10 * 60 * 1000);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > 5;
}

const clean = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");

export async function POST(req: Request) {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_ANON_KEY;
  if (!url || !key) return NextResponse.json({ error: "The contact form isn't set up yet. Please try again later." }, { status: 503 });

  const ip = (req.headers.get("x-forwarded-for") || "").split(",")[0].trim() || "unknown";
  if (limited(ip)) return NextResponse.json({ error: "Too many messages. Please wait a few minutes." }, { status: 429 });

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
  if (clean(body.website, 200)) return NextResponse.json({ ok: true }); // honeypot: pretend success

  const row = {
    first_name: clean(body.firstName, 80),
    last_name: clean(body.lastName, 80),
    email: clean(body.email, 200).toLowerCase(),
    company: clean(body.company, 200),
    stage: clean(body.stage, 20),
    message: clean(body.message, 4000),
    source: "investoriq-contact",
  };
  if (!row.first_name) return NextResponse.json({ error: "Please enter your first name." }, { status: 400 });
  if (!EMAIL.test(row.email)) return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  if (!row.message) return NextResponse.json({ error: "Please enter a message." }, { status: 400 });
  if (!STAGES.has(row.stage)) row.stage = "other";

  const res = await fetch(`${url.replace(/\/$/, "")}/rest/v1/contact_submissions`, {
    method: "POST",
    headers: { apikey: key, Authorization: `Bearer ${key}`, "Content-Type": "application/json", Prefer: "return=minimal" },
    body: JSON.stringify(row),
    cache: "no-store",
  });
  if (!res.ok) {
    console.error("contact insert failed", res.status, (await res.text()).slice(0, 300));
    return NextResponse.json({ error: "We couldn't send your message. Please try again." }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
