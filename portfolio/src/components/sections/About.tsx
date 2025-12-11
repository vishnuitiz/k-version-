"use client";

import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { motion } from "framer-motion";
import { Code2, Brain, Rocket, Globe } from "lucide-react";

const features = [
    {
        icon: <Brain className="w-6 h-6 text-cyan-400" />,
        title: "AI & Deep Learning",
        description: "Building intelligent models using PyTorch & TensorFlow.",
    },
    {
        icon: <Code2 className="w-6 h-6 text-purple-400" />,
        title: "Full Stack Dev",
        description: "Creating scalable web apps with Next.js & Node.js.",
    },
    {
        icon: <Globe className="w-6 h-6 text-blue-400" />,
        title: "Blockchain",
        description: "Developing decentralized apps and smart contracts.",
    },
    {
        icon: <Rocket className="w-6 h-6 text-pink-400" />,
        title: "Automation",
        description: "Streamlining workflows with Python scripts & bots.",
    },
];

export function About() {
    return (
        <Section id="about" className="bg-black/50">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        About <span className="text-cyan-400">Me</span>
                    </h2>
                    <p className="text-white/70 mb-6 leading-relaxed">
                        I am a Computer Science Engineering student at B.M.S College of Engineering (2022-2026) with a proven ability to innovate and solve complex problems.
                        Experienced in leading cross-functional teams to deliver high-impact projects, with a strong focus on risk management and big data.
                    </p>
                    <p className="text-white/70 mb-8 leading-relaxed">
                        Skilled at adapting to fast-paced environments and navigating evolving challenges.
                        I seek dynamic roles to apply technical expertise in AI, Blockchain, and Full Stack Development while collaborating with global teams.
                    </p>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                            <h3 className="text-2xl font-bold text-white mb-1">4+</h3>
                            <p className="text-sm text-white/50">Internships</p>
                        </div>
                        <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                            <h3 className="text-2xl font-bold text-white mb-1">5+</h3>
                            <p className="text-sm text-white/50">Major Projects</p>
                        </div>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="p-6 h-full hover:bg-white/10 transition-colors">
                                <div className="mb-4 p-3 rounded-lg bg-white/5 w-fit">
                                    {feature.icon}
                                </div>
                                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                                <p className="text-sm text-white/60">{feature.description}</p>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
