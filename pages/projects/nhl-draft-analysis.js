import Hero from "@/components/nhl/Hero";
import DashboardPreview from "@/components/nhl/DashboardPreview";
import Overview from "@/components/nhl/Overview";
import KeyFindings from "@/components/nhl/KeyFindings";
import TeamClusters from "@/components/nhl/TeamClusters";
import Methodology from "@/components/nhl/Methodology";
import Conclusion from "@/components/nhl/Conclusion";

import StickySidebarNav from "@/components/nhl/StickySidebarNav";
import MobileNav from "@/components/nhl/MobileNav";

export default function NHLDraftAnalysis() {
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

                {/* DASHBOARD */}
                <section id="dashboard" className="scroll-mt-24 px-6">
                    <DashboardPreview />
                </section>

                {/* OVERVIEW */}
                <section id="overview" className="scroll-mt-24 px-6">
                    <Overview />
                </section>

                {/* METHODOLOGY */}
                <section id="methodology" className="scroll-mt-24 px-6">
                    <Methodology />
                </section>

                {/* TEAM CLUSTERS */}
                <section id="teams" className="scroll-mt-24 px-6">
                    <TeamClusters />
                </section>

                {/* KEY FINDINGS */}
                <section id="key-findings" className="scroll-mt-24 px-6">
                    <KeyFindings />
                </section>

                {/* CONCLUSION */}
                <section id="conclusion" className="scroll-mt-24 px-6">
                    <Conclusion />
                </section>

            </main>
        </div>
    );
}