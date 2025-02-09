import { blinks } from "@/app/constants";
import { BlinkCard } from "./ui/BlinkCard";
import { AnimatePresence } from "framer-motion";

export const BlinksGrid = () => {
    return (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 px-10 max-w-screen">
            <AnimatePresence mode="wait">
                {blinks.map((blink) => (
                    <BlinkCard
                        key={blink.id}
                        name={blink.name}
                        description={blink.description}
                        players={blink.players}
                        link={blink.link}
                        logo={blink.logo}
                    />
                ))}
            </AnimatePresence>
        </div>
    );
};