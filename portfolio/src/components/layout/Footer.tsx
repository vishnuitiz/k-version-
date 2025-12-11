import { Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
    return (
        <footer className="py-8 border-t border-white/10 bg-black/50 backdrop-blur-md">
            <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-white/40 text-sm">
                    © {new Date().getFullYear()} Portfolio. All rights reserved.
                </p>

                <div className="flex items-center gap-6">
                    <a href="https://github.com/vishnuitiz" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors">
                        <Github className="w-5 h-5" />
                    </a>
                    <a href="https://linkedin.com/in/vishnuvardhan-s" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors">
                        <Linkedin className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </footer>
    );
}
