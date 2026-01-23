import React from "react";
import SectionHeading from "../common-ui/SectionHeading";

const childCareStepLists = [
  {
    id: 1,
    title: "Respond quickly to the baby's needs and cries",
    image: "/images/baby/baby19.png",
  },
  {
    id: 2,
    title: "Support proper nutrition and hydration",
    image: "/images/baby/baby19.png",
  },
  {
    id: 3,
    title: "Practice good hygiene at all times",
    image: "/images/baby/baby19.png",
  },
  {
    id: 4,
    title: "Provide emotional comfort and bonding time",
    image: "/images/baby/baby19.png",
  },
  {
    id: 5,
    title: "Follow the immunization schedule",
    image: "/images/baby/baby19.png",
  },
  {
    id: 6,
    title: "Watch for any signs of illness or discomfort",
    image: "/images/baby/baby19.png",
  },
];
const ChildCareStepSection = () => {
  return (
    <section className="container mx-auto py-4 lg:py-8 px-4 sm:px-6 lg:px-6 max-w-7xl">
      <SectionHeading
        title="Essential Baby"
        highlight="Care Tips"
        description="Simple and practical care practices to keep your baby healthy, safe, and happy every day"
        align="center"
      />
      <div className="lg:mt-32">
        {childCareStepLists.map((list) => (
          <div
            key={list.id}
            className={`flex items-center justify-between lg:-mt-32 ${list.id % 2 === 0 ? "flex-row-reverse" : ""}`}
          >
            <div
              className={`w-full ${list.id % 2 === 0 ? "text-left" : "text-right"}`}
            >
              <p
                className={`text-xl lg:text-3xl ${list.id % 2 === 0 ? "w-full lg:w-1/2" : "w-full lg:w-1/2 ml-auto"}`}
              >
                {list.title}
              </p>
            </div>
            <div
              className="w-60 lg:w-100 h-40 lg:h-80"
              style={{
                clipPath:
                  "shape(from 85.52% 30.28%,curve to 93.18% 45.30% with 90.13% 36.96%,curve to 94.51% 62.72% with 96.24% 53.64%,curve to 84.17% 75.86% with 92.79% 71.80%,curve to 69.39% 85.32% with 75.55% 79.92%,curve to 54.81% 93.38% with 63.23% 90.73%,curve to 36.98% 95.02% with 46.38% 96.03%,curve to 23.89% 84.73% with 27.58% 94.00%,curve to 11.52% 70.39% with 20.20% 75.45%,curve to 4.20% 55.91% with 2.83% 65.33%,curve to 10.89% 39.65% with 5.56% 46.50%,curve to 20.04% 26.09% with 16.22% 32.79%,curve to 30.48% 14.84% with 23.86% 19.39%,curve to 45.31% 7.69% with 37.09% 10.28%,curve to 62.02% 7.43% with 53.53% 5.09%,curve to 75.71% 16.68% with 70.50% 9.77%,curve to 85.52% 30.28% with 80.92% 23.59%)",
              }}
            >
              <img
                src={list.image}
                alt={list.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ChildCareStepSection;
