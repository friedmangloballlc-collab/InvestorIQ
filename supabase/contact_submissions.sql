-- Run once in Supabase → SQL Editor. Creates an insert-only inbox for the InvestorIQ contact form.
-- The website uses the anon key: it can INSERT rows but can never read, change or delete them.
-- Agent Vault reads new rows with the service_role key, kept only in the owner's macOS Keychain.
create table if not exists public.contact_submissions (
  id          bigint generated always as identity primary key,
  created_at  timestamptz not null default now(),
  first_name  text not null check (char_length(first_name) between 1 and 80),
  last_name   text not null default '' check (char_length(last_name) <= 80),
  email       text not null check (char_length(email) between 3 and 200 and email like '%@%'),
  company     text not null default '' check (char_length(company) <= 200),
  stage       text not null default '' check (stage in ('', 'pre-seed', 'seed', 'series-a', 'series-b', 'series-c', 'other')),
  message     text not null check (char_length(message) between 1 and 4000),
  source      text not null default 'investoriq-contact' check (char_length(source) <= 40)
);

alter table public.contact_submissions enable row level security;

drop policy if exists "website can insert" on public.contact_submissions;
create policy "website can insert" on public.contact_submissions
  for insert to anon with check (true);
-- No select / update / delete policies: anon and authenticated users cannot read or change rows.

revoke all on public.contact_submissions from anon, authenticated;
grant insert (first_name, last_name, email, company, stage, message, source) on public.contact_submissions to anon;

create index if not exists contact_submissions_created_at on public.contact_submissions (created_at);
