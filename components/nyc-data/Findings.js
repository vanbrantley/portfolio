export default function Findings() {
    return (
        <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">Findings</h2>

            <div className="space-y-10">

                {/* Finding 1 */}
                <div className="pl-4 border-l-2 border-blue-500 space-y-3">
                    <h3 className="text-lg font-bold text-slate-800">
                        The Traditional Stack Carries a Salary Penalty
                    </h3>
                    <div className="flex items-baseline gap-2">
                        <span className="text-xl font-bold text-blue-600">$33,000</span>
                        <span className="text-md text-slate-500">median salary gap</span>
                    </div>
                    <p className="text-slate-600 leading-relaxed">
                        Postings explicitly requiring traditional analytics tooling — <code>Excel</code>, <code>Tableau</code>, <code>Power BI</code>, <code>SAS</code>, <code>Stata</code> — show a median salary of $87k. Postings that require none of those tools show a median of $120k. The modern stack premium is directionally positive but harder to isolate cleanly, because most modern stack roles also require <code>SQL</code> and <code>Python</code>, which don&apos;t fall neatly into either bucket. The cleaner signal is the penalty, not the premium: staying anchored to traditional tooling correlates strongly with a lower compensation floor.
                    </p>
                    <p className="text-slate-500 text-md italic">
                        The practical implication: engineering skills are not noise. They correlate with a materially higher salary floor.
                    </p>
                </div>

                {/* Finding 2 */}
                <div className="pl-4 border-l-2 border-blue-500 space-y-3">
                    <h3 className="text-lg font-bold text-slate-800">
                        57% of Senior-Titled Postings Are Misleading
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                        The LLM enrichment layer infers seniority from actual requirements, independent of the job title. When that inferred seniority is compared against what the title claims, 57% of postings labeled &quot;Senior&quot; have requirements that only support mid-level classification — typically 2–4 years of experience, no leadership scope, no architectural ownership. Entry-level titles show 0% inflation. Mid-level titles show 12%. The gatekeeping is concentrated almost entirely at the senior tier.
                    </p>
                    <p className="text-slate-500 text-md italic">
                        The practical implication: if a posting is titled &quot;Senior Data Analyst&quot; but requires 3 years of SQL and Python with standard reporting responsibilities, the title is doing more work than the role. Apply anyway.
                    </p>
                </div>

                {/* Finding 3 */}
                <div className="pl-4 border-l-2 border-blue-500 space-y-3">
                    <h3 className="text-lg font-bold text-slate-800">
                        The Seniority Ladder Is Real — When You Look at Requirements, Not Titles
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                        Despite the inflation at the senior tier, the underlying experience requirements do stratify cleanly by inferred seniority level:
                    </p>
                    <ul className="space-y-2 text-slate-600 list-disc ml-5">
                        <li><span className="font-medium text-slate-900">Entry:</span> 1 year median experience required — $83k median salary</li>
                        <li><span className="font-medium text-slate-900">Mid:</span> 3 years median experience required — $101k median salary</li>
                        <li><span className="font-medium text-slate-900">Senior:</span> 5 years median experience required — $131k median salary</li>
                    </ul>
                    <p className="text-slate-600 leading-relaxed">
                        The steps are consistent and compensation tracks with them. The market knows what it wants — it just doesn&apos;t always label it accurately.
                    </p>
                </div>

            </div>

            {/* Data note */}
            <div className="mt-8 px-4 py-3 bg-slate-50 border border-slate-200 rounded text-sm text-slate-500">
                Findings reflect <span className="font-medium text-slate-700">179 postings</span> ingested as of June 2026.
                The pipeline runs every Monday and Thursday — figures will be updated as the dataset grows.
            </div>

        </div>
    );
}