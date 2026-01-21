import React from "react";
import { useMediaQuery } from "react-responsive";

const ImageGridSection = () => {
  const images = [
    { image: "/baby/baby17.png", top: "0%", left: "22%", rotate: "-7deg" },
    { image: "/baby/baby13.png", top: "6%", left: "45%", rotate: "5deg" },

    { image: "/baby/baby25.png", top: "30%", left: "0%", rotate: "6deg" },
    { image: "/baby/baby23.png", top: "32%", left: "32%", rotate: "-4deg" },
    { image: "/baby/baby3.png", top: "34%", left: "65%", rotate: "3deg" },

    { image: "/baby/baby24.png", top: "60%", left: "2%", rotate: "5deg" },
    { image: "/baby/baby19.png", top: "58%", left: "35%", rotate: "-6deg" },
    { image: "/baby/baby12.png", top: "64%", left: "62%", rotate: "7deg" },

    { image: "/baby/baby18.png", top: "80%", left: "40%", rotate: "-5deg" },
  ];

  const isSmallerDevice = useMediaQuery({ maxWidth: 768 });

  return (
    <div className="relative w-full h-[250px] lg:h-[520px]">
      {images.map((item, index) => (
        <div
          key={index}
          className={`absolute transition-all duration-1000 hover:scale-110 hover:rotate-0 hover:z-20 cursor-pointer rotate-[${item.rotate}] w-[100px] lg:w-[200px]`}
          style={{
            top: item.top,
            left: item.left,
            // width: "200px",
            // width: {isSmallerDevice ? "100px" : "200px"},
          }}
        >
          <div className="bg-white p-1 lg:p-3 shadow-xl">
            <img
              src={item.image}
              alt={`Baby ${index + 1}`}
              className="w-full aspect-[4/3] object-cover"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageGridSection;
