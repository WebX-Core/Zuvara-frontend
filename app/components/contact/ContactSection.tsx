"use client";

import Button from "../common-ui/Button";
import { useSection } from "@/app/providers/SectionProvider";
import { cn } from "@/lib/utils";

const ContactSection = () => {
  const { activeSection } = useSection();

  const isPersonal = activeSection === "personal";

  return (
    <section
      className={cn(
        "flex items-center justify-center h-auto mt-8 container mx-auto px-4 lg:px-6 max-w-7xl",
      )}
    >
      <div
        className={cn(
          "border w-full p-4 rounded-lg lg:rounded-2xl bg-white",
          isPersonal ? "border-personalCare/30" : "border-foreground/30",
        )}
      >
        <div className="lg:text-center mb-4">
          <p className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Get in{" "}
            <span className={isPersonal ? "text-personalCare" : "text-primary"}>
              Touch
            </span>
          </p>
        </div>

        <div className="w-full flex flex-col gap-8">
          <div className="w-full">
            <p className="xl:text-lg text-gray-600 mb-4 lg:text-center">
              For any inquiries, please use the form below and we'll be in touch
              shortly.
            </p>
            <div className="w-full">
              <form action="" className="w-full">
                <div className="w-full lg:grid lg:grid-cols-2 gap-8 space-y-4 lg:space-y-0">
                  <div className="flex flex-col gap-2 lg:gap-4">
                    <label htmlFor="name">Name*</label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Your Name"
                      className={cn(
                        "w-full p-2 lg:p-4 rounded-lg lg:rounded-2xl text-lg focus:outline-none placeholder:text-foreground/50",
                        isPersonal ? "bg-personalCare/10" : "bg-foreground/10",
                      )}
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2 lg:gap-4">
                    <label htmlFor="phone">Phone*</label>
                    <input
                      id="phone"
                      type="text"
                      placeholder="Your phone number"
                      className={cn(
                        "w-full p-2 lg:p-4 rounded-lg lg:rounded-2xl text-lg focus:outline-none placeholder:text-foreground/50",
                        isPersonal ? "bg-personalCare/10" : "bg-foreground/10",
                      )}
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2 lg:gap-4">
                    <label htmlFor="address">Address*</label>
                    <input
                      id="address"
                      type="text"
                      placeholder="Your address"
                      className={cn(
                        "w-full p-2 lg:p-4 rounded-lg lg:rounded-2xl text-lg focus:outline-none placeholder:text-foreground/50",
                        isPersonal ? "bg-personalCare/10" : "bg-foreground/10",
                      )}
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2 lg:gap-4">
                    <label htmlFor="email">Email*</label>
                    <input
                      id="email"
                      type="email"
                      placeholder="Your email address"
                      className={cn(
                        "w-full p-2 lg:p-4 rounded-lg lg:rounded-2xl text-lg focus:outline-none placeholder:text-foreground/50",
                        isPersonal ? "bg-personalCare/10" : "bg-foreground/10",
                      )}
                      required
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2 lg:gap-4 mt-4 lg:mt-8">
                  <label htmlFor="message">Message*</label>
                  <textarea
                    id="message"
                    placeholder="Tell us, How can we help you..."
                    className={cn(
                      "w-full lg:h-60 p-2 lg:p-4 rounded-lg lg:rounded-2xl text-lg focus:outline-none placeholder:text-foreground/50",
                      isPersonal ? "bg-personalCare/10" : "bg-foreground/10",
                    )}
                    required
                  />
                </div>

                <div className="mt-4 lg:mt-8 flex justify-end">
                  <Button
                    content="Submit"
                    buttonClassName="w-full lg:w-fit"
                    className="px-6 lg:px-10"
                    for={isPersonal ? "personalCare" : "babyCare"}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
