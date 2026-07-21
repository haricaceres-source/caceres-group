"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/Button";
import { INDUSTRY_LIST } from "@/lib/constants";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="border-t border-gold/40 pt-8">
        <p className="text-[11px] font-medium tracking-[0.25em] text-gold uppercase">
          Received
        </p>
        <h3 className="mt-3 font-serif text-2xl font-medium text-navy dark:text-white">
          Thank you for contacting Grupos Caceres.
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
          Our team will review your message and respond shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="border-t border-gold/40 pt-8">
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Name" name="name" required />
        <Field label="Company" name="company" required />
        <Field label="Country" name="country" required />
        <Field label="Email" name="email" type="email" required />
        <div className="md:col-span-2">
          <label className="mb-2 block text-[11px] font-medium tracking-[0.2em] text-[var(--muted)] uppercase">
            Industry
          </label>
          <select
            name="industry"
            required
            className="w-full rounded-none border border-[var(--line)] bg-[var(--background)] px-4 py-3 text-sm text-navy outline-none transition-colors focus:border-gold dark:text-white"
            defaultValue=""
          >
            <option value="" disabled>
              Select an industry
            </option>
            {INDUSTRY_LIST.map((industry) => (
              <option key={industry} value={industry}>
                {industry}
              </option>
            ))}
          </select>
        </div>
        <div className="md:col-span-2">
          <label className="mb-2 block text-[11px] font-medium tracking-[0.2em] text-[var(--muted)] uppercase">
            Message
          </label>
          <textarea
            name="message"
            required
            rows={6}
            className="w-full resize-y rounded-none border border-[var(--line)] bg-[var(--background)] px-4 py-3 text-sm text-navy outline-none transition-colors focus:border-gold dark:text-white"
            placeholder="Briefly describe your objectives in Venezuela."
          />
        </div>
      </div>
      <div className="mt-8">
        <Button type="submit">Send Message</Button>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block text-[11px] font-medium tracking-[0.2em] text-[var(--muted)] uppercase">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-none border border-[var(--line)] bg-[var(--background)] px-4 py-3 text-sm text-navy outline-none transition-colors focus:border-gold dark:text-white"
      />
    </div>
  );
}
