export default function Overview() {
    return (
        <div className="px-6 max-w-3xl mx-auto space-y-5">
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>

            <p>
                Every NHL front office aims to &quot;Draft for Value,&quot; but
                scouting success is notoriously difficult to quantify. Is a team
                &quot;good&quot; at drafting because they hit on a 1st-round
                superstar, or are they simply benefiting from their draft position?
            </p>

            <p>
                This project was born from a desire to capture organizational draft
                aptitude as a measurable KPI. By building a custom Value-Over-Expected
                (VOE) model, I moved beyond surface-level point totals to see which
                teams actually beat the historical &quot;draft curve.&quot;
            </p>

            <p>
                This analysis transitions from raw data scraping to an interactive
                diagnostic dashboard, ultimately using unsupervised learning to cluster
                teams into strategic profiles. The goal isn&apos;t just to rank teams, but
                to visualize the &quot;Drafting DNA&quot; of each franchise.
            </p>

        </div>
    );
}