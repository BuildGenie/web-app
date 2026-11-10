"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, CheckCircle2, Mail } from "lucide-react";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [service, setService] = useState("Not sure yet");
  const [stage, setStage] = useState("Early idea");
  const [message, setMessage] = useState("");
  const [prepared, setPrepared] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const body = [
      "Name: " + name,
      "Email: " + email,
      "Company / product: " + (company || "Not provided"),
      "Business stage: " + stage,
      "Area of support: " + service,
      "",
      "Project brief:",
      message,
    ].join("\n");

    const subject = company
      ? "Project enquiry — " + company
      : "Project enquiry — BuildGenie Labs";
    const mailto =
      "mailto:hello@buildgenielabs.com?subject=" +
      encodeURIComponent(subject) +
      "&body=" +
      encodeURIComponent(body);

    setPrepared(true);
    window.location.href = mailto;
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form-heading">
        <span>PROJECT ENQUIRY</span>
        <p>Share a little context. We&apos;ll use it to prepare an email you can review and send.</p>
      </div>

      <div className="contact-form-grid">
        <label>
          Your name
          <input required value={name} onChange={(event) => setName(event.target.value)} placeholder="Full name" autoComplete="name" />
        </label>
        <label>
          Work email
          <input required type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="you@company.com" autoComplete="email" />
        </label>
        <label>
          Company or product
          <input value={company} onChange={(event) => setCompany(event.target.value)} placeholder="What are you building?" autoComplete="organization" />
        </label>
        <label>
          What do you need help with?
          <select value={service} onChange={(event) => setService(event.target.value)}>
            <option>Not sure yet</option>
            <option>Idea validation</option>
            <option>Business or go-to-market strategy</option>
            <option>Marketing and growth</option>
            <option>Brand, content or social media</option>
            <option>Technology or product development</option>
            <option>Customer support</option>
            <option>Specialist execution</option>
          </select>
        </label>
        <label className="contact-form-full">
          What stage are you at?
          <select value={stage} onChange={(event) => setStage(event.target.value)}>
            <option>Early idea</option>
            <option>Validating a problem or solution</option>
            <option>Building a product</option>
            <option>Preparing to launch</option>
            <option>Live with early users</option>
            <option>Growing an existing business</option>
            <option>Established business / new initiative</option>
          </select>
        </label>
        <label className="contact-form-full">
          Tell us about the challenge
          <textarea required rows={5} value={message} onChange={(event) => setMessage(event.target.value)} placeholder="What are you working towards, what have you tried, and what would progress look like?" />
        </label>
      </div>

      <div className="contact-form-bottom">
        <p><Mail size={15} /> This opens your email app. Your message is not sent automatically.</p>
        <button className="button button-orange" type="submit">
          Prepare email <ArrowUpRight size={17} />
        </button>
      </div>

      {prepared && (
        <p className="contact-form-status" role="status">
          <CheckCircle2 size={16} /> Your email app should open with the brief ready to review and send. If it doesn&apos;t, email hello@buildgenielabs.com.
        </p>
      )}
    </form>
  );
}
