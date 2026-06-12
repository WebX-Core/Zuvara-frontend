"use client";

import Button from "../common-ui/Button";
import SectionIntro, { sectionIntroSpacing } from "../common-ui/SectionIntro";
import { useSection } from "@/app/providers/SectionProvider";
import { cn } from "@/lib/utils";
import { useSubmitContact } from "@/hooks/useContact";
import { useState } from "react";
import type { ContactFormInput } from "@/type/contactType";

const ContactSection = () => {
  const { activeSection } = useSection();
  const isPersonal = activeSection === "personal";
  const { mutate, isPending, isSuccess, isError } = useSubmitContact();

  const [formData, setFormData] = useState<ContactFormInput>({
    fullName: "",
    email: "",
    message: "",
    phone: "",
    location: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Send all fields to API including location
    mutate(
      {
        fullName: formData.fullName,
        email: formData.email,
        message: formData.message,
        phone: formData.phone,
        location: formData.location,
        status: "pending", // Default status
      },
      {
        onSuccess: () => {
          // Reset form on success
          setFormData({
            fullName: "",
            email: "",
            message: "",
            phone: "",
            location: "",
          });
        },
      }
    );
  };

  return (
    <section className={cn("container mx-auto h-auto max-w-7xl px-0 lg:px-6")}>
      <div>
        <div className={sectionIntroSpacing}>
          <SectionIntro
            className="max-w-3xl py-2 sm:py-4"
            title={
              <>
                Let&apos;s
                <span className="ml-2 font-light italic">Talk</span>
              </>
            }
            description="Our team will get back to you as soon as possible."
            titleClassName={cn(
              "text-[clamp(2rem,7vw,4rem)] font-semibold leading-[0.98]",
              isPersonal ? "text-personalCare" : "text-foreground",
            )}
            descriptionClassName="text-sm font-medium leading-relaxed md:text-base"
          />
        </div>

        <div className="w-full flex flex-col gap-4">
          <div className="w-full">
            {isSuccess && (
              <div className="mb-4 rounded-lg bg-green-100 p-4 text-green-800">
                <p className="text-sm font-medium">
                  Thank you! Your message has been sent successfully. We&apos;ll get back to you soon.
                </p>
              </div>
            )}

            {isError && (
              <div className="mb-4 rounded-lg bg-red-100 p-4 text-red-800">
                <p className="text-sm font-medium">
                  Oops! Something went wrong. Please try again later.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="w-full">
              <div className="grid w-full gap-4 lg:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="fullName" className="text-sm font-medium">
                    Name*
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    placeholder="Your Name"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={cn(
                      "w-full rounded-lg p-3 text-base focus:outline-none placeholder:text-foreground/50 md:text-lg",
                      isPersonal ? "bg-zinc-200" : "bg-foreground/10",
                    )}
                    required
                    disabled={isPending}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Phone*
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    className={cn(
                      "w-full rounded-lg p-3 text-base focus:outline-none placeholder:text-foreground/50 md:text-lg",
                      isPersonal ? "bg-zinc-200" : "bg-foreground/10",
                    )}
                    required
                    disabled={isPending}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="location" className="text-sm font-medium">
                    Location*
                  </label>
                  <input
                    id="location"
                    name="location"
                    type="text"
                    placeholder="Your location"
                    value={formData.location}
                    onChange={handleChange}
                    className={cn(
                      "w-full rounded-lg p-3 text-base focus:outline-none placeholder:text-foreground/50 md:text-lg",
                      isPersonal ? "bg-zinc-200" : "bg-foreground/10",
                    )}
                    required
                    disabled={isPending}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email*
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your email address"
                    value={formData.email}
                    onChange={handleChange}
                    className={cn(
                      "w-full rounded-lg p-3 text-base focus:outline-none placeholder:text-foreground/50 md:text-lg",
                      isPersonal ? "bg-zinc-200" : "bg-foreground/10",
                    )}
                    required
                    disabled={isPending}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2 mt-4">
                <label htmlFor="message" className="text-sm font-medium">
                  Message*
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell us, How can we help you..."
                  value={formData.message}
                  onChange={handleChange}
                  className={cn(
                    "h-28 w-full resize-none rounded-lg p-3 text-base focus:outline-none placeholder:text-foreground/50 md:text-lg lg:h-24",
                    isPersonal ? "bg-zinc-200" : "bg-foreground/10",
                  )}
                  required
                  disabled={isPending}
                />
              </div>

              <div className="mt-4 flex justify-end">
                <Button
                  content={isPending ? "Sending..." : "Submit"}
                  type="submit"
                  buttonClassName="w-full lg:w-fit"
                  className="px-6 lg:px-10 text-white! hover:bg-white hover:text-zinc-800! disabled:opacity-50 disabled:cursor-not-allowed"
                  for={isPersonal ? "personalCare" : "babyCare"}
                  disabled={isPending}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
