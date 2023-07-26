import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const MainBanner = () => {
  const [startMainBannerAnim, setStartMainBannerAnim] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setStartMainBannerAnim(true);
    }, 1500);
  }, []);

  return (
    <motion.div
      initial={false}
      animate={startMainBannerAnim ? { width: 1200 } : { width: 800 }}
      transition={{ duration: 1 }}
      className="h-[720px] bg-black overflow-hidden"
    >
      <div className="relative w-full h-full">
        <Image src="/images/whole_car.png" alt="whole_car.png" className="object-contain" fill />
        <motion.div
          animate={startMainBannerAnim ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: 4.8, delay: 0.35 }}
          className="relative w-full h-full"
        >
          <Image src="/images/headlight_only.png" alt="headlight_only.png" className="object-contain" fill />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default MainBanner;
