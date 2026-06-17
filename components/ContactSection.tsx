"use client";

import { useState } from "react";
import SectionHeader from "@/components/SectionHeader";

// ── SET THIS UP ───────────────────────────────────────────────────────────
// 1. Go to https://web3forms.com and enter the email where you want messages
//    to arrive (your normal daily email is fine — it is never shown on the page).
// 2. Check that inbox for your Access Key and paste it below.
// It is safe for this key to be public: it only routes messages to your inbox
// and never reveals your email address to visitors.
const WEB3FORMS_ACCESS_KEY = "11a20803-49d2-4199-8b60-c69e30b4194c";
// ──────────────────────────────────────────────────────────────────────────

type Status = "idle" | "sending" | "success" | "error";

export default function ContactSection() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    botcheck: "", // honeypot — real people leave this empty
  });

  function update(field: keyof typeof form, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (form.botcheck) return; // a bot filled the hidden field — ignore
    setStatus("sending");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: "New message from the Cocolito Collective site",
          from_name: "Cocolito Collective",
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });
      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setForm({ name: "", email: "", message: "", botcheck: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      className="mx-auto max-w-6xl scroll-mt-24 px-5 py-16 sm:px-8"
    >
      <SectionHeader eyebrow="{ contact }" title="Say hi" label="CC · contact" />

      <div className="mt-6 grid gap-8 md:grid-cols-12">
        {/* intro + links */}
        <div className="md:col-span-5">
          <p className="text-lg leading-relaxed text-peach">
            Questions, collaboration, or just want to say hello? Send a note and
            it&apos;ll land straight in my inbox &mdash; or find me here:
          </p>
          <ul className="mt-5 flex flex-col gap-2 text-cream/80">
            <li>
              <a
                href="https://mrcanela.itch.io"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-brand"
              >
                <span aria-hidden className="font-mono text-brand">
                  {"</>"}
                </span>
                itch.io
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Cupcakechan"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-brand"
              >
                <span aria-hidden className="font-mono text-brand">
                  {"</>"}
                </span>
                GitHub
              </a>
            </li>
          </ul>
        </div>

        {/* form on a paper panel */}
        <div className="md:col-span-7">
          {status === "success" ? (
            <div className="rounded-[5px] bg-paper p-6 text-ink">
              <p className="font-display text-xl font-semibold">
                Thanks &mdash; your message is on its way.
              </p>
              <p className="mt-2 text-ink/70">I&apos;ll get back to you soon.</p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="mt-4 text-sm font-medium text-ink/60 underline underline-offset-4 hover:text-ink"
              >
                Send another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="rounded-[5px] bg-paper p-6 text-ink">
              {/* honeypot: hidden from people, catches bots */}
              <input
                type="text"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                value={form.botcheck}
                onChange={(e) => update("botcheck", e.target.value)}
                className="hidden"
              />

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-sm font-medium">
                  Name
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    className="mt-1.5 w-full rounded-[4px] border border-ink/20 bg-cream px-3 py-2 text-ink outline-none focus:border-brand"
                  />
                </label>
                <label className="block text-sm font-medium">
                  Email
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    className="mt-1.5 w-full rounded-[4px] border border-ink/20 bg-cream px-3 py-2 text-ink outline-none focus:border-brand"
                  />
                </label>
              </div>

              <label className="mt-4 block text-sm font-medium">
                Message
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => update("message", e.target.value)}
                  className="mt-1.5 w-full resize-y rounded-[4px] border border-ink/20 bg-cream px-3 py-2 text-ink outline-none focus:border-brand"
                />
              </label>

              <div className="mt-4 flex flex-wrap items-center gap-4">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="rounded-[4px] bg-brand px-5 py-2.5 font-medium text-espresso transition-colors hover:bg-brand-deep disabled:opacity-60"
                >
                  {status === "sending" ? "Sending…" : "Send message"}
                </button>
                {status === "error" ? (
                  <p className="text-sm font-medium text-brand-deep">
                    Something went wrong. Please try again, or reach me on
                    itch.io / GitHub.
                  </p>
                ) : null}
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
