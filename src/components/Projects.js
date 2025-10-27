import { motion } from "framer-motion";

const projects = [
  {
    title: "To-Do Notes App",
    desc: "A personal productivity app with reminders built using Python and Tkinter.",
  },
  {
    title: "Unit & Currency Converter",
    desc: "JavaFX app with real-time exchange rate and sleek UI.",
  },
  {
    title: "Cryptography Project",
    desc: "C program demonstrating encryption algorithms for secure data transfer.",
  },
];

const Projects = () => (
  <section id="projects" className="py-24 bg-gray-800/30 text-center">
    <h2 className="text-4xl font-bold mb-10">Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-16">
      {projects.map((p, i) => (
        <motion.div
          key={i}
          className="p-6 rounded-xl bg-white/10 backdrop-blur-lg border border-gray-700 hover:scale-105 transition"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.2 }}
        >
          <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
          <p className="text-gray-300 text-sm">{p.desc}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Projects;