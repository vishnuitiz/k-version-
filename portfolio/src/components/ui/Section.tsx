import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    id: string;
    className?: string;
    children: React.ReactNode;
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
    ({ id, className, children, ...props }, ref) => {
        return (
            <section
                id={id}
                ref={ref}
                className={cn("py-20 md:py-32 relative overflow-hidden", className)}
                {...props}
            >
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    {children}
                </div>
            </section>
        );
    }
);
Section.displayName = "Section";

export { Section };
