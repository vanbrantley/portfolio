import ClusterCard from "./ClusterCard";

export default function TeamClusters() {
    const clusters = [
        {
            id: "cluster-gold-standard",
            name: "The Gold Standard",
            logos: [
                "/images/nhl-logos/losangeles.png",
                "/images/nhl-logos/ottawa.png",
            ],
            teamNames: ["Los Angeles Kings", "Ottawa Senators"],
            avgPerPick: "54.74",
            earlyRoundAvg: "35.01",
            round1Avg: "48.80",
            round2Avg: "16.58",
            round3Avg: "52.09",
            round4Avg: "72.77",
            round5Avg: "70.82",
            round6Avg: "-6.52",
            round7Avg: "122.26",
            hitRate: "39.3%",
            description:
                "The two best-drafting organizations in the dataset by a significant margin. LA and Ottawa generate elite value across nearly every round, with exceptional depth in rounds 4, 5, and 7. Their hit rates sit well above the league average, and their overall output reflects sustained organizational competence rather than a single fortunate pick.",
        },
        {
            id: "cluster-podium-powerhouses",
            name: "The Podium Powerhouses",
            logos: [
                "/images/nhl-logos/boston.png",
                "/images/nhl-logos/colorado.png",
                "/images/nhl-logos/philadelphia.png",
                "/images/nhl-logos/pittsburgh.png",
                "/images/nhl-logos/stlouis.png",
                "/images/nhl-logos/washington.png",
            ],
            teamNames: [
                "Boston Bruins",
                "Colorado Avalanche",
                "Philadelphia Flyers",
                "Pittsburgh Penguins",
                "St. Louis Blues",
                "Washington Capitals",
            ],
            avgPerPick: "-0.87",
            earlyRoundAvg: "44.03",
            round1Avg: "55.58",
            round2Avg: "-30.09",
            round3Avg: "118.58",
            round4Avg: "-84.32",
            round5Avg: "-2.00",
            round6Avg: "-13.73",
            round7Avg: "-37.57",
            hitRate: "28.3%",
            description:
                "Strong early-round performers anchored by exceptional Round 1 and Round 3 output. These organizations consistently extract value at the top of the draft and show a notable Round 3 edge, but efficiency drops sharply in rounds 4–7. Their overall average is slightly negative, meaning their early-round dominance is partially offset by below-average late-round returns.",
        },
        {
            id: "cluster-second-round-snipers",
            name: "The Second-Round Snipers",
            logos: [
                "/images/nhl-logos/carolina.png",
                "/images/nhl-logos/dallas.png",
                "/images/nhl-logos/detroit.png",
                "/images/nhl-logos/minnesota.png",
            ],
            teamNames: [
                "Carolina Hurricanes",
                "Dallas Stars",
                "Detroit Red Wings",
                "Minnesota Wild",
            ],
            avgPerPick: "13.35",
            earlyRoundAvg: "37.43",
            round1Avg: "-26.92",
            round2Avg: "149.75",
            round3Avg: "-19.68",
            round4Avg: "24.49",
            round5Avg: "35.08",
            round6Avg: "-67.52",
            round7Avg: "-17.57",
            hitRate: "28.9%",
            description:
                "Defined almost entirely by a historically strong Round 2, which is the highest of any cluster by a wide margin. These teams consistently identify high-value players in the second round while posting below-average results in Round 1 and Round 3. The profile suggests a genuine scouting edge in a specific draft window rather than broad organizational strength.",
        },
        {
            id: "cluster-efficient-moderns",
            name: "The Efficient Moderns",
            logos: [
                "/images/nhl-logos/anaheim.png",
                "/images/nhl-logos/columbus.png",
                "/images/nhl-logos/edmonton.png",
                "/images/nhl-logos/florida.png",
                "/images/nhl-logos/nashville.png",
                "/images/nhl-logos/sanjose.png",
                "/images/nhl-logos/tampa.png",
                "/images/nhl-logos/toronto.png",
            ],
            teamNames: [
                "Anaheim Ducks",
                "Columbus Blue Jackets",
                "Edmonton Oilers",
                "Florida Panthers",
                "Nashville Predators",
                "San Jose Sharks",
                "Tampa Bay Lightning",
                "Toronto Maple Leafs",
            ],
            avgPerPick: "13.64",
            earlyRoundAvg: "1.01",
            round1Avg: "17.30",
            round2Avg: "-15.02",
            round3Avg: "-5.24",
            round4Avg: "25.67",
            round5Avg: "-12.81",
            round6Avg: "23.11",
            round7Avg: "46.37",
            hitRate: "31.3%",
            description:
                "A broadly positive cluster with above-average overall efficiency but inconsistent round-by-round output. Value is unevenly distributed, with strong returns in Round 1, Round 4, Round 6, and especially Round 7, offset by negative contributions in rounds 2, 3, and 5. The late-round surge is a defining trait, and their hit rate leads this tier.",
        },
        {
            id: "cluster-late-round-gamblers",
            name: "The Late-Round Gamblers",
            logos: [
                "/images/nhl-logos/buffalo.png",
                "/images/nhl-logos/calgary.png",
                "/images/nhl-logos/newyorkislanders.png",
                "/images/nhl-logos/newyorkrangers.png",
            ],
            teamNames: [
                "Buffalo Sabres",
                "Calgary Flames",
                "New York Islanders",
                "New York Rangers",
            ],
            avgPerPick: "-15.42",
            earlyRoundAvg: "-41.90",
            round1Avg: "-46.49",
            round2Avg: "10.61",
            round3Avg: "-73.23",
            round4Avg: "40.76",
            round5Avg: "-41.80",
            round6Avg: "83.17",
            round7Avg: "-40.28",
            hitRate: "25.0%",
            description:
                "A volatile cluster with highly uneven round-by-round performance. Early rounds are among the weakest in the dataset, particularly Round 1 and Round 3, but Round 6 is the highest of any cluster. The alternating positive and negative pattern across rounds points to inconsistency rather than a clear strategic identity. Overall value is negative, driven by persistent early-round drag.",
        },
        {
            id: "cluster-efficiency-gap",
            name: "The Efficiency Gap",
            logos: [
                "/images/nhl-logos/arizona.png",
                "/images/nhl-logos/chicago.png",
                "/images/nhl-logos/montreal.png",
                "/images/nhl-logos/newjersey.png",
                "/images/nhl-logos/vancouver.png",
                "/images/nhl-logos/winnipeg.png",
            ],
            teamNames: [
                "Arizona Coyotes",
                "Chicago Blackhawks",
                "Montreal Canadiens",
                "New Jersey Devils",
                "Vancouver Canucks",
                "Winnipeg Jets",
            ],
            avgPerPick: "-35.88",
            earlyRoundAvg: "-53.68",
            round1Avg: "-51.09",
            round2Avg: "-83.91",
            round3Avg: "-42.01",
            round4Avg: "-41.80",
            round5Avg: "3.30",
            round6Avg: "-29.09",
            round7Avg: "-28.91",
            hitRate: "22.6%",
            description:
                "The weakest cluster in the dataset, posting negative value across nearly every round. Early-round performance is particularly poor, with Round 2 being the worst of any cluster. The only marginal positive appears in Round 5, but it is not enough to meaningfully offset systemic underperformance across the rest of the draft. These organizations collectively represent the clearest examples of draft inefficiency in the league.",
        },
    ];

    return (
        <div className="px-6 max-w-3xl mx-auto space-y-5">
            <h2 className="text-2xl font-semibold">Draft Archetypes</h2>

            <div className="space-y-6">
                {clusters.map((cluster) => (
                    <ClusterCard key={cluster.id} {...cluster} />
                ))}
            </div>
        </div>
    );
}