"use client";

import Image from "next/image";
import { Mail } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const CTA = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <section className="py-4 lg:py-8">
      <div className="container w-full">
        <div className="bg-[#eeeeee] overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Content */}
            <div className="p-8 lg:py-24 lg:pl-36">
              <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-3">
                Discover Amazing
              </p>
              <h2 className="text-3xl lg:text-4xl font-semibold text-foreground mb-3 font-poppins">
                Get notified about latest{" "}
                <span className="text-[#8cd700] italic">offers & updates</span>
              </h2>
              <p className="text-zinc-700 text-sm lg:text-base mb-6 leading-relaxed">
                Be aware of all discounts and bargains! Don&apos;t miss your
                benefits!
                <span className="ml-1">😊</span>
              </p>

              {/* Email Input */}
              <form onSubmit={handleSubscribe} className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border border-zinc-300 rounded-full text-sm focus:outline-none focus:border-zinc-600"
                  required
                />
                <button
                  type="submit"
                  className="absolute top-1/2 -translate-y-1/2 right-1 bg-white border border-zinc-300 hover:bg-zinc-50 text-zinc-900 hover:text-[#8cd700] font-semibold px-6 py-1.5 rounded-full transition-all text-sm flex items-center gap-2"
                >
                  <Mail size={16} />
                  Subscribe
                </button>
              </form>

              {/* Success Message */}
              {subscribed && (
                <p className="mt-3 text-sm text-green-600 font-semibold">
                  ✓ Thank you for subscribing!
                </p>
              )}
            </div>

            {/* Image */}
            <div className="relative h-64 md:h-full min-h-64 hidden md:block">
              <Image
                src="/baby/baby15.png"
                alt="Zuvara Diapers"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
