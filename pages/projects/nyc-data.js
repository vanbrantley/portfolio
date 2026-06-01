import Hero from "@/components/nyc-data/Hero";
import StickySidebarNav from "@/components/nyc-data/StickySidebarNav";
import MobileNav from "@/components/nyc-data/MobileNav";

import Overview from "@/components/nyc-data/Overview";
import Architecture from "@/components/nyc-data/Architecture";
import Ingestion from "@/components/nyc-data/Ingestion";
import NextSteps from "@/components/nyc-data/NextSteps";

export default function NYCJobMarketPulse() {
    return (
        <div className="relative flex">

            {/* Desktop navigation */}
            <StickySidebarNav />

            {/* Mobile navigation */}
            <MobileNav />

            {/* Main content */}
            <main className="w-full lg:pl-64 space-y-10 pb-40">

                {/* HERO */}
                <section id="hero" className="scroll-mt-6 px-6">
                    <Hero />
                </section>

                {/* OVERVIEW */}
                <section id="overview" className="scroll-mt-24 px-6">
                    <Overview />
                </section>

                {/* ARCHITECTURE */}
                <section id="architecture" className="scroll-mt-24 px-6">
                    <Architecture />
                </section>

                {/* INGESTION */}
                <section id="ingestion" className="scroll-mt-24 px-6">
                    <Ingestion />
                </section>

                {/* NEXT STEPS */}
                <section id="next-steps" className="scroll-mt-24 px-6">
                    <NextSteps />
                </section>


            </main>
        </div>
    );
}