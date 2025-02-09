import { BlinksGrid } from "@/components/BlinksGrid";
import GameGrid from "@/components/GameGrid";
import { Footer } from "@/components/ui/Footer";
import { GrainOverlay } from "@/components/ui/GrainOverlay";
import { Navbar } from "@/components/ui/Navbar";
import { SubmitIdea } from "@/components/ui/SubmitIdea";

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
            <section id="games" className="pt-32 pb-6">
                <h1 className="text-4xl font-bold text-black text-center anime-font">
                    Games
                </h1>
                <GameGrid />
            </section>

            <section id="blinks" className="pt-8 pb-6">
                <h1 className="text-4xl font-bold text-black text-center anime-font">
                    Blinks
                </h1>
                <BlinksGrid />
            </section>

            <section id="submit-idea" className="pt-8 pb-6">
                <h1 className="text-4xl font-bold text-black text-center anime-font">
                    Submit Idea
                </h1>
                <SubmitIdea />
            </section>
            <Footer />
        </div>
    )
}
