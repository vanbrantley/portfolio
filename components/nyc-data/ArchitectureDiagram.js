export default function ArchitectureDiagram() {
    return (
        <svg width="100%" viewBox="0 0 680 620" role="img">
            <title>NYC Data Job Market Tracker pipeline architecture</title>
            <desc>
                Four-layer ELT pipeline: three ingestion sources feed separate Snowflake RAW
                schemas, which flow through LLM enrichment and dbt transformations into a mart
                table, then into a three-page Streamlit dashboard.
            </desc>
            <defs>
                <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M2 1L8 5L2 9" fill="none" stroke="context-stroke" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </marker>
            </defs>

            {/* Layer labels */}
            <text fontSize="10" fill="#94a3b8" x="36" y="68" textAnchor="middle" transform="rotate(-90,36,68)">Ingestion</text>
            <text fontSize="10" fill="#94a3b8" x="36" y="195" textAnchor="middle" transform="rotate(-90,36,195)">Raw</text>
            <text fontSize="10" fill="#94a3b8" x="36" y="335" textAnchor="middle" transform="rotate(-90,36,335)">Transform</text>
            <text fontSize="10" fill="#94a3b8" x="36" y="490" textAnchor="middle" transform="rotate(-90,36,490)">Dashboard</text>

            {/* Dividers */}
            <line x1="56" y1="120" x2="640" y2="120" stroke="#e2e8f0" strokeWidth="0.5" strokeDasharray="4 4" />
            <line x1="56" y1="250" x2="640" y2="250" stroke="#e2e8f0" strokeWidth="0.5" strokeDasharray="4 4" />
            <line x1="56" y1="420" x2="640" y2="420" stroke="#e2e8f0" strokeWidth="0.5" strokeDasharray="4 4" />

            {/* ── INGESTION ── */}
            {/* JSearch */}
            <rect x="68" y="34" width="148" height="56" rx="8" fill="#E6F1FB" stroke="#378ADD" strokeWidth="0.5" />
            <text x="142" y="57" textAnchor="middle" dominantBaseline="central" fontSize="14" fontWeight="500" fill="#0C447C">JSearch API</text>
            <text x="142" y="75" textAnchor="middle" dominantBaseline="central" fontSize="12" fill="#185FA5">RapidAPI · 200/mo</text>

            {/* TheirStack */}
            <rect x="266" y="34" width="148" height="56" rx="8" fill="#E6F1FB" stroke="#378ADD" strokeWidth="0.5" />
            <text x="340" y="57" textAnchor="middle" dominantBaseline="central" fontSize="14" fontWeight="500" fill="#0C447C">TheirStack API</text>
            <text x="340" y="75" textAnchor="middle" dominantBaseline="central" fontSize="12" fill="#185FA5">200 credits/mo</text>

            {/* Built In NYC */}
            <rect x="464" y="34" width="160" height="56" rx="8" fill="#E6F1FB" stroke="#378ADD" strokeWidth="0.5" />
            <text x="544" y="57" textAnchor="middle" dominantBaseline="central" fontSize="14" fontWeight="500" fill="#0C447C">Built In NYC</text>
            <text x="544" y="75" textAnchor="middle" dominantBaseline="central" fontSize="12" fill="#185FA5">BeautifulSoup scraper</text>

            {/* Ingestion → Raw arrows */}
            <line x1="142" y1="90" x2="142" y2="144" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#arrow)" />
            <line x1="340" y1="90" x2="340" y2="144" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#arrow)" />
            <line x1="544" y1="90" x2="544" y2="144" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#arrow)" />

            {/* ── RAW LAYER ── */}
            {/* RAW.JSEARCH */}
            <rect x="68" y="144" width="148" height="56" rx="8" fill="#E1F5EE" stroke="#1D9E75" strokeWidth="0.5" />
            <text x="142" y="167" textAnchor="middle" dominantBaseline="central" fontSize="14" fontWeight="500" fill="#085041">RAW.JSEARCH</text>
            <text x="142" y="185" textAnchor="middle" dominantBaseline="central" fontSize="12" fill="#0F6E56">SRC_POSTINGS</text>

            {/* RAW.THEIRSTACK */}
            <rect x="266" y="144" width="148" height="56" rx="8" fill="#E1F5EE" stroke="#1D9E75" strokeWidth="0.5" />
            <text x="340" y="167" textAnchor="middle" dominantBaseline="central" fontSize="14" fontWeight="500" fill="#085041">RAW.THEIRSTACK</text>
            <text x="340" y="185" textAnchor="middle" dominantBaseline="central" fontSize="12" fill="#0F6E56">SRC_POSTINGS</text>

            {/* RAW.BUILTIN */}
            <rect x="464" y="144" width="160" height="56" rx="8" fill="#E1F5EE" stroke="#1D9E75" strokeWidth="0.5" />
            <text x="544" y="167" textAnchor="middle" dominantBaseline="central" fontSize="14" fontWeight="500" fill="#085041">RAW.BUILTIN</text>
            <text x="544" y="185" textAnchor="middle" dominantBaseline="central" fontSize="12" fill="#0F6E56">SRC_POSTINGS</text>

            {/* RAW → converge to enrichment */}
            <line x1="142" y1="200" x2="142" y2="224" stroke="#94a3b8" strokeWidth="1.5" />
            <line x1="340" y1="200" x2="340" y2="256" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#arrow)" />
            <line x1="544" y1="200" x2="544" y2="224" stroke="#94a3b8" strokeWidth="1.5" />
            <path d="M142 224 L340 224" fill="none" stroke="#94a3b8" strokeWidth="1.5" />
            <path d="M544 224 L340 224" fill="none" stroke="#94a3b8" strokeWidth="1.5" />

            {/* ── TRANSFORM LAYER ── */}
            {/* LLM Enrichment */}
            <rect x="192" y="256" width="296" height="56" rx="8" fill="#FAEEDA" stroke="#BA7517" strokeWidth="0.5" />
            <text x="340" y="279" textAnchor="middle" dominantBaseline="central" fontSize="14" fontWeight="500" fill="#633806">GPT-4o-mini enrichment</text>
            <text x="340" y="297" textAnchor="middle" dominantBaseline="central" fontSize="12" fill="#854F0B">ENRICHED.JOB_ENRICHMENT</text>

            {/* Enrichment → dbt */}
            <line x1="340" y1="312" x2="340" y2="344" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#arrow)" />

            {/* dbt */}
            <rect x="192" y="344" width="296" height="56" rx="8" fill="#FAEEDA" stroke="#BA7517" strokeWidth="0.5" />
            <text x="340" y="367" textAnchor="middle" dominantBaseline="central" fontSize="14" fontWeight="500" fill="#633806">dbt transformations</text>
            <text x="340" y="385" textAnchor="middle" dominantBaseline="central" fontSize="12" fill="#854F0B">Staging → Intermediate → Mart</text>

            {/* dbt → FCT */}
            <line x1="340" y1="400" x2="340" y2="432" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#arrow)" />

            {/* FCT_JOB_POSTINGS */}
            <rect x="192" y="432" width="296" height="44" rx="8" fill="#EAF3DE" stroke="#639922" strokeWidth="0.5" />
            <text x="340" y="454" textAnchor="middle" dominantBaseline="central" fontSize="13" fontWeight="500" fill="#27500A">ANALYTICS_PROD.FCT_JOB_POSTINGS</text>

            {/* Mart → diverge to dashboard */}
            <line x1="340" y1="476" x2="340" y2="504" stroke="#94a3b8" strokeWidth="1.5" />
            <path d="M176 504 L504 504" fill="none" stroke="#94a3b8" strokeWidth="1.5" />
            <line x1="176" y1="504" x2="176" y2="520" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#arrow)" />
            <line x1="340" y1="504" x2="340" y2="520" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#arrow)" />
            <line x1="504" y1="504" x2="504" y2="520" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#arrow)" />

            {/* ── DASHBOARD LAYER ── */}
            {/* Market Insights */}
            <rect x="80" y="520" width="188" height="56" rx="8" fill="#EEEDFE" stroke="#7F77DD" strokeWidth="0.5" />
            <text x="174" y="543" textAnchor="middle" dominantBaseline="central" fontSize="14" fontWeight="500" fill="#3C3489">Market Insights</text>
            <text x="174" y="561" textAnchor="middle" dominantBaseline="central" fontSize="12" fill="#534AB7">Skills, salary, inflation</text>

            {/* Job Explorer */}
            <rect x="246" y="520" width="188" height="56" rx="8" fill="#EEEDFE" stroke="#7F77DD" strokeWidth="0.5" />
            <text x="340" y="543" textAnchor="middle" dominantBaseline="central" fontSize="14" fontWeight="500" fill="#3C3489">Job Explorer</text>
            <text x="340" y="561" textAnchor="middle" dominantBaseline="central" fontSize="12" fill="#534AB7">Filterable posting grid</text>

            {/* Pipeline Health */}
            <rect x="412" y="520" width="188" height="56" rx="8" fill="#EEEDFE" stroke="#7F77DD" strokeWidth="0.5" />
            <text x="506" y="543" textAnchor="middle" dominantBaseline="central" fontSize="14" fontWeight="500" fill="#3C3489">Pipeline Health</text>
            <text x="506" y="561" textAnchor="middle" dominantBaseline="central" fontSize="12" fill="#534AB7">API credits, run history</text>
        </svg>
    );
}