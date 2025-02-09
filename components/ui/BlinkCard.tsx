"use client"

import { motion } from "framer-motion";
import { MdGroup, MdArrowOutward } from "react-icons/md";

interface BlinkCardProps {
    name: string;
    description: string;
    players: string;
    link: string;
    logo: string;
}

export const BlinkCard: React.FC<BlinkCardProps> = ({ name, description, players, link, logo }) => {
    return (
        <motion.div
            className="relative overflow-hidden rounded-xl bg-neutral-800/30 backdrop-blur-xl p-6 group cursor-pointer"
            whileHover={{ scale: 1.02 }}
        >
            <div
                className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }}
            />
            <div className="relative flex flex-col items-center text-center">
                <div className="w-28 h-28 mb-4 flex items-center justify-center">
                    {logo ? (
                        <motion.img
                            src={logo}
                            alt={name}
                            className="w-full h-full object-contain"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        />
                    ) : (
                        <div className="text-4xl font-bold text-[#FF4081]">
                            {name.charAt(0)}
                        </div>
                    )}
                </div>
                <h3 className="text-lg font-bold text-white">{name}</h3>
                <p className="text-sm text-neutral-300 mb-4">{description}</p>
                <p className="text-xs text-emerald-500 mb-4">
                    <MdGroup className="inline mr-2" />
                    {players} players
                </p>
                <motion.div
                    className="w-full px-4 py-2 bg-[#6A1B9A] text-white rounded-lg flex items-center justify-center space-x-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => window.open(link, '_blank', 'noopener,noreferrer')}
                >
                    <span>Play Now</span>
                    <MdArrowOutward className="h-4 w-4" />
                </motion.div>
            </div>
        </motion.div>
    );
};