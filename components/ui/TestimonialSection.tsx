import React from 'react';
import { motion } from 'framer-motion';

interface TestimonialCardProps {
    content: string;
    author: string;
    handle: string;
    delay?: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ content, author, handle, delay = 0 }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
        className="relative overflow-hidden rounded-xl bg-neutral-800/30 backdrop-blur-xl p-6"
    >
        <div
            className="absolute inset-0 opacity-20"
            style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
        />
        <div className="relative space-y-4">
            <p className="text-neutral-200 text-sm leading-relaxed">{content}</p>
            <div className="flex items-center space-x-2">
                <div className="flex flex-col">
                    <span className="text-[#FF4081] font-medium">{author}</span>
                    <span className="text-neutral-400 text-sm">{handle}</span>
                </div>
            </div>
        </div>
    </motion.div>
);

export const TestimonialsSection = () => {
    const testimonials = [
        {
            content: "We will earn the love and respect.",
            author: "NIXARCADE",
            handle: "@NIXARCADE"
        },
    ];

    return (
        <div className="relative w-full bg-neutral-900 py-16 px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="inline-block text-4xl font-bold text-white px-4 py-2">
                        Love and Respect❤️
                    </h2>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard
                            key={index}
                            {...testimonial}
                            delay={index * 0.1}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};