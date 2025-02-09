// import { solana, solanaTestnet, solanaDevnet } from '@reown/appkit/networks'
import { solanaDevnet } from '@reown/appkit/networks'
import type { AppKitNetwork } from '@reown/appkit/networks'
import { SolanaAdapter } from '@reown/appkit-adapter-solana/react'
import { PhantomWalletAdapter, SolflareWalletAdapter } from '@solana/wallet-adapter-wallets'


export const projectId = process.env.NEXT_PUBLIC_REOWN_APPKIT_ID!;

if (!projectId) {
  throw new Error('Project ID is not defined')
}

// export const networks = [solana, solanaTestnet, solanaDevnet] as [AppKitNetwork, ...AppKitNetwork[]]
export const networks = [solanaDevnet] as [AppKitNetwork, ...AppKitNetwork[]]

export const solanaWeb3JsAdapter = new SolanaAdapter({
  wallets: [new PhantomWalletAdapter(), new SolflareWalletAdapter()]
})