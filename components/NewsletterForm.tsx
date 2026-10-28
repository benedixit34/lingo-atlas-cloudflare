"use client";

import { useRef, useState, type FormEvent } from "react";

type MessageType = "error" | "success" | "info";

const MESSAGE_COLORS: Record<MessageType, string> = {
  error: "text-red-300",
  success: "text-green-300",
  info: "text-neutral-200",
};

export default function NewsletterForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState<{ text: string; type: MessageType } | null>(null);

  const showMessage = (text: string, type: MessageType = "info") => {
    setMessage({ text, type });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;

    if (!form.reportValidity()) {
      return;
    }

    const email = emailRef.current?.value.trim() ?? "";

    if (!email) {
      showMessage("Please enter your email address.", "error");
      emailRef.current?.focus();
      return;
    }

    const formData = new FormData(form);
    formData.set("email", email);

    setSubmitting(true);
    showMessage("Please wait while we process your subscription.");

    try {
      const response = await fetch(form.action, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      let result;

      try {
        result = await response.json();
      } catch {
        throw new Error("We received an unexpected response. Please try again.");
      }

      if (!response.ok || result.success !== true) {
        throw new Error(
          response.ok
            ? result.message || "Your subscription could not be completed. Please try again."
            : "The subscription service is temporarily unavailable. Please try again later."
        );
      }

      form.reset();

      showMessage("Thank you for subscribing! We'll keep you updated.", "success");
    } catch (error) {
      showMessage(
        error instanceof TypeError
          ? "Unable to connect. Please check your internet connection and try again."
          : (error as Error).message || "Something went wrong. Please try again.",
        "error"
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-lg">
      <form
        ref={formRef}
        id="newsletter-form"
        action="https://api.web3forms.com/submit"
        method="POST"
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 rounded-xl bg-white p-2 shadow-2xl sm:flex-row"
      >
        <input type="hidden" name="access_key" value="38b83248-deff-45a4-b9d4-91e7d1c00bed" />

        <input type="hidden" name="subject" value="New Lingo Atlas Newsletter Subscriber" />

        {/* Honeypot for basic bot filtering */}
        <input
          type="checkbox"
          name="botcheck"
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />

        <label htmlFor="email" className="sr-only">
          Email address
        </label>

        <input
          ref={emailRef}
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email address"
          autoComplete="email"
          inputMode="email"
          maxLength={254}
          required
          className="newsletter-input min-w-0 flex-1 rounded-lg px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-500 focus:outline-none sm:py-3.5"
        />

        <button
          type="submit"
          id="submit-btn"
          disabled={submitting}
          className="subscribe-button rounded-lg bg-amber-500 px-6 py-3 text-sm font-semibold text-neutral-950 hover:bg-amber-400 sm:py-3.5"
        >
          {submitting ? "Subscribing..." : "Subscribe"}
        </button>
      </form>

      <p
        id="form-message"
        className={`form-message min-h-6 text-center text-sm font-medium lg:text-left${
          message ? ` mt-4 ${MESSAGE_COLORS[message.type]}` : ""
        }`}
        role="status"
        aria-live="polite"
        aria-atomic="true"
      >
        {message?.text}
      </p>

      <p className="text-center text-xs text-neutral-300 lg:text-left">
        Be the first to hear about our launch. No unnecessary emails.
      </p>
    </div>
  );
}
