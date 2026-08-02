"use client";

import { FormEvent, useState } from "react";
import { site } from "@/lib/site";

type FormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = encodeURIComponent(`Website enquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone || "-"}\n\nMessage:\n${form.message}`,
    );
    const mailto = `mailto:${site.emails[0]}?subject=${subject}&body=${body}`;

    window.location.href = mailto;
    setSubmitted(true);
    setForm(initialState);
  };

  return (
    <div className="contact-form">
      {submitted ? (
        <p className="contact-form-success">
          Thanks for reaching out. Your email client should open so you can send the
          message to {site.name}.
        </p>
      ) : null}

      <form onSubmit={onSubmit} noValidate={false}>
        <div className="contact-field">
          <label htmlFor="contact-name">
            Name <span className="req">*</span>
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            value={form.name}
            onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
          />
        </div>

        <div className="contact-field">
          <label htmlFor="contact-email">
            Email <span className="req">*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            value={form.email}
            onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
          />
        </div>

        <div className="contact-field">
          <label htmlFor="contact-phone">Phone</label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={(event) => setForm((prev) => ({ ...prev, phone: event.target.value }))}
          />
        </div>

        <div className="contact-field">
          <label htmlFor="contact-message">
            Message <span className="req">*</span>
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            rows={5}
            value={form.message}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, message: event.target.value }))
            }
          />
        </div>

        <button type="submit" className="contact-submit">
          Submit
        </button>
      </form>
    </div>
  );
}
