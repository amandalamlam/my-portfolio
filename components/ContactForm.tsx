"use client";

import { FormEvent, useState } from "react";
import { site } from "@/data/site";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!email) {
      setStatus("error");
      setErrorMessage("Please enter your email so I can reply to you.");
      return;
    }

    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${site.email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: name || "Website visitor",
          email,
          message: message || "(No message provided)",
          _subject: `Portfolio inquiry from ${name || email}`,
          _template: "table",
          _replyto: email,
        }),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try WhatsApp, or email me directly.");
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <label className="contact-form__field">
        <span>Name</span>
        <input type="text" name="name" autoComplete="name" />
      </label>

      <label className="contact-form__field">
        <span>
          Email <abbr title="required">*</abbr>
        </span>
        <input type="email" name="email" autoComplete="email" required />
      </label>

      <label className="contact-form__field">
        <span>Message</span>
        <textarea name="message" rows={6} />
      </label>

      <div className="contact-form__footer">
        {status === "success" ? (
          <p className="contact-form__status contact-form__status--ok" role="status">
            Thanks — your message was sent. I will reply by email.
          </p>
        ) : null}
        {status === "error" ? (
          <p className="contact-form__status contact-form__status--error" role="alert">
            {errorMessage}
          </p>
        ) : (
          <span className="contact-form__spacer" aria-hidden="true" />
        )}
        <button className="contact-form__submit" type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send"}
        </button>
      </div>
    </form>
  );
}
