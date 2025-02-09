"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { useAppKit, useAppKitAccount } from '@reown/appkit/react'
import { FaWallet } from 'react-icons/fa';

export const Navbar = () => {
    const navigation = [
        { name: 'Games', href: '/ideas' },
        { name: 'Blinks', href: '/funds' },
        { name: 'Submit Idea', href: '/grants' },
    ];

    const { open } = useAppKit();
    const { isConnected } = useAppKitAccount();

    return (
        <div className="fixed top-0 z-50 w-screen h-[15vh] flex justify-center items-center">
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", duration: 0.8 }}
                className="bg-neutral-900 w-[90%] md:w-[80%] h-[67%] rounded-full shadow-lg shadow-neutral-600 backdrop-blur-lg bg-opacity-95"
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
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                className="px-6 py-2 bg-white text-neutral-900 rounded-full font-medium hover:bg-[#FF4081] hover:text-white transition-colors duration-200"
                                onClick={() => {
                                    open();
                                }}
                            >
                                {isConnected ?
                                    <FaWallet /> :
                                    "Connect Wallet"
                                }
                            </motion.button>
                        </div>
                    </div>

                    <div className="md:hidden w-full flex justify-center">
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            className="px-6 py-2 bg-white text-neutral-900 rounded-full font-medium hover:bg-[#FF4081] hover:text-white transition-colors duration-200"
                            onClick={() => {
                                open();
                            }}
                        >
                            {isConnected ?
                                <FaWallet /> :
                                "Connect Wallet"
                            }
                        </motion.button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};