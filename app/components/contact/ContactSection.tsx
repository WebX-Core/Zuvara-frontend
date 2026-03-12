"use client";

import Button from "../common-ui/Button";
import { useSection } from "@/app/providers/SectionProvider";
import { cn } from "@/lib/utils";

const ContactSection = () => {
  const { activeSection } = useSection();

  const isPersonal = activeSection === "personal";

  return (
    <section className={cn("h-auto container mx-auto px-4 lg:px-6 max-w-7xl")}>
      <div>
        <div className="mb-4">
          <div className="max-w-3xl py-4">
            <h2
              className={cn(
                "mt-4 text-2xl lg:text-5xl font-semibold leading-[0.98]",
                isPersonal ? "text-personalCare" : "text-foreground",
              )}
            >
              Let&apos;s
              <span className="ml-2 font-light italic">Talk</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed font-medium md:text-base">
              Our team will get back to you as soon as possible.
            </p>
          </div>
        </div>

        <div className="w-full flex flex-col gap-4">
          <div className="w-full">
            <form action="" className="w-full">
              <div className="w-full lg:grid lg:grid-cols-2 gap-4 space-y-4 lg:space-y-0">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name">Name*</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your Name"
                    className={cn(
                      "w-full p-2 rounded-lg text-lg focus:outline-none placeholder:text-foreground/50",
                      isPersonal ? "bg-zinc-200" : "bg-foreground/10",
                    )}
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone">Phone*</label>
                  <input
                    id="phone"
                    type="text"
                    placeholder="Your phone number"
                    className={cn(
                      "w-full p-2 rounded-lg text-lg focus:outline-none placeholder:text-foreground/50",
                      isPersonal ? "bg-zinc-200" : "bg-foreground/10",
                    )}
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="address">Address*</label>
                  <input
                    id="address"
                    type="text"
                    placeholder="Your address"
                    className={cn(
                      "w-full p-2 rounded-lg text-lg focus:outline-none placeholder:text-foreground/50",
                      isPersonal ? "bg-zinc-200" : "bg-foreground/10",
                    )}
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email">Email*</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Your email address"
                    className={cn(
                      "w-full p-2 rounded-lg text-lg focus:outline-none placeholder:text-foreground/50",
                      isPersonal ? "bg-zinc-200" : "bg-foreground/10",
                    )}
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2 mt-4">
                <label htmlFor="message">Message*</label>
                <textarea
                  id="message"
                  placeholder="Tell us, How can we help you..."
                  className={cn(
                    "w-full lg:h-24 resize-none p-2 rounded-lg text-lg focus:outline-none placeholder:text-foreground/50",
                    isPersonal ? "bg-zinc-200" : "bg-foreground/10",
                  )}
                  required
                />
              </div>

              <div className="mt-4 flex justify-end">
                <Button
                  content="Submit"
                  buttonClassName="w-full lg:w-fit"
                  className="px-6 lg:px-10 text-white! hover:bg-[#45685e]/90 "
                  for={isPersonal ? "personalCare" : "babyCare"}
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
