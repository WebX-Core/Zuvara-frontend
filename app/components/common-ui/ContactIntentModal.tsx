"use client";

import { useEffect, useMemo, useState } from "react";
import { X, Loader2, CheckCircle } from "lucide-react";
import { useSubmitContact } from "@/hooks/useContact";
import { motion, AnimatePresence } from "framer-motion";

type ContactIntent = "inquiry" | "distributor";

type ContactIntentModalProps = {
  intent: ContactIntent;
  onClose: () => void;
  productName?: string;
  productId?: string;
  themeColor?: string;
};

const intentCopy = {
  inquiry: {
    eyebrow: "Product Inquiry",
    title: "Ask about this product",
    description:
      "Share a few details and our team will get back to you about pricing, availability, or product information.",
    submitLabel: "Send Inquiry",
    successTitle: "Inquiry Sent!",
    successMessage: "We'll get back to you shortly.",
  },
  distributor: {
    eyebrow: "Distributor Request",
    title: "Become a distributor",
    description:
      "Tell us about your business and location. Our team will follow up with the next steps.",
    submitLabel: "Send Request",
    successTitle: "Request Sent!",
    successMessage: "Our team will contact you soon.",
  },
} as const;

export default function ContactIntentModal({
  intent,
  onClose,
  productName,
  productId,
  themeColor = "var(--baby-accent)",
}: ContactIntentModalProps) {
  const copy = intentCopy[intent];
  const { mutate: submitContact, isPending, isSuccess, isError, error } = useSubmitContact();

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

  // Auto-close after successful submission
  useEffect(() => {
    if (isSuccess) {
      const timer = setTimeout(() => {
        onClose();
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [isSuccess, onClose]);

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

    submitContact({
      fullName: formState.name,
      email: formState.email,
      phone: formState.phone,
      location: formState.address,
      message: formState.message,
      ...(productId && { productId }),
    });
  };

  return (
    <div className="fixed inset-0 z-120 flex items-center justify-center p-4">
      {/* Success Toast - Top Right */}
      <AnimatePresence>
        {isSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -20, x: 20 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, y: -20, x: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed right-4 top-4 z-130 flex items-start gap-3 rounded-2xl border border-green-100 bg-white p-4 shadow-[0_20px_50px_rgba(0,0,0,0.15)] sm:right-6 sm:top-6 sm:p-5"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-100">
              <CheckCircle size={22} className="text-green-600" />
            </div>
            <div className="pr-2">
              <p className="text-sm font-semibold text-zinc-900">
                {copy.successTitle}
              </p>
              <p className="mt-0.5 text-sm text-zinc-500">
                {copy.successMessage}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        aria-label="Close modal overlay"
        className="absolute inset-0 bg-black/45 backdrop-blur-[2px]"
        onClick={onClose}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 10 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative z-10 w-full max-w-2xl overflow-hidden rounded-[2rem] bg-white shadow-[0_30px_80px_rgba(0,0,0,0.2)]"
      >
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
                disabled={isPending || isSuccess}
                className="rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm outline-none transition focus:border-zinc-400 focus:bg-white disabled:cursor-not-allowed disabled:opacity-60"
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className="text-sm font-medium text-zinc-700">
                Phone*
              </span>
              <input
                type="text"
                required
                value={formState.phone}
                onChange={updateField("phone")}
                placeholder="Your phone number"
                disabled={isPending || isSuccess}
                className="rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm outline-none transition focus:border-zinc-400 focus:bg-white disabled:cursor-not-allowed disabled:opacity-60"
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className="text-sm font-medium text-zinc-700">
                Email*
              </span>
              <input
                type="email"
                required
                value={formState.email}
                onChange={updateField("email")}
                placeholder="Your email"
                disabled={isPending || isSuccess}
                className="rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm outline-none transition focus:border-zinc-400 focus:bg-white disabled:cursor-not-allowed disabled:opacity-60"
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
                disabled={isPending || isSuccess}
                className="rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm outline-none transition focus:border-zinc-400 focus:bg-white disabled:cursor-not-allowed disabled:opacity-60"
              />
            </label>
          </div>

          <label className="mt-4 flex flex-col gap-2">
            <span className="text-sm font-medium text-zinc-700">
              Message*
            </span>
            <textarea
              required
              value={formState.message}
              onChange={updateField("message")}
              placeholder="Tell us how we can help..."
              disabled={isPending || isSuccess}
              className="min-h-32 resize-none rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm outline-none transition focus:border-zinc-400 focus:bg-white disabled:cursor-not-allowed disabled:opacity-60"
            />
          </label>

          {isError && (
            <p className="mt-4 text-sm text-red-600">
              {(error as Error)?.message ||
                "Something went wrong. Please try again."}
            </p>
          )}

          <div className="mt-6 flex justify-end">
            <button
              type="submit"
              disabled={isPending || isSuccess}
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
              style={{ backgroundColor: themeColor }}
            >
              {isPending && <Loader2 size={16} className="animate-spin" />}
              {isPending ? "Sending..." : isSuccess ? "Sent!" : copy.submitLabel}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
