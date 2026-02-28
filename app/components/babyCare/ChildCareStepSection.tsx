"use client";

import React from "react";
import { motion } from "framer-motion";

const childCareStepLists = [
  { id: 1, title: "Respond to cries", desc: "Building trust and comfort.", imageUrl:"/images/baby/baby19.png" },
  { id: 2, title: "Proper nutrition", desc: "Fueling healthy growth.", imageUrl:"/new/babyNutrition.png" },
  { id: 3, title: "Practice hygiene", desc: "Protecting sensitive skin." , imageUrl:"/new/hygiene.png"},
  { id: 4, title: "Emotional bonding", desc: "Nurturing through presence.", imageUrl:"/new/bonding.png" },
  { id: 5, title: "Follow immunization", desc: "Prioritizing wellness.", imageUrl:"/new/immunization.png" },
  { id: 6, title: "Monitor health", desc: "Stay observant of needs.", imageUrl:"/new/monitorhealth.png" },
];

const ChildCareStepSection = () => {
  return (
    <section className="py-16 bg-zinc-50">
      <div className="container mx-auto max-w-[90%]">
        <div className="text-center mb-12">
          <h2 className="text-sm font-bold tracking-[0.2em] text-emerald-600 uppercase mb-3">Essential Care</h2>
          <p className="text-3xl font-serif text-zinc-900">Expert Tips for Your Baby</p>
        </div>

        {/* Compact, High-Impact Editorial Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {childCareStepLists.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group relative h-[350px] lg:h-[400px] overflow-hidden rounded-2xl cursor-pointer"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
              
              {/* Content anchored to the bottom */}
              <div className="absolute bottom-0 left-0 p-5 text-white">
                <span className="text-emerald-400 font-bold text-xs uppercase block mb-1">0{item.id}</span>
                <h4 className="font-semibold text-sm leading-snug">{item.title}</h4>
                <p className="text-[10px] text-zinc-200 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChildCareStepSection;