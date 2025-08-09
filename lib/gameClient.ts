import { BN, web3 } from "@coral-xyz/anchor";
import { program } from "./contract";
import { Connection } from "@solana/web3.js";
import { SendTransactionOptions } from "@solana/wallet-adapter-base";

// Helper to get PDA for a game
export function getGameAccount(gameCode: number, gameType: number) {
    return web3.PublicKey.findProgramAddressSync(
        [
            Buffer.from("game"),
            Buffer.from([gameCode]),
            Buffer.from([gameType])
        ],
        program.programId
    )[0];
}

// Initialize a new game
export const initializeGame = async (
    publicKey: web3.PublicKey,
    sendTransaction: (
        transaction: web3.Transaction | web3.VersionedTransaction,
        connection: Connection,
        options?: SendTransactionOptions
    ) => Promise<web3.TransactionSignature>,
    connection: Connection,
    gameCode: number,
    gameType: number,
    wager: number,
    numPlayers: number
) => {
    const gameAccount = getGameAccount(gameCode, gameType);
    const lamports = new BN(wager * web3.LAMPORTS_PER_SOL);

    const transaction = await program.methods
        .initializeGame(gameCode, gameType, lamports, numPlayers)
        .accounts({
            firstPlayer: publicKey,
            gameAccount,
        })
        .transaction();

    const transactionSignature = await sendTransaction(transaction, connection);
    await connection.confirmTransaction(transactionSignature, "confirmed");

    const gameData = await program.account.game.fetch(gameAccount);
    return gameData;
};

// Join an existing game
export const joinGame = async (
    publicKey: web3.PublicKey,
    sendTransaction: (
        transaction: web3.Transaction | web3.VersionedTransaction,
        connection: Connection,
        options?: SendTransactionOptions
    ) => Promise<web3.TransactionSignature>,
    connection: Connection,
    gameCode: number,
    gameType: number
) => {
    const gameAccount = getGameAccount(gameCode, gameType);

    const transaction = await program.methods
        .joinGame(gameCode, gameType)
        .accounts({
            player: publicKey,
            gameAccount,
        })
        .transaction();

    const transactionSignature = await sendTransaction(transaction, connection);
    await connection.confirmTransaction(transactionSignature, "confirmed");

    const gameData = await program.account.game.fetch(gameAccount);
    return gameData;
};
