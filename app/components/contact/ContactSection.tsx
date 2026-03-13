"use client";

import Button from "../common-ui/Button";
import { useSection } from "@/app/providers/SectionProvider";
import { cn } from "@/lib/utils";

const ContactSection = () => {
  const { activeSection } = useSection();

  const isPersonal = activeSection === "personal";

  return (
    <section className={cn("container mx-auto h-auto max-w-7xl px-0 lg:px-6")}>
      <div>
        <div className="mb-4">
          <div className="max-w-3xl py-2 sm:py-4">
            <h2
              className={cn(
                "mt-2 text-[clamp(2rem,7vw,4rem)] font-semibold leading-[0.98]",
                isPersonal ? "text-personalCare" : "text-foreground",
              )}
            >
              Let&apos;s
              <span className="ml-2 font-light italic">Talk</span>
            </h2>
            <p className="mt-4 max-w-2xl text-sm font-medium leading-relaxed md:text-base">
              Our team will get back to you as soon as possible.
            </p>
          </div>
        </div>

        <div className="w-full flex flex-col gap-4">
          <div className="w-full">
            <form action="" className="w-full">
              <div className="grid w-full gap-4 lg:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name*
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your Name"
                    className={cn(
                      "w-full rounded-lg p-3 text-base focus:outline-none placeholder:text-foreground/50 md:text-lg",
                      isPersonal ? "bg-zinc-200" : "bg-foreground/10",
                    )}
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Phone*
                  </label>
                  <input
                    id="phone"
                    type="text"
                    placeholder="Your phone number"
                    className={cn(
                      "w-full rounded-lg p-3 text-base focus:outline-none placeholder:text-foreground/50 md:text-lg",
                      isPersonal ? "bg-zinc-200" : "bg-foreground/10",
                    )}
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="address" className="text-sm font-medium">
                    Address*
                  </label>
                  <input
                    id="address"
                    type="text"
                    placeholder="Your address"
                    className={cn(
                      "w-full rounded-lg p-3 text-base focus:outline-none placeholder:text-foreground/50 md:text-lg",
                      isPersonal ? "bg-zinc-200" : "bg-foreground/10",
                    )}
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email*
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Your email address"
                    className={cn(
                      "w-full rounded-lg p-3 text-base focus:outline-none placeholder:text-foreground/50 md:text-lg",
                      isPersonal ? "bg-zinc-200" : "bg-foreground/10",
                    )}
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2 mt-4">
                <label htmlFor="message" className="text-sm font-medium">
                  Message*
                </label>
                <textarea
                  id="message"
                  placeholder="Tell us, How can we help you..."
                  className={cn(
                    "h-28 w-full resize-none rounded-lg p-3 text-base focus:outline-none placeholder:text-foreground/50 md:text-lg lg:h-24",
                    isPersonal ? "bg-zinc-200" : "bg-foreground/10",
                  )}
                  required
                />
              </div>

              <div className="mt-4 flex justify-end">
                <Button
                  content="Submit"
                  buttonClassName="w-full lg:w-fit"
                  className="px-6 lg:px-10 text-white! hover:bg-white hover:text-zinc-800! "
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
