import ArchitectureDiagram from "./ArchitectureDiagram";

export default function Architecture() {
    return (
        <div className="px-6 max-w-3xl mx-auto space-y-5">
            <h2 className="text-2xl font-semibold mb-4">Architecture</h2>

            <p>
                The <strong>NYC Data Job Market Tracker</strong> operates on a modular{" "}
                <strong>ELT (Extract, Load, Transform)</strong> architecture across four layers.
                Original source payloads are preserved unmodified at every stage — nothing is
                overwritten, and every transformation is independently rerunnable without
                re-hitting the APIs.
            </p>

            <div className="-mx-6 sm:mx-0">
                <ArchitectureDiagram />
            </div>

            <ul className="space-y-5">
                <li>
                    <strong>Ingestion Layer</strong>: A GitHub Actions cron job fires every
                    Monday and Thursday at 9am EDT, executing a Python ingestion client that
                    pulls from three sources simultaneously: the <strong>JSearch API</strong>{" "}
                    (RapidAPI), the <strong>TheirStack API</strong>, and a custom{" "}
                    <strong>Built In NYC scraper</strong> built with BeautifulSoup using a
                    two-pass approach — search page crawl followed by individual listing
                    parsing. A pre-ingestion deduplication check runs before any metered API
                    call is made, dropping duplicate postings before they consume credits.
                </li>

                <li>
                    <strong>Raw Storage Layer</strong>: All three sources write structured JSON
                    payloads into a dedicated Snowflake <code>RAW</code> database, partitioned
                    by source schema (<code>RAW.JSEARCH</code>, <code>RAW.THEIRSTACK</code>,{" "}
                    <code>RAW.BUILTIN</code>). A pipeline tracking schema (
                    <code>RAW.PIPELINE</code>) records every run with timestamps, row counts,
                    and per-source API credit consumption.
                </li>

                <li>
                    <strong>LLM Enrichment &amp; Transformation Layer</strong>: Rather than
                    relying on fragile regex to extract entities from unstructured job
                    descriptions, the pipeline routes each posting through{" "}
                    <strong>GPT-4o-mini</strong> with a structured extraction prompt. The
                    enrichment layer outputs a standardized JSON schema per posting — inferred
                    seniority, title inflation flag, role archetype, normalized skill arrays,
                    years of experience, and salary bands. From there, <strong>dbt</strong>{" "}
                    handles all schema normalization and cross-source unification across three
                    tiers: staging views, ephemeral intermediates, and a production mart table
                    (<code>FCT_JOB_POSTINGS</code>).
                </li>

                <li>
                    <strong>Analytics &amp; Visualization Layer</strong>: The mart table is
                    surfaced directly into <strong>Streamlit</strong> across three pages —
                    Market Insights (high-level findings), Job Explorer (filterable posting
                    grid with full enrichment metadata), and Pipeline Health (run history,
                    API credit burn rate, enrichment quality metrics).
                </li>
            </ul>
        </div>
    );
}

// export default function Architecture() {
//     return (
//         <div className="px-6 max-w-3xl mx-auto space-y-5">
//             <h2 className="text-2xl font-semibold mb-4">Architecture</h2>

//             {/* <p>
//                 The infrastructure is built on an <strong>ELT (Extract, Load,
//                     Transform)</strong> framework designed to ingest multi-source
//                 data, isolate it in a cloud data warehouse, and transform it for
//                 consumption.
//             </p> */}

//             {/* <p>Here is how the components interact: <strong>INSERT DIAGRAM</strong></p> */}

//             <p>The architectural diagram for this pipeline is currently being finalized
//                 to reflect the latest staging transformations. In the meantime, here
//                 is how the data flows through the ecosystem:
//             </p>

//             <p>The <strong>NYC Data Job Market Tracker</strong> operates on a modular ELT (Extract,
//                 Load, Transform) architecture designed to minimize API footprint
//                 while maximizing data integrity.
//             </p>

//             <ul>
//                 <li>
//                     <strong>Ingestion Layer</strong>: A custom Python web client acts as a two-pass crawler to extract unstructured job listings directly from targeted job boards. To maximize free-tier API tokens and system efficiency, the ingestion script routes data through a pre-ingestion deduplication layer before it ever hits the database.
//                 </li>

//                 <li>
//                     <strong>Storage & Raw Layer</strong>: Data is loaded directly into a dedicated Snowflake RAW database tier, ensuring that the original, un-mutated source data is permanently preserved and tracked.
//                 </li>

//                 <li>
//                     <strong>Transformation & AI Parsing Layer</strong>: To handle the messiness of unstructured job descriptions, an <strong>AI LLM integration</strong> reads directly from the Snowflake RAW layer. It executes natural language parsing to extract precise entities—like required skills, tooling, years of experience, and salary bands—and structures them into clean JSON. From there, <strong>dbt (Data Build Tool)</strong> normalizes schemas, handles missing values, and builds highly optimized analytics views.
//                 </li>

//                 <li>
//                     <strong>Analytics & Visualization</strong>: The final, transformed dbt models are surfaced directly into <strong>Streamlit</strong>, providing a live, dynamic dashboard that tracks real-time skill demand, salary bands, and hiring velocity across the five boroughs.
//                 </li>

//             </ul>

//         </div>
//     );
// }