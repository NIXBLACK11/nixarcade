'use client'

import { createAppKit } from '@reown/appkit/react'
import React, { type ReactNode } from 'react'
import { networks, projectId, solanaWeb3JsAdapter } from './config'

// // Set up metadata
// const metadata = {
//   name: 'next-reown-appkit',
//   description: 'next-reown-appkit',
//   url: 'https://github.com/0xonerb/next-reown-appkit-ssr', // origin must match your domain & subdomain
//   icons: ['https://avatars.githubusercontent.com/u/179229932']
// }

// Create the modal
export const modal = createAppKit({
	adapters: [solanaWeb3JsAdapter],
	projectId,
	networks,
	//   metadata,
	themeMode: 'dark',
	features: {
		connectMethodsOrder: ['social', 'wallet'],
		socials: ['google', 'x'],
		analytics: true, // Optional - defaults to your Cloud configuration
		swaps: true,
		receive: true,
		send: true,
		history: true
	},
	themeVariables: {
		'--w3m-accent': '#FF4081'
	},
})

function ContextProvider({ children }: { children: ReactNode }) {
	return (
		<>{children}</>
	)
}

export default ContextProvider
