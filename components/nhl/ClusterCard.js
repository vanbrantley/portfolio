import Image from "next/image";

export default function ClusterCard({
    id,
    name,
    logos,
    teamNames,
    avgPerPick,
    earlyRoundAvg,
    round1Avg,
    round2Avg,
    round3Avg,
    round4Avg,
    round5Avg,
    round6Avg,
    round7Avg,
    hitRate,
    description,
}) {
    const rounds = [
        { label: "R1", value: round1Avg },
        { label: "R2", value: round2Avg },
        { label: "R3", value: round3Avg },
        { label: "R4", value: round4Avg },
        { label: "R5", value: round5Avg },
        { label: "R6", value: round6Avg },
        { label: "R7", value: round7Avg },
    ];

    return (
        <div id={id} className="border rounded-xl p-6 space-y-5">

            {/* Cluster name */}
            <h3 className="text-lg font-semibold">{name}</h3>

            {/* Top-level stats */}
            <div className="text-sm text-gray-700 flex flex-wrap gap-4">
                <span>Avg per Pick: {avgPerPick}</span>
                <span>Early Round Avg: {earlyRoundAvg}</span>
                <span>Hit Rate: {hitRate}</span>
            </div>

            {/* Per-round breakdown */}
            <div className="flex flex-wrap gap-3">
                {rounds.map(({ label, value }) => (
                    <div
                        key={label}
                        className="flex flex-col items-center bg-gray-50 border rounded-lg px-3 py-2 min-w-[48px]"
                    >
                        <span className="text-xs text-gray-500 font-medium">{label}</span>
                        <span className="text-sm font-semibold text-gray-800">{value}</span>
                    </div>
                ))}
            </div>

            {/* Team logos */}
            <div className="flex flex-wrap gap-3 items-center">
                {logos.map((logo, i) => (
                    <div key={i} className="relative group">
                        <Image
                            src={logo}
                            alt={teamNames[i]}
                            width={48}
                            height={48}
                            className="rounded"
                        />
                        {/* Hover tooltip */}
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                            {teamNames[i]}
                        </div>
                    </div>
                ))}
            </div>

            {/* Description */}
            <p className="text-sm leading-relaxed text-gray-800">{description}</p>
        </div>
    );
}