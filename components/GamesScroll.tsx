"use client"

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useRef, useState } from "react";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { GrAndroid } from "react-icons/gr";
import { useRouter } from 'next/navigation';
import { GrainOverlay } from "./ui/GrainOverlay";

export const GameScroll = () => {
    const games = [
        {
            logo: "mainlogo.png",
            title: "NIXARCADE",
            description: "Your Hub for Classic Board Games, Anytime, Anywhere.",
        },
        {
            logo: "Ludo.png",
            title: "LUDO",
            description: "Roll the dice and relive the nostalgia of Ludo.",
        },
        {
            logo: "tictactoe.png",
            title: "TIC TAC TOE",
            description: "Think, strategize, and win the ultimate X-O battle.",
        },
        {
            logo: "s&l.png",
            title: "SNAKE & LADDER",
            description: "Climb the ladders, avoid the snakes, and win the race!",
        },
        {
            logo: "monopoly.png",
            title: "MONOPOLY",
            description: "Build your empire, collect rent, and dominate the board.",
        },
        {
            logo: "chess.png",
            title: "CHESS",
            description: "Outthink and outplay in the ultimate strategy game.",
        },
        {
            logo: "qwerty.png",
            title: "QWERTY",
            description: "A speed game that challenges your typing skills.",
        },
        {
            logo: "roulette.png",
            title: "ROULETTE",
            description: "Spin the wheel and test your luck in this classic casino game.",
        },
    ];

    const router = useRouter();
    const containerRef = useRef<HTMLDivElement>(null);
    const [currentGame, setCurrentGame] = useState(games[0]);

    const { scrollYProgress } = useScroll({
        target: containerRef,
    });

    useMotionValueEvent(scrollYProgress, "change", (value) => {
        const totalLength = games.length;
        const scrollIndex = Math.floor(value * (totalLength - 1));
        setCurrentGame(games[scrollIndex]);
    });

    return (
        <div ref={containerRef} className="relative bg-black w-full h-[400vh] "
            style={{
                backgroundImage: "url('bg3.jpg')",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundAttachment: "fixed",
            }}
        >
            <GrainOverlay />
            <div className="fixed top-0 left-0 w-full h-screen flex items-center justify-center">
                <div className="w-5/6 h-[80vh] flex flex-row">
                    <div className="w-full h-full flex flex-col items-center justify-start">
                        <h1 className="text-5xl pt-20 text-center text-white">Welcome to</h1>
                        <p className="text-8xl pt-10 text-center text-[#FF4081] font-anime">
                            {currentGame.title}
                        </p>
                        <p className="text-4xl pt-10 text-center text-white">
                            {currentGame.description}
                        </p>
                        <div className="flex flex-row">
                            <FaGithub
                                className="m-8 text-4xl text-white hover:text-[#FF4081]"
                                onClick={() => window.open("https://github.com/NIXBLACK11/Nixarcade", "_blank")}
                            />
                            <FaTwitter
                                className="m-8 text-4xl text-white hover:text-[#FF4081]"
                                onClick={() => window.open("https://x.com/NIXARCADE", "_blank")}
                            />
                            <GrAndroid
                                className="m-8 text-4xl text-white hover:text-[#FF4081]"
                                onClick={() =>
                                    window.open("https://expo.dev/accounts/r0ckyr/projects/Nixarcade/builds/ad4e50b7-22d2-4855-995c-9f137ebb4810", "_blank")
                                }
                            />
                        </div>
                        <motion.div className="flex items-center justify-center bg-[#6A1B9A] rounded-full p-2" whileHover={{ scale: 0.9 }}>
                            <div
                                className="text-white text-3xl font-custom"
                                onClick={() => router.push("/games")}
                            >
                                Go to games
                            </div>
                        </motion.div>
                    </div>
                    <div className="w-full h-full flex justify-center items-center">
                        <img src={currentGame.logo} className="img-hover" width={500} alt="Logo" />
                    </div>
                </div>
            </div>
        </div>
    );
};
