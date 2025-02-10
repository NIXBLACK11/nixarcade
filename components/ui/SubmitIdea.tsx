"use client"

import { motion } from "framer-motion";
import { FaTwitter } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";

export const SubmitIdea = () => {
    const handleRedirect = () => {
        window.open('https://x.com/NIXBLACK_', '_blank', 'noopener,noreferrer');
    };

    return (
        <div className="w-full max-w-2xl mx-auto px-4">
            <motion.div
                className="relative overflow-hidden rounded-xl bg-neutral-800/30 backdrop-blur-xl p-8 text-center"
                whileHover={{ scale: 1.02 }}
            >
                <div
                    className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                    }}
                />
                <div className="relative space-y-4">
                    <div className="w-16 h-16 bg-[#FF4081]/10 rounded-full mx-auto flex items-center justify-center mb-6">
                        <FaTwitter className="w-8 h-8 text-[#FF4081]" />
                    </div>

                    <h2 className="text-2xl font-bold text-white anime-font">
                        Submit Your Game Idea
                    </h2>

                    <p className="text-neutral-300 max-w-lg mx-auto">
                        {`Have an awesome game idea? We'd love to hear it! Connect with us on X (Twitter) to share your vision and join our gaming community.`}
                    </p>

                    <motion.button
                        onClick={handleRedirect}
                        className="mt-6 px-8 py-3 bg-[#6A1B9A] text-white rounded-full inline-flex items-center space-x-2 hover:bg-[#FF4081] transition-colors duration-200"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <span>Share Your Idea</span>
                        <MdArrowOutward className="w-5 h-5" />
                    </motion.button>
                </div>
            </motion.div>
        </div>
    );
};