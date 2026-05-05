// export default function KeyFindings() {

//     return (
//         <div className="px-6 max-w-3xl mx-auto space-y-5">
//             <h2 className="text-2xl font-semibold">Key Findings</h2>

//             <div className="findings-grid">

//                 {/* 1. The 3.5% Variance Discovery */}
//                 <div className="finding-item">
//                     <h3 className="finding-title">
//                         The &quot;3.5% Variance&quot; Discovery
//                     </h3>
//                     <p className="finding-text">
//                         A linear regression analysis revealed that team drafting efficiency (VOE) only accounts for <strong>3.5% of the variance (R<sup>2</sup> = 0.035)</strong> in total playoff series wins. This suggests that while a high-functioning draft provides a stable competitive &quot;floor,&quot; championship &quot;ceilings&quot; are driven by high-variance factors like goaltending, trade acquisitions, and injury luck.
//                     </p>
//                 </div>

//                 {/* 2. Isolating "True" Skill */}
//                 <div className="finding-item">
//                     <h3 className="finding-title">
//                         Isolating &quot;True&quot; Skill (Binomial Significance)
//                     </h3>
//                     <p className="finding-text">
//                         Using a Binomial Test against the league-wide hit rate, I identified that only three organizations showed scouting results statistically improbable to be the result of &quot;noise&quot;:
//                     </p>
//                     <ul className="finding-list">
//                         <li><strong>LA and Ottawa</strong> were significantly above the league average, proving sustained scouting excellence.</li>
//                         <li><strong>Vancouver</strong> was significantly below, indicating systemic drafting inefficiency.</li>
//                         <li>For the remaining 28 teams, the results fell within the range of random variance, highlighting how difficult it is to maintain a &quot;true&quot; scouting edge over a 12-year window.</li>
//                     </ul>
//                 </div>

//                 {/* 3. The Myth of Getting Better */}
//                 <div className="finding-item">
//                     <h3 className="finding-title">
//                         The Myth of &quot;Getting Better&quot; (LAG-1 Analysis)
//                     </h3>
//                     <p className="finding-text">
//                         To see if teams &quot;learned&quot; or improved their scouting processes over time, I applied a <strong>LAG-1 Autocorrelation test</strong>. Only St. Louis and Tampa Bay showed a statistically significant upward trend in efficiency. For the rest of the league, drafting performance was essentially &quot;random&quot; year-over-year, suggesting that organizational &quot;lessons learned&quot; are often offset by staff turnover and league-wide parity.
//                     </p>
//                 </div>

//                 {/* 4. The Parity Paradox */}
//                 <div className="finding-item">
//                     <h3 className="finding-title">
//                         The Parity Paradox
//                     </h3>
//                     <p className="finding-text">
//                         Despite the diverse scouting behaviors identified in the clustering phase, five of the six archetypes were represented among the Top 10 most successful playoff teams. This proves there is <strong>no single &quot;winning&quot; scouting philosophy</strong>; rather, success is found by teams that effectively leverage the specific talent profiles (Early-Round stars vs. Late-Round depth) their system is designed to find.
//                     </p>
//                 </div>

//             </div>
//         </div>
//     );
// }

export default function KeyFindings() {
    return (
        <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">Key Findings</h2>

            <div className="space-y-10">
                {/* 1. The 3.5% Variance Discovery */}
                <div className="pl-4 border-l-2 border-blue-500 space-y-2">
                    <h3 className="text-lg font-bold text-slate-800">
                        The &quot;3.5% Variance&quot; Discovery
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                        A linear regression analysis revealed that team drafting efficiency (VOE) only accounts for <span className="font-semibold text-slate-900">3.5% of the variance (R<sup>2</sup> = 0.035)</span> in total playoff series wins. This suggests that while a high-functioning draft provides a stable competitive &quot;floor,&quot; championship &quot;ceilings&quot; are driven by high-variance factors like goaltending, trade acquisitions, and injury luck.
                    </p>
                </div>

                {/* 2. Isolating "True" Skill */}
                <div className="pl-4 border-l-2 border-blue-500 space-y-3">
                    <h3 className="text-lg font-bold text-slate-800">
                        Isolating &quot;True&quot; Skill (Binomial Significance)
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                        Using a Binomial Test against the league-wide hit rate, I identified that only three organizations showed scouting results statistically improbable to be the result of &quot;noise&quot;:
                    </p>
                    <ul className="space-y-2 text-slate-600 list-disc ml-5">
                        <li><span className="font-medium text-slate-900">LA and Ottawa</span> were significantly above the league average, proving sustained scouting excellence.</li>
                        <li><span className="font-medium text-slate-900">Vancouver</span> was significantly below, indicating systemic drafting inefficiency.</li>
                        <li>For the remaining 28 teams, the results fell within the range of random variance, highlighting how difficult it is to maintain a &quot;true&quot; scouting edge over a 12-year window.</li>
                    </ul>
                </div>

                {/* 3. The Myth of Getting Better */}
                <div className="pl-4 border-l-2 border-blue-500 space-y-2">
                    <h3 className="text-lg font-bold text-slate-800">
                        The Myth of &quot;Getting Better&quot; (LAG-1 Analysis)
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                        To see if teams &quot;learned&quot; or improved their scouting processes over time, I applied a <span className="font-semibold text-slate-900">LAG-1 Autocorrelation test</span>. Only St. Louis and Tampa Bay showed a statistically significant upward trend in efficiency. For the rest of the league, drafting performance was essentially &quot;random&quot; year-over-year, suggesting that organizational &quot;lessons learned&quot; are often offset by staff turnover and league-wide parity.
                    </p>
                </div>

                {/* 4. The Parity Paradox */}
                <div className="pl-4 border-l-2 border-blue-500 space-y-2">
                    <h3 className="text-lg font-bold text-slate-800">
                        The Parity Paradox
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                        Despite the diverse scouting behaviors identified in the clustering phase, five of the six archetypes were represented among the Top 10 most successful playoff teams. This proves there is <span className="font-bold text-slate-900">no single &quot;winning&quot; scouting philosophy</span>; rather, success is found by teams that effectively leverage the specific talent profiles (Early-Round stars vs. Late-Round depth) their system is designed to find.
                    </p>
                </div>
            </div>
        </div>
    );
}