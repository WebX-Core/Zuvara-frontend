"use client";

import { useEffect, useMemo, useState } from "react";
import { X } from "lucide-react";

type ContactIntent = "inquiry" | "distributor";

type ContactIntentModalProps = {
  intent: ContactIntent;
  onClose: () => void;
  productName?: string;
  themeColor?: string;
};

const intentCopy = {
  inquiry: {
    eyebrow: "Product Inquiry",
    title: "Ask about this product",
    description:
      "Share a few details and our team will get back to you about pricing, availability, or product information.",
    submitLabel: "Send Inquiry",
  },
  distributor: {
    eyebrow: "Distributor Request",
    title: "Become a distributor",
    description:
      "Tell us about your business and location. Our team will follow up with the next steps.",
    submitLabel: "Send Request",
  },
} as const;

export default function ContactIntentModal({
  intent,
  onClose,
  productName,
  themeColor = "var(--baby-accent)",
}: ContactIntentModalProps) {
  const copy = intentCopy[intent];
  const initialMessage = useMemo(() => {
    if (intent === "inquiry" && productName) {
      return `I would like to know more about ${productName}.`;
    }

    if (intent === "distributor") {
      return "I am interested in becoming a Zuvara distributor.";
    }

    return "";
  }, [intent, productName]);

  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    message: initialMessage,
  });

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  const updateField =
    (field: keyof typeof formState) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormState((current) => ({
        ...current,
        [field]: event.target.value,
      }));
    };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-120 flex items-center justify-center p-4">
      <button
        type="button"
        aria-label="Close modal overlay"
        className="absolute inset-0 bg-black/45 backdrop-blur-[2px]"
        onClick={onClose}
      />

      <div className="relative z-10 w-full max-w-2xl overflow-hidden rounded-[2rem] bg-white shadow-[0_30px_80px_rgba(0,0,0,0.2)]">
        <div
          className="flex items-start justify-between gap-4 px-6 pb-4 pt-6 md:px-8"
          style={{ backgroundColor: `${themeColor}12` }}
        >
          <div>
            <p
              className="text-[11px] font-semibold uppercase tracking-[0.22em]"
              style={{ color: themeColor }}
            >
              {copy.eyebrow}
            </p>
            <h3 className="mt-2 text-2xl font-semibold text-zinc-900">
              {copy.title}
            </h3>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-zinc-600">
              {copy.description}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 text-zinc-500 transition hover:bg-white"
            aria-label="Close modal"
          >
            <X size={18} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="px-6 py-6 md:px-8">
          <div className="grid gap-4 md:grid-cols-2">
            <label className="flex flex-col gap-2">
              <span className="text-sm font-medium text-zinc-700">Name*</span>
              <input
                type="text"
                required
                value={formState.name}
                onChange={updateField("name")}
                placeholder="Your name"
                className="rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm outline-none transition focus:border-zinc-400 focus:bg-white"
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className="text-sm font-medium text-zinc-700">Phone*</span>
              <input
                type="text"
                required
                value={formState.phone}
                onChange={updateField("phone")}
                placeholder="Your phone number"
                className="rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm outline-none transition focus:border-zinc-400 focus:bg-white"
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className="text-sm font-medium text-zinc-700">Email*</span>
              <input
                type="email"
                required
                value={formState.email}
                onChange={updateField("email")}
                placeholder="Your email"
                className="rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm outline-none transition focus:border-zinc-400 focus:bg-white"
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className="text-sm font-medium text-zinc-700">
                Address*
              </span>
              <input
                type="text"
                required
                value={formState.address}
                onChange={updateField("address")}
                placeholder="Your address"
                className="rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm outline-none transition focus:border-zinc-400 focus:bg-white"
              />
            </label>
          </div>

          <label className="mt-4 flex flex-col gap-2">
            <span className="text-sm font-medium text-zinc-700">Message*</span>
            <textarea
              required
              value={formState.message}
              onChange={updateField("message")}
              placeholder="Tell us how we can help..."
              className="min-h-32 resize-none rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm outline-none transition focus:border-zinc-400 focus:bg-white"
            />
          </label>

          <div className="mt-6 flex justify-end">
            <button
              type="submit"
              className="rounded-full px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              style={{ backgroundColor: themeColor }}
            >
              {copy.submitLabel}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
