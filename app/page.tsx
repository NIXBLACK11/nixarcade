import { GameScroll } from "@/components/GamesScroll";
import { DashboardAndSupport } from "@/components/DashboardAndSupport";

const GrainOverlay = () => (
    <div
        className="pointer-events-none fixed inset-0 opacity-20"
        style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
    />
);

export default function Home() {
	return (
		<div className="bg-[#000000] w-full h-screen">
			<GrainOverlay />
			<GameScroll />
			<DashboardAndSupport />
		</div>
	);
}
