import { useState } from "react";
import { createGame } from "@/lib/createGame";
import { motion } from "framer-motion";

export const CreateGameForm: React.FC<{ onBack: () => void, id: string, gameName: string, minPlayers: number, maxPlayers: number }> = ({
    onBack,
    id,
    gameName,
    minPlayers = 2,
    maxPlayers,
}) => {
    const [playersCount, setPlayersCount] = useState(minPlayers);
    const [onePlayerBid, setOnePlayerBid] = useState(1);
    const [gameCode, setGameCode] = useState("");

    const handleCreateGame = () => {
        if (!gameCode) {
            alert("Please enter a game code.");
            return;
        }
        if (onePlayerBid <= 0) {
            alert("Please enter a valid bid amount.");
            return;
        }
        if (!gameCode.trim()) {
            alert("Please enter a valid game code.");
            return;
        }
        createGame(id, gameCode, onePlayerBid, playersCount);
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative overflow-hidden rounded-xl bg-neutral-800/30 backdrop-blur-xl p-6"
        >
            <div className="absolute inset-0 opacity-20" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }} />
            <div className="relative space-y-4">
                <h3 className="text-lg font-bold text-white text-center">Create {gameName}</h3>

                <div className="space-y-4">
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

                    <div>
                        <label className="block text-neutral-300 text-sm mb-2">Number of Players</label>
                        <select
                            className="w-full px-4 py-2 rounded-lg bg-neutral-700 text-white border border-neutral-600 focus:border-[#FF4081] focus:outline-none"
                            value={playersCount}
                            onChange={(e) => setPlayersCount(Number(e.target.value))}
                        >
                            {Array.from({ length: maxPlayers - minPlayers + 1 }, (_, i) => minPlayers + i).map((num) => (
                                <option key={num} value={num}>{num}</option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className="block text-neutral-300 text-sm mb-2">Bid per Player</label>
                        <input
                            type="number"
                            className="w-full px-4 py-2 rounded-lg bg-neutral-700 text-white border border-neutral-600 focus:border-[#FF4081] focus:outline-none"
                            placeholder="1"
                            value={onePlayerBid}
                            min={1}
                            onChange={(e) => {
                                const value = Math.max(1, Number(e.target.value));
                                setOnePlayerBid(value);
                            }}
                        />
                    </div>

                    <div className="flex space-x-4">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full px-4 py-2 bg-[#FF4081] text-white rounded-lg"
                            onClick={handleCreateGame}
                        >
                            Create Game
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
            </div>
        </motion.div>
    );
};