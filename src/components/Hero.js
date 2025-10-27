import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Facebook, Instagram } from "lucide-react";

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const socials = [
    { name: "GitHub", icon: <Github />, link: "https://github.com/mahmudunnabifahim29" },
    { name: "LinkedIn", icon: <Linkedin />, link: "https://linkedin.com" },
    { name: "Email", icon: <Mail />, link: "mailto:mahmudunnabifahim3579@gmail.com" },
    { name: "Facebook", icon: <Facebook />, link: "https://facebook.com/mahmudunnabifahim/" },
    { name: "Instagram", icon: <Instagram />, link: "https://instagram.com/mahmudunnabifahim/" },
    { name: "Codeforces", icon: <span className="font-bold">CF</span>, link: "https://codeforces.com/profile/Mahmudunnabi_Fahim/" },
  ];

  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-center overflow-hidden">
      {/* Mouse-follow glowing circle */}
      <div
        className="absolute w-96 h-96 bg-blue-500/30 rounded-full blur-3xl pointer-events-none"
        style={{
          transform: `translate(${mousePos.x - 192}px, ${mousePos.y - 192}px)`,
        }}
      />

      {/* Profile Picture */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="z-10"
      >
        <div className="w-40 h-40 rounded-full bg-gray-700 border-4 border-blue-400 mb-6 overflow-hidden">
          <img
            src="profile.jpg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>

      {/* Name and Role */}
      <motion.h1
        className="text-5xl font-bold mb-2 z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Mahmudunnabi Fahim
      </motion.h1>

      <motion.p
        className="text-lg text-gray-300 mb-4 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        Computer Science & Engineering Student @ MBSTU
      </motion.p>

      {/* Social Links */}
      <motion.div
        className="flex gap-6 justify-center z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        {socials.map((s, i) => (
          <motion.a
            key={i}
            href={s.link}
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 bg-gray-800/40 backdrop-blur-md border border-gray-700 rounded-full flex items-center justify-center text-white hover:bg-blue-500 hover:text-white transition"
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            {s.icon}
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
};

export default Hero;