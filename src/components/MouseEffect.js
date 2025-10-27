import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const MouseEffect = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-64 h-64 rounded-full pointer-events-none z-0 blur-3xl opacity-50"
      style={{
        background:
          "radial-gradient(circle at center, #60a5fa, #9333ea, #f472b6)",
      }}
      animate={{
        x: pos.x - 128,
        y: pos.y - 128,
        rotate: [0, 360],
      }}
      transition={{
        type: "spring",
        damping: 25,
        stiffness: 120,
        mass: 0.5,
        duration: 10,
        repeat: Infinity,
      }}
    />
  );
};

export default MouseEffect;