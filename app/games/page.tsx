import { BlinksGrid } from "@/components/BlinksGrid";
import GameGrid from "@/components/GameGrid";
import { Footer } from "@/components/ui/Footer";
import { GrainOverlay } from "@/components/ui/GrainOverlay";
import { Navbar } from "@/components/ui/Navbar";

export default function Games() {
    return (
        <div className="w-full min-h-screen bg-black overflow-x-hidden text-center"
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
            <h1 className="pt-32 pb-6 text-4xl font-bold text-black text-center anime-font">Games</h1>
            <GameGrid />
            <h1 className="pt-8 pb-6 text-4xl font-bold text-black text-center anime-font">Blinks</h1>
            <BlinksGrid />
            <div className="h-[10vh] w-full"></div>
            <Footer />
        </div>
    )
}
