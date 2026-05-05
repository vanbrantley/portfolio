import Carousel from "./Carousel";

export default function DashboardPreview() {
    const images = [
        "/images/dashboard-1.png",
        "/images/dashboard-2.png",
        "/images/dashboard-3.png",
    ];

    return (
        <div className="px-6">
            <h2 className="text-2xl font-semibold mb-6 text-center">
                Dashboard Preview
            </h2>

            <Carousel images={images} />

            <div className="mt-6 text-center">
                <a
                    href="https://public.tableau.com/app/profile/van.brantley/viz/NHLDraftEfficiencyAnalysis2005-2017/Dashboard1?publish=yes"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                >
                    View Full Tableau Dashboard →
                </a>
            </div>
        </div>
    );
}