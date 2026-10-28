"use client";

import emailjs from "@emailjs/browser";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type FormEvent,
  type ReactNode,
} from "react";

const EMAILJS_PUBLIC_KEY = "HoPvDxECEXbLxyWUG";
const EMAILJS_SERVICE_ID = "service_ob5ftyl";
const EMAILJS_TEMPLATE_ID = "template_qc00wqr";

// Cloudinary configuration
const CLOUDINARY_CLOUD_NAME = "dpa9la8oi";
const CLOUDINARY_UPLOAD_PRESET = "resume";

const MAX_CV_BYTES = 5 * 1024 * 1024;
const CV_EXTENSIONS = /\.(pdf|doc|docx)$/i;

const INPUT_CLASS =
  "w-full rounded-xl border border-[#e9e3ed] bg-white px-4 py-3 text-sm outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100";

/* ------------------------------------------------------------------ */
/* Context so any <ApplyButton> on the page can open the modal         */
/* ------------------------------------------------------------------ */

const ApplicationContext = createContext<{ open: () => void }>({
  open: () => {},
});

export function ApplyButton({
  className,
  children,
}: {
  className: string;
  children: ReactNode;
}) {
  const { open } = useContext(ApplicationContext);

  return (
    <button type="button" data-open-application className={className} onClick={open}>
      {children}
    </button>
  );
}

/* ------------------------------------------------------------------ */
/* Provider + modal                                                    */
/* ------------------------------------------------------------------ */

interface ApplicationProviderProps {
  /** Value of the hidden "position" field */
  position: string;
  /** Placeholder for the cover letter textarea */
  coverLetterPlaceholder: string;
  children: ReactNode;
}

type MessageState = {
  text: string;
  type: "success" | "error";
  visible: boolean;
};

export function ApplicationProvider({
  position,
  coverLetterPlaceholder,
  children,
}: ApplicationProviderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [submitLabel, setSubmitLabel] = useState<string | null>(null);
  const [message, setMessage] = useState<MessageState>({
    text: "",
    type: "error",
    visible: false,
  });

  const formRef = useRef<HTMLFormElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const cvRef = useRef<HTMLInputElement>(null);
  const previousFocus = useRef<Element | null>(null);
  const closeTimer = useRef<number | undefined>(undefined);

  const submitting = submitLabel !== null;

  const openModal = useCallback(() => {
    previousFocus.current = document.activeElement;
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    if (previousFocus.current instanceof HTMLElement) {
      previousFocus.current.focus();
    }
  }, []);

  const showMessage = (text: string, type: "success" | "error") => {
    setMessage({ text, type, visible: true });
  };

  // EmailJS init (once)
  useEffect(() => {
    emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
  }, []);

  // Focus first field + lock body scroll while open
  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isOpen);
    if (isOpen) {
      nameRef.current?.focus();
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        closeModal();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen, closeModal]);

  // Clear any pending auto-close timer on unmount
  useEffect(() => {
    return () => window.clearTimeout(closeTimer.current);
  }, []);

  const field = (form: HTMLFormElement, name: string) =>
    (form.elements.namedItem(name) as HTMLInputElement | HTMLTextAreaElement).value;

  const handleCvChange = () => {
    const file = cvRef.current?.files?.[0];
    if (!file) return;
    if (!CV_EXTENSIONS.test(file.name) || file.size > MAX_CV_BYTES) {
      alert("Choose a PDF, DOC, or DOCX file no larger than 5 MB.");
      if (cvRef.current) cvRef.current.value = "";
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    const cv = cvRef.current?.files?.[0];
    if (!cv || !CV_EXTENSIONS.test(cv.name) || cv.size > MAX_CV_BYTES) {
      showMessage("Please upload a PDF, DOC, or DOCX CV no larger than 5 MB.", "error");
      return;
    }

    if (
      [EMAILJS_PUBLIC_KEY, EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID].some((value) =>
        value.startsWith("YOUR_EMAILJS_")
      )
    ) {
      showMessage(
        "EmailJS is not configured yet. Add your Public Key, Service ID, and Template ID in this page's script.",
        "error"
      );
      return;
    }

    setSubmitLabel("Uploading CV…");
    setMessage((current) => ({ ...current, visible: false }));

    try {
      // 1. Upload CV to Cloudinary first
      const formData = new FormData();
      formData.append("file", cv);
      formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

      const uploadRes = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/upload`,
        { method: "POST", body: formData }
      );

      const uploadData = await uploadRes.json();
      if (!uploadRes.ok) {
        throw new Error(uploadData.error?.message || "Cloudinary upload failed.");
      }

      const cvUrl: string = uploadData.secure_url;

      setSubmitLabel("Sending application…");

      // 2. Send the details (with the lightweight CV link) through EmailJS
      const templateParams = {
        position: field(form, "position"),
        applicant_name: field(form, "applicant_name"),
        applicant_email: field(form, "applicant_email"),
        applicant_phone: field(form, "applicant_phone"),
        applicant_location: field(form, "applicant_location"),
        cover_letter: field(form, "cover_letter"),
        applicant_cv: cvUrl,
      };

      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams);

      showMessage("Thank you. Your application has been submitted successfully.", "success");
      form.reset();
      closeTimer.current = window.setTimeout(() => {
        closeModal();
        setMessage((current) => ({ ...current, visible: false }));
      }, 2200);
    } catch (error) {
      console.error("Submission error:", error);
      showMessage(
        (error as { message?: string })?.message ||
          "Failed to submit application. Please try again.",
        "error"
      );
    } finally {
      setSubmitLabel(null);
    }
  };

  const messageClasses = message.visible
    ? message.type === "success"
      ? "bg-emerald-50 text-emerald-800"
      : "bg-red-50 text-red-800"
    : "hidden";

  return (
    <ApplicationContext.Provider value={{ open: openModal }}>
      {children}

      {/* Application Modal */}
      <div
        id="application-modal"
        className={`fixed inset-0 z-100 ${
          isOpen ? "flex" : "hidden"
        } items-center justify-center bg-[#191321]/70 p-4 backdrop-blur-sm`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="application-modal-title"
        aria-hidden={!isOpen}
        onClick={(event) => {
          if (event.target === event.currentTarget) closeModal();
        }}
      >
        <div className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl sm:p-8">
          <button
            type="button"
            id="close-application-modal"
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full text-2xl text-[#716a7c] transition hover:bg-[#f5f0f7]"
            aria-label="Close application form"
            onClick={closeModal}
          >
            &times;
          </button>

          <div className="mb-7 pr-10">
            <h2
              id="application-modal-title"
              className="brand-font mt-3 text-2xl font-extrabold tracking-tight sm:text-3xl"
            >
              Submit your application
            </h2>
          </div>

          <form
            ref={formRef}
            id="application-form"
            className="space-y-5"
            method="POST"
            encType="multipart/form-data"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="position" value={position} />

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="applicant-name" className="mb-2 block text-sm font-semibold">
                  Full name *
                </label>
                <input
                  ref={nameRef}
                  id="applicant-name"
                  name="applicant_name"
                  type="text"
                  autoComplete="name"
                  required
                  className={INPUT_CLASS}
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label htmlFor="applicant-email" className="mb-2 block text-sm font-semibold">
                  Email address *
                </label>
                <input
                  id="applicant-email"
                  name="applicant_email"
                  type="email"
                  autoComplete="email"
                  required
                  className={INPUT_CLASS}
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="applicant-phone" className="mb-2 block text-sm font-semibold">
                  Phone number *
                </label>
                <input
                  id="applicant-phone"
                  name="applicant_phone"
                  type="tel"
                  autoComplete="tel"
                  required
                  className={INPUT_CLASS}
                  placeholder="Your phone number"
                />
              </div>
              <div>
                <label htmlFor="applicant-location" className="mb-2 block text-sm font-semibold">
                  Current location *
                </label>
                <input
                  id="applicant-location"
                  name="applicant_location"
                  type="text"
                  required
                  className={INPUT_CLASS}
                  placeholder="City, country"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="applicant-cover-letter"
                className="mb-2 block text-sm font-semibold"
              >
                Why are you a good fit for this role? *
              </label>
              <textarea
                id="applicant-cover-letter"
                name="cover_letter"
                rows={4}
                maxLength={5000}
                required
                className="w-full resize-y rounded-xl border border-[#e9e3ed] bg-white px-4 py-3 text-sm outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
                placeholder={coverLetterPlaceholder}
              ></textarea>
            </div>

            <div>
              <label htmlFor="applicant-cv" className="mb-2 block text-sm font-semibold">
                Upload CV / Resume *
              </label>
              <input
                ref={cvRef}
                id="applicant-cv"
                name="applicant_cv"
                type="file"
                accept=".pdf,.doc,.docx"
                required
                onChange={handleCvChange}
                className="block w-full rounded-xl border border-[#e9e3ed] bg-white text-sm text-[#5f566a] file:mr-4 file:border-0 file:bg-amber-100 file:px-4 file:py-3 file:font-semibold file:text-amber-900 hover:file:bg-amber-200"
              />
              <p className="mt-2 text-xs leading-5 text-[#716a7c]">
                PDF, DOC, or DOCX. Maximum file size: 5 MB.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <input
                id="applicant-consent"
                name="privacy_consent"
                type="checkbox"
                required
                className="mt-1 h-4 w-4 accent-amber-600"
              />
              <label htmlFor="applicant-consent" className="text-xs leading-5 text-[#716a7c]">
                I consent to my information being used to process this job application in
                accordance with the{" "}
                <a
                  href="/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-amber-800 underline"
                >
                  Privacy Policy
                </a>
                .
              </label>
            </div>

            <p
              id="application-form-message"
              className={`rounded-xl p-3 text-sm ${messageClasses}`}
              role="status"
              aria-live="polite"
            >
              {message.text}
            </p>

            <div className="flex flex-col-reverse gap-3 border-t border-[#eee9f1] pt-5 sm:flex-row sm:justify-end">
              <button
                type="button"
                id="cancel-application"
                className="min-h-12 rounded-xl border border-[#e9e3ed] px-5 text-sm font-bold text-[#5f566a] transition hover:bg-[#faf7fb]"
                onClick={closeModal}
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={submitting}
                className="apply-button min-h-12 w-full sm:w-auto"
              >
                {submitLabel ?? "Submit application"}
                {!submitting && (
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path d="M7 17 17 7M8 7h9v9" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </ApplicationContext.Provider>
  );
}
