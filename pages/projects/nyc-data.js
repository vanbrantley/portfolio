import Head from 'next/head';
import Hero from "@/components/nyc-data/Hero";
import StickySidebarNav from "@/components/nyc-data/StickySidebarNav";
import MobileNav from "@/components/nyc-data/MobileNav";
import Overview from "@/components/nyc-data/Overview";
import Architecture from "@/components/nyc-data/Architecture";
import Findings from '@/components/nyc-data/Findings';
import EngineeringDecisions from '@/components/nyc-data/EngineeringDecisions';

export default function NYCJobMarketPulse() {
    return (

        <>

            <Head>
                <title>NYC Data Job Market Pulse | Van Brantley</title>
            </Head>

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

                    {/* FINDINGS */}
                    <section id="findings" className="scroll-mt-24 px-6">
                        <Findings />
                    </section>

                    {/* ARCHITECTURE */}
                    <section id="architecture" className="scroll-mt-24 px-6">
                        <Architecture />
                    </section>

                    {/* ENGINEERING DECISIONS */}
                    <section id="engineering-decisions" className="scroll-mt-24 px-6">
                        <EngineeringDecisions />
                    </section>

                </main>
            </div>

        </>

    );
}