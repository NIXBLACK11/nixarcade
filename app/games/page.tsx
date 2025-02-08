import { GrainOverlay } from "@/components/ui/GrainOverlay";
import { Navbar } from "@/components/ui/Navbar";

export default function Games() {
    return (
        <div className="w-screen h-screen bg-black inset-0"
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
            
        </div>
    )
}