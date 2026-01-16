import Link from "next/link";
import { Facebook, Instagram, Music, MessageCircle } from "lucide-react";
import Image from "next/image";
import Button from "./common-ui/Button";
import { Icon } from "@iconify-icon/react";

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
    <footer className="bg-white border-t border-zinc-200">
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 py-8">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-sm font-semibold mb-4 text-[#8cd700]!">
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

        <div className="flex items-center justify-between bg-linear-to-l from-foreground to-[#8cd700] text-white rounded-full p-2">
          <h3 className="text-xl pl-4">
            Only woman and children are loved unconditionally.
          </h3>
          <Link
            href="/shop"
            className="bg-white text-foreground! px-4 py-2 rounded-full font-semibold hover:bg-[#8cd700] hover:text-white! transition flex items-center gap-2"
          >
            <Icon icon="bitcoin-icons:cart-filled" width="24" height="24" />
            Shop Now
          </Link>
        </div>

        {/* Newsletter & Contact Section */}
        <div className="py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Newsletter */}
          <div>
            <Link href="/" className="flex items-center shrink-0 mb-4">
              <Image src="/logo.png" alt="Zuvara Logo" width={90} height={90} />
            </Link>
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
            <h3 className="text-sm font-semibold mb-4 text-[#8cd700]!">
              Visit Us
            </h3>
            <div className="space-y-3">
              <div>
                <p className="text-xs font-semibold text-foreground mb-1">
                  Head Office
                </p>
                <p className="text-sm text-zinc-500">
                  4F, Mahabir Plaza, Hospital Chowk
                  <br />
                  Biratnagar, Nepal 56613
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold text-foreground mb-1">
                  Corporate Office
                </p>
                <p className="text-sm text-zinc-500">
                  2f, Bishal Nagar Marg, Hadigaun
                  <br />
                  Kathmandu-5, Nepal
                </p>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-sm font-semibold mb-4 text-[#8cd700]!">
              Follow Us
            </h3>
            <p className="text-sm text-zinc-500 mb-4">
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
        <div className="border-t border-zinc-200 py-6 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-700 group">
          <p>
            &copy; Copyright {new Date().getFullYear()}{" "}
            <span className="font-semibold text-foreground">ZUVARA</span> All
            rights reserved.
          </p>{" "}
          <div className="flex gap-4">
            <Link
              href="#"
              className="hover:text-foreground! transition text-zinc-400!"
            >
              Terms & Conditions
            </Link>
            <Link
              href="#"
              className="hover:text-foreground! transition text-zinc-400!"
            >
              Privacy Policy
            </Link>
          </div>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link
              href="https://webxnepal.com/"
              target="_blank"
              className="hover:text-zinc-900 transition flex gap-2 items-center"
            >
              Design and Developed by{" "}
              <Image
                src="/webx.png"
                alt="WebX Nepal Logo"
                width={50}
                height={90}
                className="font-semibold group-hover:scale-105 transition-transform"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
