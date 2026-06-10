export default function Overview() {
    return (
        <div className="px-6 max-w-3xl mx-auto space-y-5">
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>

            <p>
                I didn&apos;t build this to have a portfolio project. I built it because I needed answers.
            </p>

            <p>
                The NYC data job market is deliberately opaque. Titles are arbitrary. Seniority labels
                are inconsistent. &quot;Entry-level&quot; roles bury 3-year experience requirements in paragraph
                four of the description. I kept running into a decision I couldn&apos;t make cleanly with
                available information: where exactly should I be spending my learning hours, and which
                roles am I actually qualified for regardless of what the title says?
            </p>

            <p>
                So I engineered a system to tell me. Two investigations drove every architectural decision:
            </p>

            <ul className="list-disc pl-5 space-y-4">
                <li>
                    <strong>Investigation 1: The Dynamic Tech Stack &amp; Salary Matrix (The Engineering Evolution)</strong>
                    <p className="mt-1 text-gray-800">
                        <em>The Question:</em> Does the early-career market actually pay a financial premium
                        for modern engineering skills (<code>dbt</code>, <code>Snowflake</code>, <code>Airflow</code>),
                        or do traditional analytics stacks (<code>SQL</code>, <code>Excel</code>, <code>Tableau</code>)
                        offer a comparable baseline of stability?
                    </p>
                    <p className="mt-1 text-gray-800">
                        <em>The Focus:</em> Programmatically parsing unstructured job requirements to evaluate
                        whether the creeping demand for engineering skills correlates with a higher salary floor,
                        or if it is just noise. This tells me exactly where to allocate my learning hours for
                        the highest financial yield.
                    </p>
                </li>

                <li>
                    <strong>Investigation 2: The Seniority &amp; Title Deconstruction Layer (The Gatekeeping Audit)</strong>
                    <p className="mt-1 text-gray-800">
                        <em>The Question:</em> Are the boundaries between &quot;Entry-Level,&quot; &quot;Junior,&quot;
                        &quot;Analyst I/II,&quot; and &quot;Mid-Level&quot; real operational thresholds with distinct
                        compensation, or are they arbitrary labels masking identical technical expectations?
                    </p>
                    <p className="mt-1 text-gray-800">
                        <em>The Focus:</em> Mapping job titles against required years of experience and core
                        technical responsibilities extracted from description text. This audit provides a
                        data-backed rulebook for my daily job hunt — a green light to confidently apply for
                        &quot;Mid-Level&quot; roles when the underlying technical demand matches my actual
                        capabilities rather than the gatekept title.
                    </p>
                </li>
            </ul>
        </div>
    );
}

// export default function Overview() {
//     return (
//         <div className="px-6 max-w-3xl mx-auto space-y-5">
//             <h2 className="text-2xl font-semibold mb-4">Overview</h2>

//             <p>
//                 I launched this project to solve a deeply personal and technical challenge:
//                 I needed to remove the uncertainty of navigating the early-career data market
//                 in New York City. As a computer science graduate entering a job market rapidly
//                 shifting due to AI, I realized that job boards are flooded with arbitrary titles,
//                 wishy-washy seniority labels, and copy-pasted requirements.
//             </p>

//             <p>
//                 I didn&apos;t build this tracker just to have a portfolio project; I built it because
//                 I needed a data-driven engine to show me exactly where engineering capability meets
//                 financial stability.
//             </p>

//             <p>
//                 Instead of analyzing a static, historical CSV dataset, I engineered an automated,
//                 live data pipeline that ingests data directly from multiple job aggregators into a
//                 Snowflake data warehouse, modeling the unstructured text using dbt. To give the
//                 pipeline a clear analytical purpose, the entire architecture is built around
//                 answering two deep, narrative-driven investigations:
//             </p>

//             <ul className="list-disc pl-5 space-y-4">
//                 <li>
//                     <strong>Investigation 1: The Dynamic Tech Stack & Salary Matrix (The Engineering Evolution)</strong>
//                     <p className="mt-1 text-gray-800">
//                         <em>The Question:</em> Does the early-career market actually pay a financial premium for modern engineering skills (<code>dbt</code>, <code>Snowflake</code>, <code>Python</code>), or do traditional analytics stacks (<code>SQL</code>, <code>Excel</code>, <code>Tableau</code>) offer a comparable baseline of stability?
//                     </p>
//                     <p className="mt-1 text-gray-800">
//                         <em>The Focus:</em> Programmatically parsing and clustering unstructured job requirements into distinct archetypes (The Traditional Analyst vs. The Analytics Engineer vs. The Data Software Engineer) to evaluate if the creeping demand for engineering skills correlates with a higher salary floor, or if it is just noise. This tells me exactly where to allocate my learning hours for the highest financial yield.
//                     </p>
//                 </li>

//                 <li>
//                     <strong>Investigation 2: The Seniority & Title Deconstruction Layer (The Gatekeeping Audit)</strong>
//                     <p className="mt-1 text-gray-800">
//                         <em>The Question:</em> Are the boundaries between &quot;Entry-Level,&quot; &quot;Junior,&quot; &quot;Analyst I/II,&quot; and &quot;Mid-Level&quot; real operational thresholds with distinct compensation, or are they arbitrary labels masking identical technical expectations?
//                     </p>
//                     <p className="mt-1 text-gray-800">
//                         <em>The Focus:</em> Mapping stated job titles against required years of experience and core technical responsibilities extracted from the text. This audit provides a data-backed rulebook for my daily job hunt, giving me a green light to confidently apply for &quot;Mid-Level&quot; roles if the underlying technical demand matches my actual capabilities rather than the gatekept job title.
//                     </p>
//                 </li>
//             </ul>
//         </div>
//     );
// }