"use client"

import React from 'react';
import { StatCard } from './ui/StatCard';
import { CompanyCard } from './ui/CompanyCard';
import { Footer } from './ui/Footer';
import { TestimonialsSection } from './ui/TestimonialSection';

const UserIcon = () => (
    <svg viewBox="0 0 24 24" className="h-4 w-4 text-[#6A1B9A]" fill="currentColor">
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
    </svg>
);

const GameIcon = () => (
    <svg viewBox="0 0 24 24" className="h-4 w-4 text-[#6A1B9A]" fill="currentColor">
        <path d="M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-10 7H8v3H6v-3H3v-2h3V8h2v3h3v2zm4.5 2c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4-3c-.83 0-1.5-.67-1.5-1.5S18.67 9 19.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
    </svg>
);

const ChartIcon = () => (
    <svg viewBox="0 0 24 24" className="h-4 w-4 text-[#6A1B9A]" fill="currentColor">
        <path d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z" />
    </svg>
);

export const DashboardAndSupport = () => {
    const stats = {
        totalUsers: 150,
        activeUsers: 25,
        totalGames: 260,
        averageGamesPerUser: 2,
        gamesLastWeek: 7,
        userGrowth: '+1.3%'
    };

    const companies = [
        {
            imageUrl: "companies/superteam.png",
            name: "Superteam India",
            description: "Thanks for the awesome community! ❤️",
            link: "https://superteam.fun/"
        },
        {
            imageUrl: "companies/dialect.png",
            name: "Dialect",
            description: "For the awesome product that made our game shareable.",
            link: "https://www.dialect.to/"
        },
        {
            imageUrl: "companies/solana.png",
            name: "Solana Foundation",
            description: "An awesome tool and the best chain, for real.",
            link: "https://solana.org/"
        },
        {
            imageUrl: "companies/coindcx.png",
            name: "CoinDCX",
            description: "For the grant and community that got me started.",
            link: "https://coindcx.com/"
        },
        {
            imageUrl: "companies/nixblack.jpg",
            name: "NIXBLACK",
            description: "Founder",
            link: "http://x.com/NIXBLACK_"
        },
        {
            imageUrl: "companies/rocky.jpg",
            name: "ROCKY",
            description: "Co-Founder",
            link: "https://x.com/r0ckYr"
        },
    ];


    return (
        <div className="relative">
            {/* Stats Section */}
            <div className="relative w-full min-h-screen bg-neutral-900 p-8">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-4xl font-bold text-white mb-12 text-center">Platform Statistics</h1>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        <StatCard
                            title="Total Users"
                            value={stats.totalUsers.toLocaleString()}
                            subValue={stats.activeUsers.toLocaleString()}
                            subLabel="Active"
                            icon={UserIcon}
                            trend={stats.userGrowth + ' from last month'}
                        />
                        <StatCard
                            title="Total Games Played"
                            value={stats.totalGames.toLocaleString()}
                            subValue={stats.gamesLastWeek.toLocaleString()}
                            subLabel="Last week"
                            icon={GameIcon} trend={undefined} />
                        <StatCard
                            title="Average Games per User"
                            value={stats.averageGamesPerUser}
                            subLabel="Games per active user"
                            icon={ChartIcon} subValue={undefined} trend={undefined} />
                    </div>
                    <h1 className="text-4xl font-bold text-white mb-12 text-center mt-10">Proudly Partnered With</h1>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {companies.map((company, index) => (
                            <CompanyCard key={index} {...company} />
                        ))}
                    </div>
                    <TestimonialsSection />
                </div>
            </div>
            <Footer />
        </div>
    );
};