export default function NextSteps() {
    return (
        <div className="px-6 max-w-3xl mx-auto space-y-5">
            <h2 className="text-2xl font-semibold mb-4">Next Steps</h2>

            <p>
                With the ingestion pipeline successfully writing to the cloud
                warehouse, the next phase of development focuses on the
                transformation and modeling layers:
            </p>

            <ul>
                <li>
                    <strong>dbt (Data Build Tool) Modeling</strong>: I will be
                    implementing dbt to handle modular SQL transformations, shifting
                    the data from the RAW schema into Staging, and finally building
                    clean, analytics-ready tables in a production Data Mart.
                </li>

                <li>
                    <strong>Programmatic AI Agent Integration</strong>: Rather than
                    relying on fragile, complex regular expressions (Regex) in
                    standard SQL to parse messy, unstructured job descriptions, I
                    plan to integrate an LLM/AI agent directly into the transformation
                    layer. Hooking up an automated text parsing client will allow for
                    highly accurate entity extraction of specific technical requirements
                    and year-of-experience metrics.
                </li>

                <li>
                    <strong>Analytics Layer</strong>: Connecting the final Snowflake analytics
                    mart to Tableau to build a live, updating diagnostic dashboard of the
                    NYC hiring landscape.
                </li>
            </ul>

        </div>
    );
}