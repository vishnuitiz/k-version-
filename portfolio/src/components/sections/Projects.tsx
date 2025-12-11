"use client";

import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
    {
        title: "Decentralized Intelligence Framework",
        description: "Integrating Blockchain with IPFS, smart contracts (Solidity), XAI, and role-based access to ensure secure, transparent, and decentralized clinical data management.",
        tags: ["Blockchain", "Solidity", "IPFS", "XAI"],
        links: { demo: "#", github: "#" },
    },
    {
        title: "Sign Language Prediction System",
        description: "Real-time sign language recognition system using OpenCV and ML, achieving 95-98% accuracy with a bi-directional gesture-to-text/speech interface.",
        tags: ["OpenCV", "ML", "Python", "Computer Vision"],
        links: { demo: "#", github: "#" },
    },
    {
        title: "Wine Quality Prediction",
        description: "Random Forest-based model with in-depth preprocessing and feature engineering on physicochemical attributes to predict wine quality.",
        tags: ["Machine Learning", "Random Forest", "Pandas", "Seaborn"],
        links: { demo: "#", github: "#" },
    },
    {
        title: "E-Bazaar | E-Commerce Platform",
        description: "Full-fledged eCommerce website for electronics using the MERN stack, providing a seamless user experience with product search, auth, and payments.",
        tags: ["MERN Stack", "React", "Node.js", "MongoDB"],
        links: { demo: "#", github: "#" },
    },
    {
        title: "Electro Shop | Mobile App",
        description: "Flutter-based electronics eCommerce app with distinct customer and admin interfaces, enabling product search, order placement, and inventory management.",
        tags: ["Flutter", "Dart", "Mobile Dev", "Android"],
        links: { demo: "#", github: "#" },
    },
];

export function Projects() {
    return (
        <Section id="projects">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Featured <span className="text-cyan-400">Projects</span>
                </h2>
                <p className="text-white/60 max-w-2xl mx-auto">
                    A selection of my recent work in AI, Blockchain, and Web Development.
                </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <Card className="group h-full p-6 flex flex-col hover:border-cyan-500/30 transition-all duration-300">
                            <div className="mb-4">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl font-bold group-hover:text-cyan-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    <div className="flex gap-2">
                                        <a href={project.links.github} className="text-white/50 hover:text-white transition-colors">
                                            <Github className="w-5 h-5" />
                                        </a>
                                        <a href={project.links.demo} className="text-white/50 hover:text-white transition-colors">
                                            <ExternalLink className="w-5 h-5" />
                                        </a>
                                    </div>
                                </div>
                                <p className="text-white/60 mb-6 line-clamp-3">
                                    {project.description}
                                </p>
                            </div>

                            <div className="mt-auto">
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <Badge key={tag}>{tag}</Badge>
                                    ))}
                                </div>
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </div>

            <div className="text-center mt-12">
                <Button variant="outline">View All Projects</Button>
            </div>
        </Section>
    );
}
