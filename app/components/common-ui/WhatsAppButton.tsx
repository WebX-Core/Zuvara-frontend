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
        className="w-10 h-10 sm:w-12 sm:h-12"
      ></Image>
    </Link>
  );
};

export default WhatsAppButton;
