import { useState } from "react";
import { joinGame } from "@/lib/joinGame";
import { motion } from "framer-motion";

export const JoinGameForm: React.FC<{ onBack: () => void; id: string, gameName: string }> = ({
    onBack,
    id,
    gameName,
}) => {
    const [gameCode, setGameCode] = useState("");

    const handleJoinGame = () => {
        if (!gameCode.trim()) {
            alert("Please enter a valid game code.");
            return;
        }
        joinGame(id, gameCode);
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative overflow-hidden rounded-xl bg-neutral-800/30 backdrop-blur-xl p-6"
        >
            <div
                className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }}
            />
            <div className="relative space-y-4">
                <h3 className="text-lg font-bold text-white text-center">Join {gameName}</h3>

                <div>
                    <label className="block text-neutral-300 text-sm mb-2">Game Code</label>
                    <input
                        type="text"
                        className="w-full px-4 py-2 rounded-lg bg-neutral-700 text-white border border-neutral-600 focus:border-[#FF4081] focus:outline-none"
                        placeholder="Enter game code"
                        value={gameCode}
                        onChange={(e) => setGameCode(e.target.value)}
                    />
                </div>

                <div className="flex space-x-4">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full px-4 py-2 bg-[#FF4081] text-white rounded-lg"
                        onClick={handleJoinGame}
                    >
                        Join Game
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full px-4 py-2 bg-neutral-600 text-white rounded-lg"
                        onClick={onBack}
                    >
                        Back
                    </motion.button>
                </div>
            </div>
        </motion.div>
    );
};
