"use client"

import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { GameCard } from './ui/GameCard';
import { games } from '@/app/constants';
import { CreateGameForm } from './ui/CreateGameForm';
import { JoinGameForm } from './ui/JoinGameForm';


export const GameGrid = () => {
    const [creatingGame, setCreatingGame] = useState<string | null>(null);
    const [joinType, setJoinType] = useState<string | null>(null);

    return (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 px-10 py-32 max-w-screen">
            <AnimatePresence mode="wait">
                {games.map((game) =>
                    creatingGame === game.id ? (
                        joinType === "join" ? (
                            <JoinGameForm key={game.id} onBack={() => {setCreatingGame(null); setJoinType(null)}} id={game.id} gameName={game.title}/>
                        ) : (
                            <CreateGameForm key={game.id} onBack={() => {setCreatingGame(null); setJoinType(null)}} id={game.id} gameName={game.title} minPlayers={game.minPlayers} maxPlayers={game.maxPlayers}/>
                        )
                    ) : (
                        <GameCard
                            key={game.id}
                            id={game.id}
                            name={game.title}
                            description={game.description}
                            imageUrl={game.logo}
                            players={game.players}
                            setCreatingGame={setCreatingGame}
                            setJoinType={setJoinType}
                        />
                    )
                )}
            </AnimatePresence>
        </div>
    );
};

export default GameGrid;