import ProjectHeader from "@/components/ProjectHeader";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <div className="py-6 px-6">
            <ProjectHeader
                title="NYC Data Job Market Pulse [In Progress]"
                subtitle="Data pipeline to investigate the entry-level data job market in NYC"
                image="/images/nyc-data.jpg"
            />
            <div className="w-full flex justify-center">
                <Link
                    href="https://github.com/vanbrantley/nyc-data-job-market-tracker"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-black hover:bg-neutral-800 text-white font-medium px-6 py-3 rounded-lg border border-neutral-800 transition-colors duration-200 shadow-sm"
                >
                    <Image
                        src="/images/github.svg"
                        alt="GitHub Logo"
                        width={20}
                        height={20}
                        className="invert"
                    />
                    <span className="text-white">View Project Code</span>
                </Link>
            </div>
        </div>
    );
}