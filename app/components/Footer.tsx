import Link from "next/link";
import { Facebook, Instagram, Music, MessageCircle } from "lucide-react";

export default function Footer() {
  const footerSections = [
    {
      title: "Shop & Learn",
      links: ["Store", "Men", "Women", "Kids", "Collections", "New Arrivals"],
    },
    {
      title: "Shopping",
      links: [
        "Size Charts",
        "Retail Store",
        "Track Order",
        "Returns",
        "Shipping Info",
      ],
    },
    {
      title: "Account",
      links: [
        "Manage Account",
        "My Orders",
        "Wishlist",
        "Gift Cards",
        "Loyalty Program",
      ],
    },
    {
      title: "About Zuvara",
      links: [
        "Our Story",
        "Our Difference",
        "Sustainability",
        "Newsroom",
        "Careers",
      ],
    },
    {
      title: "Customer Care",
      links: ["Contact Us", "FAQ", "Live Chat", "Email Support", "Call Us"],
    },
    {
      title: "Company",
      links: [
        "About Us",
        "Blog",
        "Privacy Policy",
        "Terms & Conditions",
        "Contact",
      ],
    },
  ];

  return (
    <footer className="bg-white text-zinc-900 border-t border-zinc-200">
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 py-12">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-sm font-semibold mb-4 text-foreground">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href="/"
                      className="text-sm text-zinc-600! hover:text-foreground! transition"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter & Contact Section */}
        <div className="border-t border-zinc-200 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-semibold mb-4 text-zinc-900">
              Newsletter
            </h3>
            <p className="text-sm text-zinc-700 mb-4">
              Subscribe to get special offers and updates on new arrivals.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 border border-zinc-300 text-sm focus:outline-none focus:border-teal-600 rounded-full"
              />
              <button className="bg-teal-700 hover:bg-teal-800 rounded-full text-white px-3 py-2 transition">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Visit Us */}
          <div>
            <h3 className="text-sm font-semibold mb-4 text-zinc-900">
              Visit Us
            </h3>
            <div className="space-y-3">
              <div>
                <p className="text-xs font-semibold text-zinc-900 mb-1">
                  Head Office
                </p>
                <p className="text-sm text-zinc-700">
                  4F, Mahabir Plaza, Hospital Chowk
                  <br />
                  Biratnagar, Nepal 56613
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold text-zinc-900 mb-1">
                  Corporate Office
                </p>
                <p className="text-sm text-zinc-700">
                  2f, Bishal Nagar Marg, Hadigaun
                  <br />
                  Kathmandu-5, Nepal
                </p>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-sm font-semibold mb-4 text-zinc-900">
              Follow Us
            </h3>
            <p className="text-sm text-zinc-700 mb-4">
              Connect with us on social media for exclusive updates and offers.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-zinc-600 hover:text-teal-600 transition"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-zinc-600 hover:text-teal-600 transition"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-zinc-600 hover:text-teal-600 transition"
                aria-label="TikTok"
              >
                <Music size={20} />
              </a>
              <a
                href="#"
                className="text-zinc-600 hover:text-teal-600 transition"
                aria-label="WhatsApp"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-zinc-200 py-6 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-700">
          <p>&copy; Copyright © 2025 Zuvara.com.np. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-zinc-900 transition">
              Terms & Conditions
            </Link>
            <Link href="#" className="hover:text-zinc-900 transition">
              Privacy Policy
            </Link>
            <Link
              href="https://webxnepal.com"
              target="_blank"
              className="hover:text-zinc-900 transition "
            >
              Design and Developed by{" "}
              <span className="font-semibold text-blue-400!">WebX</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
