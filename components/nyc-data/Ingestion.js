export default function Ingestion() {
    return (
        <div className="px-6 max-w-3xl mx-auto space-y-5">
            <h2 className="text-2xl font-semibold mb-4">Ingestion</h2>

            <p>
                The extraction and ingestion layer is fully operational and
                currently loading into production. Because I am leveraging
                free-tier tools, a major engineering hurdle was designing the
                pipeline to work around strict API pricing thresholds and rate
                limits without exhausting monthly tokens.
            </p>

            <ul>
                <li>
                    <strong>Multi-Source Extraction</strong>: A scheduled
                    <strong> GitHub Actions cron job</strong> executes my Python data
                    clients periodically to pull data from the JSearch API (limited to
                    200 monthly requests) and the TheirStack API (limited to 200
                    monthly credits). It simultaneously runs a custom, two-pass web
                    scraper (crawler + page-parser) to extract unstructured text directly
                    from Built In NYC.
                </li>

                <li>
                    <strong>The Pre-Ingestion Deduplication Trick</strong>: To prevent
                    identical job listings cross-posted on multiple job boards from consuming
                    my limited paid API tokens, I developed a workaround. The pipeline executes
                    a pre-pass check using TheirStack&apos;s free preview search layer. By
                    programmatically cross-referencing the job title, location, and technology
                    slugs, the script drops duplicate entries before hitting the metered token
                    endpoints.
                </li>

                <li>
                    <strong>The Raw Warehouse Target</strong>: Cleaned, structured JSON
                    payloads and raw scrape files are automatically appended into a RAW database
                    tier inside Snowflake via a secure Snowflake Python connection client.
                </li>
            </ul>

        </div>
    );
}