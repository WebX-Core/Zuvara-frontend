import Image from "next/image";
import { motion } from "framer-motion";

const FooterLogo = () => {
  return (
    <div className="py-16 flex justify-center">
      {/* Logo Z Letter */}
      <motion.div
        initial="initial"
        whileHover="hover"
        className="relative cursor-pointer"
      >
        <div className="relative z-10">
          <Image
            src="/logo/z.png"
            alt="Zuvara Logo Z letter"
            width={150}
            height={150}
            className="relative"
          />
        </div>

        {/* Character Popup */}
        <motion.div
          variants={{
            initial: {
              y: 0,
              opacity: 0,
              scale: 0.8,
            },
            hover: {
              y: -20,
              opacity: 1,
              scale: 1,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 15,
              },
            },
          }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 -z-10 w-full flex justify-center"
        >
          <Image
            src="/images/baby/baby32.png"
            alt="Zuvara Logo Z letter character"
            width={180}
            height={180}
            className="object-contain"
          />
        </motion.div>
      </motion.div>

      {/* Logo U Letter */}
      <motion.div
        initial="initial"
        whileHover="hover"
        className="relative cursor-pointer"
      >
        <div className="relative z-10">
          <Image
            src="/logo/u.png"
            alt="Zuvara Logo U letter"
            width={150}
            height={150}
            className="relative"
          />
        </div>

        {/* Character Popup */}
        <motion.div
          variants={{
            initial: {
              y: 0,
              opacity: 0,
              scale: 0.8,
            },
            hover: {
              y: -20,
              opacity: 1,
              scale: 1,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 15,
              },
            },
          }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 -z-10 w-full flex justify-center"
        >
          <Image
            src="/images/baby/baby32.png"
            alt="Zuvara Logo U letter character"
            width={180}
            height={180}
            className="object-contain"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FooterLogo;
