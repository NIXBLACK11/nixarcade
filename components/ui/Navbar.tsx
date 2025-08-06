"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

export const Navbar = () => {
    const navigation = [
        { name: 'Games', href: '#games' },
        { name: 'Blinks', href: '#blinks' },
        { name: 'Submit Idea', href: '#submit-idea' },
    ];

    return (
        <div className="fixed top-0 z-50 w-screen h-[15vh] flex justify-center items-center">
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", duration: 0.8 }}
                className="bg-neutral-900 bg-opacity-25 w-fit md:w-[80%] h-auto md:h-[67%] rounded-full shadow-lg shadow-neutral-600 backdrop-blur-lg py-2 px-4 md:py-0 md:px-0"
            >
                <div className="h-full px-6 flex items-center">
                    <div className="hidden md:flex w-full items-center justify-between">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center space-x-2"
                        >
                            <img className="w-8 h-8 rounded-md" src="mainlogo.png" />
                            <span className="text-white font-bold text-xl anime-font">NIXARCADE</span>
                        </motion.div>

                        <nav className="flex items-center space-x-8">
                            {navigation.map((item) => (
                                <motion.a
                                    key={item.name}
                                    href={item.href}
                                    whileHover={{ scale: 1.05 }}
                                    className="text-neutral-200 hover:text-[#FF4081] transition-colors duration-200"
                                >
                                    {item.name}
                                </motion.a>
                            ))}
                        </nav>

                        <div className="flex items-center space-x-4">
                            <WalletMultiButton />
                        </div>
                    </div>

                    <div className="md:hidden flex justify-center">
                        <WalletMultiButton />
                    </div>
                </div>
            </motion.div>
        </div>
    );
};