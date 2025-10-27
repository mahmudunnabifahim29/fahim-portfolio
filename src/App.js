import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import MouseEffect from "./components/MouseEffect";
import { Sun, Moon } from "lucide-react";
import ParticlesBg from "./components/ParticlesBg";

function App() {
  const [dark, setDark] = useState(true);

  return (
    <div
      className={`relative min-h-screen transition-colors duration-500 ${
        dark
          ? "bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white"
          : "bg-gradient-to-br from-blue-50 via-white to-purple-50 text-gray-900"
      }`}
    >
      <MouseEffect />
      <ParticlesBg />

      {/* 🌗 Theme Toggle */}
      <div className="fixed top-6 right-6 z-50">
        <button
          onClick={() => setDark(!dark)}
          className="p-3 rounded-full bg-gray-800/40 backdrop-blur-md border border-gray-700 hover:scale-110 transition"
        >
          {dark ? <Sun className="text-yellow-300" /> : <Moon className="text-blue-600" />}
        </button>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={dark ? "dark" : "light"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </motion.div>
      </AnimatePresence>

      <footer className="text-center py-6 border-t border-gray-700/40 backdrop-blur-sm">
        <p className="text-sm opacity-70">
          © {new Date().getFullYear()} Mahmudunnabi Fahim — Crafted with 💙 & React
        </p>
      </footer>
    </div>
  );
}

export default App;