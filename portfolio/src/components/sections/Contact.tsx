"use client";

import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

export function Contact() {
    return (
        <Section id="contact" className="bg-black/50">
            <div className="grid md:grid-cols-2 gap-12">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Let's <span className="text-purple-500">Connect</span>
                    </h2>
                    <p className="text-white/70 mb-8 leading-relaxed">
                        I'm currently available for freelance work and full-time opportunities.
                        If you have a project that needs some creative touch, or just want to say hi,
                        feel free to send me a message.
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4 text-white/80">
                            <div className="p-3 rounded-full bg-white/5 border border-white/10">
                                <Mail className="w-5 h-5 text-cyan-400" />
                            </div>
                            <span>vishnukati@gmail.com</span>
                        </div>
                        <div className="flex items-center gap-4 text-white/80">
                            <div className="p-3 rounded-full bg-white/5 border border-white/10">
                                <Phone className="w-5 h-5 text-purple-400" />
                            </div>
                            <span>+91-97383 94041</span>
                        </div>
                        <div className="flex items-center gap-4 text-white/80">
                            <div className="p-3 rounded-full bg-white/5 border border-white/10">
                                <MapPin className="w-5 h-5 text-pink-400" />
                            </div>
                            <span>Bangalore, India</span>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <Card className="p-8">
                        <form
                            action="https://formspree.io/f/xovgpawg"
                            method="POST"
                            className="space-y-6"
                        >
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-white/70">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500/50 transition-colors"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-white/70">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500/50 transition-colors"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-white/70">Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    required
                                    className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500/50 transition-colors"
                                    placeholder="Project Inquiry"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-white/70">Message</label>
                                <textarea
                                    name="message"
                                    required
                                    className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500/50 transition-colors h-32 resize-none"
                                    placeholder="Tell me about your project..."
                                />
                            </div>
                            <Button className="w-full" type="submit">Send Message</Button>
                        </form>
                    </Card>
                </motion.div>
            </div>
        </Section>
    );
}
