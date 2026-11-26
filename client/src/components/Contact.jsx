import { useState } from "react";
import Section from "./Section";
import { profile } from "../data/profile";

const EMPTY = { name: "", email: "", message: "", website: "" };

function validate(f) {
  const e = {};
  if (f.name.trim().length < 2) e.name = "Enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) e.email = "Enter a valid email address, like name@company.com.";
  if (f.message.trim().length < 10) e.message = "Write at least 10 characters.";
  return e;
}

function Field({ id, label, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block font-medium">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-2 text-sm text-red-700">
          {error}
        </p>
      )}
    </div>
  );
}

function ContactTile({ href, label, value, icon, className = "", external }) {
  return (
    <a href={href} {...(external ? { target: "_blank", rel: "noreferrer" } : {})} className={`group ${className} flex min-w-0 items-center gap-4 rounded-2xl bg-white/[0.06] p-5 transition hover:bg-white/[0.11]`}>
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gold text-ink">
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          {icon}
        </svg>
      </span>
      <span className="min-w-0">
        <span className="block text-sm text-white/60">{label}</span>
        <span className="block truncate font-medium">{value}</span>
      </span>
    </a>
  );
}

export default function Contact() {
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [state, setState] = useState("idle"); // idle | sending | sent | failed

  const update = (k) => (e) => {
    setForm((f) => ({ ...f, [k]: e.target.value }));
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }));
  };

  async function onSubmit(e) {
    e.preventDefault();
    const v = validate(form);
    setErrors(v);
    if (Object.keys(v).length) return;
    setState("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        if (data.errors) setErrors(data.errors);
        throw new Error();
      }
      setForm(EMPTY);
      setState("sent");
    } catch {
      setState("failed");
    }
  }

  const input = (bad) =>
    `w-full rounded-xl border bg-page px-4 py-3 transition-colors placeholder:text-muted/60 focus:border-accent focus:bg-white ${
      bad ? "border-red-600" : "border-line hover:border-muted/40"
    }`;

  return (
    <Section id="contact" title="Contact" tone="dark">
      <p className="max-w-[20ch] text-3xl font-semibold leading-tight tracking-tight md:text-5xl md:leading-[1.1]">
        Have an internship opening? I'd love to hear about it.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        <ContactTile
          href={`mailto:${profile.email}`}
          label="Email"
          value={profile.email}
          icon={<><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>}
        />
        <ContactTile
          href={profile.phoneHref}
          label="Phone"
          value={profile.phone}
          icon={<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2Z" />}
        />
        {profile.links.linkedin && (
          <ContactTile
            href={profile.links.linkedin}
            external
            className="sm:col-span-2"
            label="LinkedIn"
            value="Ratanakvisal Chhouk"
            icon={<><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7" /></>}
          />
        )}
      </div>

      <div className="mt-6 rounded-3xl bg-white p-6 text-ink md:p-9">
        {state === "sent" ? (
          <div role="status">
            <p className="text-lg font-semibold">Message sent</p>
            <p className="mt-1 text-muted">Thank you. I'll reply to your email within a few days.</p>
            <button onClick={() => setState("idle")} className="mt-4 font-medium text-accent underline underline-offset-4">
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={onSubmit} noValidate className="space-y-6">
            <p className="text-lg font-semibold">Send a message</p>
            <input type="text" name="website" value={form.website} onChange={update("website")} tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

            <div className="grid gap-6 sm:grid-cols-2">
              <Field id="name" label="Name" error={errors.name}>
                <input id="name" autoComplete="name" value={form.name} onChange={update("name")}
                  className={input(errors.name)} aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-error" : undefined} />
              </Field>
              <Field id="email" label="Email" error={errors.email}>
                <input id="email" type="email" autoComplete="email" value={form.email} onChange={update("email")}
                  className={input(errors.email)} aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined} />
              </Field>
            </div>
            <Field id="message" label="Message" error={errors.message}>
              <textarea id="message" rows={5} value={form.message} onChange={update("message")}
                className={`${input(errors.message)} resize-y`} aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-error" : undefined} />
            </Field>

            <div className="flex flex-wrap items-center gap-5">
              <button
                type="submit"
                disabled={state === "sending"}
                className="rounded-full bg-accent px-7 py-3.5 font-medium text-white transition hover:bg-accent-deep disabled:opacity-60"
              >
                {state === "sending" ? "Sending…" : "Send message"}
              </button>
              {state === "failed" && (
                <p role="alert" className="text-sm text-red-700">
                  The message couldn't be sent. Email me directly at {profile.email}.
                </p>
              )}
            </div>
          </form>
        )}
      </div>
    </Section>
  );
}
