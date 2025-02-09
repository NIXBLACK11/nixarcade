import { motion } from "framer-motion";
import { MdGroup } from "react-icons/md";

interface GameCardProps {
    id: string;
    name: string;
    description: string;
    imageUrl: string;
    players: string;
    setCreatingGame: React.Dispatch<React.SetStateAction<string | null>>;
    setJoinType: React.Dispatch<React.SetStateAction<string | null>>;
}

export const GameCard: React.FC<GameCardProps> = ({ id, name, description, imageUrl, players, setCreatingGame, setJoinType }) => {
    return (
        <motion.div
            className="relative overflow-hidden rounded-xl bg-neutral-800/30 backdrop-blur-xl p-6 group"
            whileHover={{ scale: 1.02 }}
        >
            <div
                className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }}
            />
            <div className="relative flex flex-col items-center text-center">
                <img src={imageUrl} alt={name} className="w-28 h-28 object-contain mb-4" />
                <h3 className="text-lg font-bold text-white">{name}</h3>
                <p className="text-sm text-neutral-300 mb-4">{description}</p>
                <p className="text-xs text-emerald-500 mb-4">
                    <MdGroup className="inline mr-2" />
                    {players} players
                </p>
                <div className="flex space-x-4">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-4 py-2 bg-[#6A1B9A] text-white rounded-lg"
                        onClick={() => {
                            setCreatingGame(id);
                            setJoinType("join");
                        }}
                    >
                        Join Game
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-4 py-2 bg-[#FF4081] text-white rounded-lg"
                        onClick={() => {
                            setCreatingGame(id);
                            setJoinType("create");
                        }}
                    >
                        Create Game
                    </motion.button>
                </div>
            </div>
        </motion.div>
    );
};