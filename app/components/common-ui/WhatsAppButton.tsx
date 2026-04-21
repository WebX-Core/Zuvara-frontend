import Link from "next/link";
import React from "react";
import Image from "next/image";

const WhatsAppButton = () => {
  const phoneNumber = "+9779804940177";
  const message = encodeURIComponent(
    "Hello, I wanted to inquire about a product.",
  );

  const whatsAppUrl = `https://wa.me/${phoneNumber}?text=${message}`;
  return (
    <Link
      href={whatsAppUrl}
      target="_blank"
      className="fixed right-4 bottom-4 z-12000 hover:scale-105 transition-transform duration-300 cursor-pointer"
    >
      <Image
        src="/logo/whatsapp.png"
        alt=" Zuvara Whatsapp"
        width={60}
        height={60}
        className="w-12 h-12 sm:w-16 sm:h-16"
      ></Image>
      <span className="absolute top-0 -left-1 sm:-top-1 sm:-left-1.5 bg-red-500 rounded-full w-4 h-4 sm:w-6 sm:h-6 text-xs sm:text-sm text-white flex items-center justify-center p-2">
        1
      </span>
    </Link>
  );
};

export default WhatsAppButton;
