import { Program, IdlAccounts } from "@coral-xyz/anchor";
import idl from "./game_wager.json";
import type { GameWager } from "./game_wager";
import { Connection, clusterApiUrl } from "@solana/web3.js";

const connection = new Connection(clusterApiUrl("devnet"), "confirmed");

export const program = new Program<GameWager>(idl as GameWager, { connection });

export type PollingData = IdlAccounts<GameWager>['game'];