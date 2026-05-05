export default function InsightCard({ title, description, teams }) {
    return (
        <div className="space-y-2">
            <h3 className="text-lg font-semibold">{title}</h3>

            <p>{description}</p>

            <p className="text-sm">
                Supported by:{" "}
                {teams.map((team, i) => (
                    <span key={team.name}>
                        {team.id ? (
                            <a
                                href={`#${team.id}`}
                                className="text-blue-600 underline"
                            >
                                {team.name}
                            </a>
                        ) : (
                            <span className="text-gray-700">{team.name}</span>
                        )}
                        {i < teams.length - 1 && ", "}
                    </span>
                ))}
            </p>
        </div>
    );
}