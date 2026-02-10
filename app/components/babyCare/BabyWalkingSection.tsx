"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

const whyUsLists = [
  {
    id: 1,
    icon: "ion:diamond-outline",
    title: "Premium Quality",
    description:
      "Gentle, premium-quality materials that protect delicate baby skin",
  },
  {
    id: 2,
    icon: "lucide:leaf",
    title: "100% Natural",
    description: "Superior absorption for longer dryness & fewer changes",
  },
  {
    id: 3,
    icon: "codicon:workspace-trusted",
    title: "Trusted by Dermatologists",
    description: "Dermatologist-tested & toxin-free for safer everyday use",
  },
  {
    id: 4,
    icon: "ion:diamond-outline",
    title: "Comfortable Fit",
    description: "Easy-fit design for comfort, movement, and leak protection",
  },
];

const BabyWalkingSection = () => {
  return (
    <div className="relative w-screen bg-babyCare/40 py-4">
      <section className="overflow-hidden flex flex-col lg:flex-row px-4 sm:px-6 lg:px-6 mx-auto! max-w-7xl">
        <div className="w-full space-y-4 lg:space-y-0">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full">
            {whyUsLists.map((list) => (
              <div
                key={list.id}
                className="relative flex flex-col gap-4 items-center lg:text-center px-2 lg:px-4 py-2 lg:py-4 bg-white rounded-xl shadow-md"
              >
                <div className="h-full flex flex-col justify-center items-center gap-2">
                  <div className="bg-foreground rounded-full p-4">
                    <Icon icon={list.icon} className="size-12 text-white" />
                  </div>
                  <p className="text-xl font-semibold text-center">
                    {list.title}
                  </p>
                  <p className="text-sm text-center text-zinc-500">
                    {list.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BabyWalkingSection;
