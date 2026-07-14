"use client";

import { FormEvent, useState } from "react";
import { profile } from "../data/portfolio";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    if (data.get("website")) return;
    setStatus("loading");
    const subject = String(data.get("subject") || "Portfolio enquiry");
    const body = [
      `Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      `Organisation: ${data.get("organisation") || "Not provided"}`,
      "",
      String(data.get("message") || ""),
    ].join("\n");
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.setTimeout(() => setStatus("success"), 350);
  }

  return (
    <form className="contact-form" onSubmit={submit} aria-label="Contact form">
      <div className="form-row">
        <label><span>Name</span><input name="name" autoComplete="name" required placeholder="Your name" /></label>
        <label><span>Email</span><input type="email" name="email" autoComplete="email" required placeholder="you@company.com" /></label>
      </div>
      <div className="form-row">
        <label><span>Organisation</span><input name="organisation" autoComplete="organization" placeholder="Company or team" /></label>
        <label><span>Subject</span><input name="subject" required placeholder="Role, project or collaboration" /></label>
      </div>
      <label><span>Message</span><textarea name="message" required rows={5} placeholder="Tell me what you are building or hiring for." /></label>
      <label className="honeypot" aria-hidden="true">Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
      <div className="form-footer">
        <p aria-live="polite">{status === "success" ? "Your email draft is ready to send." : "This opens your email app - no data is stored."}</p>
        <button className="button button-solid" type="submit" disabled={status === "loading"}>
          {status === "loading" ? "Opening…" : "Start a conversation"} <span aria-hidden="true">↗</span>
        </button>
      </div>
    </form>
  );
}
