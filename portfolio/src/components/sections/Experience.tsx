"use client";

import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
    {
        role: "Intern",
        company: "Mindstack Solutions",
        period: "July 2025 - Present",
        description: "Engineering a scalable real-time call transcription and summarization pipeline using AWS Kinesis, Whisper, and LLMs, enabling sentiment, churn, and upsell analytics to automate call center operations.",
    },
    {
        role: "ML and DL Intern",
        company: "Altair",
        period: "Jan 2025 - June 2025",
        description: "Developed an ensemble model combining GRU-D, Time-Aware LSTM, and BERT-based multimodal fusion on Altair RapidMiner to detect early sepsis from structured vitals achieving 95-97% accuracy on ICU-like data.",
    },
    {
        role: "Intern",
        company: "Jiffy.AI",
        period: "Sept 2024 - Nov 2024",
        description: "Contributed to the development of automation of user onboarding process and implemented core platform features like search and filter, streamlining user experience, provisioning, and functionality at scale.",
    },
    {
        role: "Project Intern",
        company: "Samsung PRISM Project",
        period: "May 2024 - July 2024",
        description: "Developed a real-time system monitoring mobile app in Python, leading front-end with Flet over Kivy and Beeware for a lightweight, responsive UI.",
    },
];

export function Experience() {
    return (
        <Section id="experience" className="bg-black/50">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Work <span className="text-purple-500">Experience</span>
                </h2>
            </motion.div>

            <div className="max-w-3xl mx-auto relative">
                {/* Timeline Line */}
                <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500 via-purple-500 to-transparent md:-translate-x-1/2" />

                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className={`relative flex flex-col md:flex-row gap-8 mb-12 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                            }`}
                    >
                        {/* Timeline Dot */}
                        <div className="absolute left-[-4px] md:left-1/2 top-0 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)] md:-translate-x-1/2" />

                        <div className="md:w-1/2" />

                        <div className="md:w-1/2 pl-8 md:pl-0 md:px-8">
                            <Card className="p-6 relative hover:bg-white/10 transition-colors">
                                <div className="flex items-center gap-2 mb-2 text-cyan-400">
                                    <Briefcase className="w-4 h-4" />
                                    <span className="text-sm font-medium">{exp.period}</span>
                                </div>
                                <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                                <p className="text-white/60 mb-4">{exp.company}</p>
                                <p className="text-white/70 text-sm leading-relaxed">
                                    {exp.description}
                                </p>
                            </Card>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
