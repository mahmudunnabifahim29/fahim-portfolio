import React from "react";
import { Particles } from "react-tsparticles";

export default function ParticlesBg() {
  return (
    <Particles
      className="fixed inset-0 -z-10"
      options={{
        fullScreen: { enable: false },
        background: { color: { value: "transparent" } },
        fpsLimit: 60,
        particles: {
          number: { value: 50, density: { enable: true, area: 800 } },
          color: { value: ["#60a5fa", "#9333ea", "#f472b6"] },
          shape: { type: "circle" },
          opacity: { value: 0.5, random: true },
          size: { value: 3, random: true },
          links: { enable: true, distance: 120, color: "#93c5fd", opacity: 0.4, width: 1 },
          move: { enable: true, speed: 1, direction: "none", random: false, straight: false, outModes: "out" },
        },
        interactivity: {
          events: { onHover: { enable: true, mode: "repulse" }, resize: true },
          modes: { repulse: { distance: 100, duration: 0.4 } },
        },
        detectRetina: true,
      }}
    />
  );
}