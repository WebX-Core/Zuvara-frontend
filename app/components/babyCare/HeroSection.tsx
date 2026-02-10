"use client";

import Button from "../common-ui/Button";
import { motion, useAnimation } from "framer-motion";
import { Icon } from "@iconify/react";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { useGSAP } from "@gsap/react";
import { useMediaQuery } from "react-responsive";
import Title from "../shared/Title";

gsap.registerPlugin(MotionPathPlugin);
export default function HeroSection() {
  const isSmallerDevice = useMediaQuery({ maxWidth: 1000 });
  // const controls = useAnimation();
  // const isSmallerDevice = useMediaQuery({ maxWidth: 1000 });

  // useEffect(() => {
  //   let isMounted = true;
  //   const xSize = isSmallerDevice ? "calc(100vw - 100%)" : "calc(50vw - 100%)";
  //   const sequence = async () => {
  //     while (isMounted) {
  //       // Move to right
  //       await controls.start({
  //         x: xSize,
  //         scaleX: 1,
  //         transition: { duration: 5, ease: "linear" },
  //       });
  //       if (!isMounted) break;

  //       // Flip immediate
  //       controls.set({ scaleX: -1 });

  //       // Move to left
  //       await controls.start({
  //         x: 0,
  //         scaleX: -1,
  //         transition: { duration: 5, ease: "linear" },
  //       });
  //       if (!isMounted) break;

  //       // Flip back
  //       controls.set({ scaleX: 1 });
  //     }
  //   };
  //   sequence();
  //   return () => {
  //     isMounted = false;
  //     controls.stop();
  //   };
  // }, [controls]);

  useGSAP(() => {
    // Set initial state
    gsap.set("#plane", {
      autoAlpha: 1,
      xPercent: -50,
      yPercent: -50,
      transformOrigin: "50% 50%",
    });

    gsap.to("#plane", {
      duration: 15,
      repeat: -1,
      ease: "none", // "linear" is deprecated/alias, "none" is preferred for continuous loops
      motionPath: {
        path: "#planePath",
        align: "#planePath",
        autoRotate: true,
        alignOrigin: [0.5, 0.5],
        start: 0,
        end: 1,
      },
      immediateRender: true, // Force initial alignment immediately
    });
  }, []);

  return (
    <div className="relative w-screen lg:h-screen flex items-center justify-center">
      <section className="overflow-hidden flex flex-col lg:flex-row px-4 sm:px-6 lg:px-6 mx-auto! max-w-7xl">
        {/* Content - Left Side */}
        <div className="relative w-full h-full lg:w-1/2 flex flex-col justify-between lg:justify-center gap-4 lg:gap-16 pt-4 md:pt-0 text-left">
          <Title
            title="Gentle Care for Your Baby's Delicate Skin with"
            highligher="zuvara"
            desc="Trusted by newly married couples around the world, focusing on
            comfort and safety for your heart and healthy baby."
            showBreak={false}
          />
          {isSmallerDevice && (
            <div className="w-full flex items-center">
              <video
                src="/videos/babyPlaying.mp4"
                autoPlay
                loop
                muted
                playsInline
                controls={false}
                className="pointer-events-none"
              />

              <div className="absolute left-0 w-full h-full pointer-events-auto top-0 lg:-top-20">
                <img
                  id="plane"
                  src="/svg/plane.svg"
                  alt="plane"
                  className="size-8 lg:size-12 absolute pointer-events-none opacity-0 invisible"
                />

                <svg
                  viewBox="0 0 524 179"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                >
                  <path
                    id="planePath"
                    d="M63.0529 9.83417C55.305 13.0764 45.5177 19.2422 44.0206 20.2642C31.2087 29.0105 0.0460895 53.3461 1.02242 67.0042C1.47701 73.3633 2.35943 78.6096 5.64178 86.2286C8.92414 93.8476 14.4393 103.545 18.447 111.097C22.4547 118.648 24.8813 123.895 31.2087 131.596C37.5361 139.296 46.9762 149.457 54.1317 155.064C64.1092 162.883 71.0415 166.767 78.2714 169.223C84.1576 171.222 96.5883 175.355 121.139 176.681C135.766 177.471 154.738 177.153 166.952 176.666C179.165 176.18 184.46 175.544 191.994 174.161C199.528 172.778 209.014 170.712 221.485 168.941C233.956 167.171 248.957 165.74 266.913 164.943C284.869 164.145 305.201 163.547 319.859 164.398C343.377 165.764 358.428 168.54 368.967 170.502C375.398 171.699 379.341 172.715 382.752 173.306C388.327 174.272 403.641 179.549 430.272 177.553C446.273 176.353 458.857 175.37 466.646 173.942C474.617 172.48 486.883 170.196 492.393 167.267C500.422 162.999 505.737 159.462 510.215 155.698C516.225 150.647 522.226 147.062 522.787 135.727C523.338 124.579 523.135 112.271 518.284 100.698C512.609 87.156 505.772 76.2057 500.916 69.4466C495.916 62.4853 494.742 58.651 480.39 48.0037C469.39 39.8427 466.185 35.276 447.416 29.1598C439.307 26.5174 427.287 20.2932 405.845 21.471C398.522 21.8733 391.473 23.6486 384.48 25.089C378.246 26.3729 373.027 27.7393 359.518 29.5163C351.479 30.5738 337.801 32.1636 320.393 32.8766C302.986 33.5896 282.452 33.6958 271.643 33.1873C259.713 32.626 246.419 31.2853 235.186 29.0105L235.143 29.0017C231.54 28.2721 220.414 26.0191 206.173 21.4469C193.966 17.5278 188.549 14.8282 181.007 11.8913C172.768 8.68277 158.851 3.657 138.32 1.94783C126.862 0.993949 113.113 0.540282 102.254 1.64914C83.3821 3.57617 70.6687 6.64726 63.0529 9.83417Z"
                    stroke="none"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
          )}

          <div className="">
            {/* {!isSmallerDevice && ( */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Button
                content="Explore Baby Care Products"
                link="/babyCareProduct"
                icon="vaadin:globe"
                buttonClassName="w-full lg:w-fit"
              />
            </motion.div>
            {/* )} */}

            {/* Trust Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-4 md:mt-12 flex flex-col lg:flex-row gap-2 md:gap-4"
            >
              <div className="flex items-center gap-2 ">
                <div className="flex items-center justify-center">
                  <Icon
                    icon="fluent:shield-task-16-filled"
                    width="20"
                    height="20"
                  />
                </div>
                <p className="text-sm font-medium text-foreground">
                  Trusted by 100+ Nepali mothers
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center">
                  <Icon icon="solar:bag-heart-bold" width="20" height="20" />
                </div>
                <p className="text-sm font-medium text-foreground">
                  In every Nepali mother&apos;s bag
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* baby playing video */}
        {!isSmallerDevice && (
          <div className="w-full lg:w-[50%] flex items-center relative">
            <video
              src="/videos/babyPlaying.mp4"
              autoPlay
              loop
              muted
              playsInline
              controls={false}
              className="pointer-events-none"
            />

            <div className="absolute left-0 w-full h-full pointer-events-auto -top-20">
              <img
                id="plane"
                src="/svg/plane.svg"
                alt="plane"
                className="size-8 lg:size-12 absolute pointer-events-none opacity-0 invisible"
              />
              <svg
                viewBox="0 0 524 179"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                <path
                  id="planePath"
                  d="M63.0529 9.83417C55.305 13.0764 45.5177 19.2422 44.0206 20.2642C31.2087 29.0105 0.0460895 53.3461 1.02242 67.0042C1.47701 73.3633 2.35943 78.6096 5.64178 86.2286C8.92414 93.8476 14.4393 103.545 18.447 111.097C22.4547 118.648 24.8813 123.895 31.2087 131.596C37.5361 139.296 46.9762 149.457 54.1317 155.064C64.1092 162.883 71.0415 166.767 78.2714 169.223C84.1576 171.222 96.5883 175.355 121.139 176.681C135.766 177.471 154.738 177.153 166.952 176.666C179.165 176.18 184.46 175.544 191.994 174.161C199.528 172.778 209.014 170.712 221.485 168.941C233.956 167.171 248.957 165.74 266.913 164.943C284.869 164.145 305.201 163.547 319.859 164.398C343.377 165.764 358.428 168.54 368.967 170.502C375.398 171.699 379.341 172.715 382.752 173.306C388.327 174.272 403.641 179.549 430.272 177.553C446.273 176.353 458.857 175.37 466.646 173.942C474.617 172.48 486.883 170.196 492.393 167.267C500.422 162.999 505.737 159.462 510.215 155.698C516.225 150.647 522.226 147.062 522.787 135.727C523.338 124.579 523.135 112.271 518.284 100.698C512.609 87.156 505.772 76.2057 500.916 69.4466C495.916 62.4853 494.742 58.651 480.39 48.0037C469.39 39.8427 466.185 35.276 447.416 29.1598C439.307 26.5174 427.287 20.2932 405.845 21.471C398.522 21.8733 391.473 23.6486 384.48 25.089C378.246 26.3729 373.027 27.7393 359.518 29.5163C351.479 30.5738 337.801 32.1636 320.393 32.8766C302.986 33.5896 282.452 33.6958 271.643 33.1873C259.713 32.626 246.419 31.2853 235.186 29.0105L235.143 29.0017C231.54 28.2721 220.414 26.0191 206.173 21.4469C193.966 17.5278 188.549 14.8282 181.007 11.8913C172.768 8.68277 158.851 3.657 138.32 1.94783C126.862 0.993949 113.113 0.540282 102.254 1.64914C83.3821 3.57617 70.6687 6.64726 63.0529 9.83417Z"
                  stroke="none"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
