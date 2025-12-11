"use client";

import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { motion } from "framer-motion";

const skills = {
    "Languages": ["Python", "C", "Java", "MySQL", "Solidity"],
    "Frameworks & Tools": ["Flutter", "Flet", "Kivy", "Beeware", "React", "Next.js"],
    "Data & AI": ["Pandas", "Seaborn", "TensorFlow", "OpenCV", "Machine Learning"],
    "Dev Tools": ["Git/GitHub", "Android Studio", "AutoCAD", "MongoDB", "Firebase"],
};

export function Skills() {
    return (
        <Section id="skills">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Technical <span className="text-cyan-400">Skills</span>
                </h2>
                <p className="text-white/60 max-w-2xl mx-auto">
                    A comprehensive overview of my technical expertise and tools I use.
                </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
                {Object.entries(skills).map(([category, items], index) => (
                    <motion.div
                        key={category}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors"
                    >
                        <h3 className="text-xl font-bold mb-6 text-white">{category}</h3>
                        <div className="flex flex-wrap gap-3">
                            {items.map((skill) => (
                                <Badge key={skill} className="text-sm py-1.5 px-4">
                                    {skill}
                                </Badge>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
