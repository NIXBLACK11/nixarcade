import React from 'react';
import { MdArrowOutward } from 'react-icons/md';

export const Footer = () => {
	const navigation = [
		{ name: 'Ideas', href: 'https://nextjs.org/' },
		{ name: 'VCs & Funds', href: '/funds' },
		{ name: 'Grants', href: '/grants' },
		{ name: 'Bounties', href: '/bounties' },
		{ name: 'Jobs', href: '/jobs' },
		{ name: 'Support', href: '/support' }
	];

	return (
		<footer className="relative w-full bg-neutral-900">
			<div
				className="absolute inset-0 opacity-20"
				style={{
					backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
				}}
			/>

			<div className="relative max-w-7xl mx-auto py-12 px-6">
				<div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
					<div className="flex items-center space-x-2">
						<img className="w-8 h-8 rounded-md" src="mainlogo.png" />
						<span className="text-white font-bold text-4xl anime-font">Nixarcade</span>
					</div>

					<nav className="flex flex-wrap justify-center gap-x-8 gap-y-4">
						{navigation.map((item) => (
							<a
								key={item.name}
								href={item.href}
								className="text-neutral-400 hover:text-[#FF4081] transition-colors duration-200 text-sm font-medium"
							>
								{item.name}
							</a>
						))}
					</nav>
				</div>

				<div className="mt-12 pt-8 border-t border-neutral-800">
					<div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
						<p className="text-neutral-400 text-sm">
							© 2025 NIXARCADE. All rights reserved.
						</p>

						<div className="flex items-center space-x-2">
							<span className="text-neutral-400 text-sm">Made with</span>
							<span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#6A1B9A] text-white" onClick={() => window.open("https://nextjs.org/", "_blank")}>
								NEXT
								<MdArrowOutward className="ml-1 h-3 w-3" />
							</span>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};