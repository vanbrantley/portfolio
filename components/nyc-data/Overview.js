export default function Overview() {
    return (
        <div className="px-6 max-w-3xl mx-auto space-y-5">
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>

            <p>
                I launched this project to solve a personal and technical challenge:
                I wanted to gain real-time, data-driven insights into the exact entry-level
                data job market I am currently navigating in New York City, while
                simultaneously upskilling within the Modern Data Stack.
            </p>

            <p>
                Instead of analyzing a static, historical CSV dataset, I am building an
                automated, live data infrastructure pipeline. To prevent this project from
                getting lost in a sea of raw data, the entire architecture is engineered
                around answering four specific investigative tracks:
            </p>

            <ul>
                <li>
                    <strong>The &quot;Skill-to-Dollar&quot; Correlation</strong>: Which technical tools
                    trigger an &quot;Entry Level&quot; tag but offer the highest salary
                    floor? (e.g., Does dbt or Snowflake correlate with a 15% higher
                    starting salary than Excel or PowerBI in NYC?)
                </li>

                <li>
                    <strong>The Market Velocity & &quot;Ghost Job&quot; Tracker</strong>:
                    How long do entry-level roles stay active in NYC before being removed?
                    By keeping the pipeline stateful, I can track records over time to
                    separate &quot;Fresh&quot; listings from stale ones.
                </li>

                <li>
                    <strong>The &quot;Experience Inflation&quot; Gap</strong>:
                    Quantifying exactly how many &quot;Entry Level&quot; tagged jobs
                    demand 3+ years of experience within the unstructured text of
                    the job description.
                </li>

                <li>
                    <strong>The Borough & Industry Heatmap</strong>: Mapping whether
                    the NYC market is strictly concentrated in Manhattan Finance, or
                    if there is an active surge in tech and healthcare sectors
                    across Brooklyn and Queens.
                </li>

            </ul>

        </div>
    );
}