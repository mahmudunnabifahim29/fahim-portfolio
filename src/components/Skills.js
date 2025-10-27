import { motion } from "framer-motion";

const skills = [
  { name: "C++", level: 95 },
  { name: "Python", level: 90 },
  { name: "Java", level: 80 },
  { name: "React", level: 85 },
  { name: "Node.js", level: 75 },
  { name: "SQL", level: 70 },
];

const Skills = () => (
  <section id="skills" className="py-24 text-center relative">
    <h2 className="text-4xl font-bold mb-10">Skills & Expertise</h2>
    <div className="max-w-3xl mx-auto space-y-6">
      {skills.map((s, i) => (
        <div key={i} className="text-left">
          <p className="font-semibold mb-2">{s.name}</p>
          <div className="w-full bg-gray-700/40 rounded-full h-3">
            <motion.div
              className="bg-blue-500 h-3 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: `${s.level}%` }}
              transition={{ duration: 1.2, delay: i * 0.2 }}
            />
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;