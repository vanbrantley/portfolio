export default function Methodology() {
    return (
        <div className="px-6 max-w-3xl mx-auto space-y-5">
            <h2 className="text-2xl font-semibold mb-4">Methodology</h2>

            <p>
                This analysis uses NHL draft data from 2005 to 2017, with each player
                draft selection treated as the primary unit of analysis and aggregated
                up to the team level.
            </p>

            <p>
                Draft value is defined using a value-over-expected framework, where each
                player’s outcome is measured relative to typical production expectations
                based on their draft position.
            </p>

            <p>
                This normalization step allows players selected at different positions to
                be compared on a consistent scale, reducing bias toward early-round picks.
            </p>

            <p>
                Individual player values are then aggregated across each draft and
                summed by team, producing round-level and overall team draft efficiency
                scores.
            </p>

            <p>
                The final output is a comparative team-level metric that captures how
                effectively organizations generate value across the full draft process.
            </p>
        </div>
    );
}