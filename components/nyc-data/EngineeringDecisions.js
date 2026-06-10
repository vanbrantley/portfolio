export default function EngineeringDecisions() {
    return (
        <div className="px-6 max-w-3xl mx-auto space-y-5">
            <h2 className="text-2xl font-semibold mb-4">Engineering Decisions</h2>

            <p className="text-slate-600">
                The interesting parts of this project aren&apos;t the tools — they&apos;re the
                tradeoffs. Here are the decisions that shaped the architecture and why.
            </p>

            <div className="space-y-8 mt-6">

                <div className="space-y-2">
                    <h3 className="text-base font-semibold text-slate-800">
                        ELT over ETL
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                        Data lands in Snowflake raw before any transformation touches it. This
                        preserves source fidelity and makes the transformation layer independently
                        rerunnable without re-hitting the APIs. If the dbt logic changes, I can
                        reprocess the entire history from the raw layer without a single new API call.
                    </p>
                </div>

                <div className="space-y-2">
                    <h3 className="text-base font-semibold text-slate-800">
                        VARIANT Columns for Raw Payloads
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                        Source JSON is stored as Snowflake <code>VARIANT</code> rather than
                        flattened at ingest time. This decouples the ingestion layer from schema
                        changes — if TheirStack adds a field tomorrow, no ingestion code changes.
                        The staging layer handles extraction, so schema evolution is isolated to
                        one place.
                    </p>
                </div>

                <div className="space-y-2">
                    <h3 className="text-base font-semibold text-slate-800">
                        LLM Enrichment as a Separate Layer
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                        Running GPT-4o-mini against the raw layer rather than inline during
                        ingestion means enrichment can be rerun independently, the prompt can
                        be iterated without touching the pipeline, and partial failures are
                        isolated to individual postings rather than aborting the run. A posting
                        that fails enrichment doesn&apos;t take down the rest of the batch.
                    </p>
                </div>

                <div className="space-y-2">
                    <h3 className="text-base font-semibold text-slate-800">
                        Per-Query Ingestion Configs
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                        Each source is configured with explicit query labels —{" "}
                        <code>jsearch:Data Analyst</code>, <code>theirstack:Analytics Engineer</code>,
                        and so on — that flow through dbt all the way to the mart table as an{" "}
                        <code>ingestion_query</code> column. This makes it possible to analyze skill
                        demand and salary by query type, not just by source, without any post-hoc
                        inference about what a given posting was pulled for.
                    </p>
                </div>

                <div className="space-y-2">
                    <h3 className="text-base font-semibold text-slate-800">
                        Pipeline-Level Observability
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                        API credit tracking was a first-class concern, not an afterthought. Every
                        run writes credit consumption per source to a tracking table, which feeds
                        a burn rate forecast in the dashboard. On free-tier APIs, running out of
                        credits mid-month silently kills the pipeline — the forecast makes that
                        visible before it happens. The Pipeline Health page also surfaces enrichment
                        fill rates and confidence score distributions, so data quality issues are
                        caught at the monitoring layer rather than discovered downstream in analysis.
                    </p>
                </div>

                <div className="space-y-2">
                    <h3 className="text-base font-semibold text-slate-800">
                        Cross-Source Deduplication with Source Priority
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                        The same job posting frequently appears across all three sources. Rather
                        than a naive deduplication on job title and company, the dbt layer applies
                        a source priority hierarchy — Built In NYC &gt; TheirStack &gt; JSearch —
                        so that when duplicates are detected, the richest version of the record
                        is kept. This preserves salary and metadata fields that some sources carry
                        and others don&apos;t.
                    </p>
                </div>

            </div>
        </div>
    );
}