export default function Architecture() {
    return (
        <div className="px-6 max-w-3xl mx-auto space-y-5">
            <h2 className="text-2xl font-semibold mb-4">Architecture</h2>

            {/* <p>
                The infrastructure is built on an <strong>ELT (Extract, Load,
                    Transform)</strong> framework designed to ingest multi-source
                data, isolate it in a cloud data warehouse, and transform it for
                consumption.
            </p> */}

            {/* <p>Here is how the components interact: <strong>INSERT DIAGRAM</strong></p> */}

            <p>The architectural diagram for this pipeline is currently being finalized
                to reflect the latest staging transformations. In the meantime, here
                is how the data flows through the ecosystem:
            </p>

            <p>The <strong>NYC Data Job Market Tracker</strong> operates on a modular ELT (Extract,
                Load, Transform) architecture designed to minimize API footprint
                while maximizing data integrity.
            </p>

            <ul>
                <li>
                    <strong>Ingestion Layer</strong>: A custom Python web client acts as a two-pass crawler to extract unstructured job listings directly from targeted job boards. To maximize free-tier API tokens and system efficiency, the ingestion script routes data through a pre-ingestion deduplication layer before it ever hits the database.
                </li>

                <li>
                    <strong>Storage & Raw Layer</strong>: Data is loaded directly into a dedicated Snowflake RAW database tier, ensuring that the original, un-mutated source data is permanently preserved and tracked.
                </li>

                <li>
                    <strong>Transformation & AI Parsing Layer</strong>: To handle the messiness of unstructured job descriptions, an <strong>AI LLM integration</strong> reads directly from the Snowflake RAW layer. It executes natural language parsing to extract precise entities—like required skills, tooling, years of experience, and salary bands—and structures them into clean JSON. From there, <strong>dbt (Data Build Tool)</strong> normalizes schemas, handles missing values, and builds highly optimized analytics views.
                </li>

                <li>
                    <strong>Analytics & Visualization</strong>: The final, transformed dbt models are surfaced directly into <strong>Tableau</strong>, providing a live, dynamic dashboard that tracks real-time skill demand, salary bands, and hiring velocity across the five boroughs.
                </li>

            </ul>

        </div>
    );
}