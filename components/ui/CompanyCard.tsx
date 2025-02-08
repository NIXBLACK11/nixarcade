import { motion } from "framer-motion";
import { MdArrowOutward } from "react-icons/md";

interface CompanyCardProps {
    name: string;
    description: string;
    imageUrl: string;
    link: string;
}

export const CompanyCard: React.FC<CompanyCardProps> = ({ name, description, imageUrl, link }) => {
    return (
        <motion.div
            className="relative overflow-hidden rounded-xl bg-neutral-800/30 backdrop-blur-xl p-6 group cursor-pointer"
            onClick={() => 
                window.open(link, '_blank', 'noopener,noreferrer')
            }
            whileHover={{ scale: 0.9 }}
        >
            <div
                className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }}
            />
            <MdArrowOutward className="absolute top-4 right-4 h-5 w-5 text-[#6A1B9A] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative flex flex-col items-center text-center">
                <img src={imageUrl} alt={name} className="w-28 h-28 object-contain mb-4" />
                <h3 className="text-lg font-bold text-white">{name}</h3>
                <p className="text-sm text-neutral-300">{description}</p>
            </div>
        </motion.div>
    );
};