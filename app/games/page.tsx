import GameGrid from "@/components/GameGrid";
import { GrainOverlay } from "@/components/ui/GrainOverlay";
import { Navbar } from "@/components/ui/Navbar";

export default function Games() {
    return (
        <div className="w-full min-h-screen bg-black overflow-x-hidden"
            style={{
                backgroundImage: "url('/bg7.jpg')",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundAttachment: "fixed",
            }}
        >
            <GrainOverlay />
            <Navbar />
            <GameGrid />
        </div>
    )
}
