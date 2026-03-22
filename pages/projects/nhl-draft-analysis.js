import Layout from "@/components/Layout";
import ProjectHeader from "../../components/ProjectHeader";
import ProjectWriteup from "@/components/ProjectWriteup";
import ProjectSection from "@/components/ProjectSection";
import Image from "next/image";

export default function NHLDraftAnalysis() {
    return (
        <Layout>
            <main className="px-6 py-12 max-w-5xl mx-auto">
                <ProjectHeader
                    title="NHL Draft Efficiency Analysis"
                    subtitle="Evaluating NHL team draft performance from 2005-2017"
                    image="/images/nhl-draft-analysis-icon.png"
                />

                <ProjectWriteup>

                    <ProjectSection title="1. Project Introduction">
                        <p>The goal of this project is to evaluate the drafting effectiveness of NHL teams.</p>
                        <p>Specifically, it aims to answer the question:</p>
                        <p><strong>Which NHL teams draft the most efficiently?</strong></p>
                        <p>This analysis examines drafts from 2005 through 2017, a period that captures the modern salary cap era while also allowing sufficient time for drafted players to develop and establish their NHL careers.</p>
                        <p>As a fan of the New York Rangers, a team that has often struggled to generate strong value from early draft selections, I became interested in whether team drafting performance could be quantified and compared across the league. This project explores that idea by measuring draft outcomes relative to draft position.</p>
                    </ProjectSection>

                    <ProjectSection title="2. Data Overview">
                        <p>The project uses draft recap data from{" "}
                            <a
                                href="https://www.hockeydb.com/ihdb/draft/nhl2016e.html"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:text-blue-700 visited:text-blue-800"
                            >
                                hockeydb.com
                            </a>
                            .
                        </p>
                        <p>
                            The dataset includes draft information such as:
                        </p>

                        <ul>
                            <li>Round and overall selection number</li>
                            <li>Drafting team</li>
                            <li>Player name and position</li>
                            <li>Junior or youth team</li>
                        </ul>

                        <p>
                            It also includes each player’s NHL career totals, including:
                        </p>

                        <ul>
                            <li>Games played</li>
                            <li>Goals</li>
                            <li>Assists</li>
                            <li>Points</li>
                            <li>Penalty minutes</li>
                            <li>Final NHL season</li>
                        </ul>

                        <p>
                            These statistics allow player careers to be compared and evaluated relative to their draft position.
                        </p>
                        <div className="my-6 flex justify-center">
                            <Image
                                src="/images/writeup/nhl/hockeydb-table.png"
                                alt="Screenshot of NHL draft table from hockeydb.com"
                                width={1200}
                                height={600}
                            />
                        </div>

                        <p className="text-sm text-gray-500 text-center">
                            Screenshot of the draft recap table on hockeydb.com
                        </p>
                        <p>
                            The draft data was programmatically collected from hockeydb.com using a Python web
                            scraping script with the BeautifulSoup library. The extracted data was cleaned and
                            stored in a SQLite database, which was then used for subsequent analysis in SQL and Python.
                        </p>
                    </ProjectSection>

                    <ProjectSection title="3. Exploratory Data Analysis">
                        <p>
                            Before analysis could begin, the dataset was examined to validate its
                            structure and integrity. The full EDA process is documented in the notebook
                            here:{" "}
                            <a
                                href="https://github.com/vanbrantley/nhl-draft-analysis/blob/main/notebooks/eda.ipynb"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:text-blue-700 visited:text-blue-800"
                            >
                                EDA Notebook
                            </a>
                            .
                        </p>
                        <p>The key findings were:</p>
                        <ul>
                            <li>
                                The dataset contains 2,766 players across 13 draft years, with pick totals
                                consistent with expectations for a 30-31 team league across 7 rounds.
                            </li>
                            <li>
                                No duplicate entries or missing values were found in any key identifying
                                columns. The 1,364 players with no games played statistics simply reflect
                                players who were drafted but never appeared in an NHL regular season game.
                            </li>
                            <li>
                                One player, Kyell Henegan, was found to have no position listed. Research
                                confirmed he is a defenseman, and his position was updated accordingly in
                                the cleaned dataset.
                            </li>
                            <li>
                                The pick count totals across rounds showed minor variation which was
                                investigated and fully explained by real world NHL events — including the
                                2005 post-lockout CBA, the 2017 Vegas expansion, two forfeited picks, and
                                compensatory second round picks awarded to teams that failed to sign their
                                former first round selections.
                            </li>
                            <li>
                                The cleaned dataset was saved separately from the raw data and used for
                                all subsequent analysis.
                            </li>
                        </ul>
                    </ProjectSection>

                    <ProjectSection title="4. Draft Success Evaluation Methodology">
                        <p><strong>4.1. The Core Idea</strong></p>
                        <p>Not all drafts are created equal. Some years produce generational talent
                            across the board, while others are historically shallow. Comparing raw
                            outcomes across drafts would reward teams that happened to draft in
                            talent rich years rather than teams that genuinely evaluated players well.
                        </p>
                        <p>
                            Instead, this project treats each draft as its own isolated universe.
                            The question is not &quot;how good were the players this team drafted?&quot; but
                            &quot;how well did this team identify the best available players given what
                            was in front of them?&quot; Each draft is re-ordered in hindsight based on
                            actual NHL career performance, and each team&apos;s selections are compared
                            against that hindsight order using a plus/minus score:
                        </p>
                        <p><strong>plus/minus = actual pick number - hindsight rank</strong></p>
                        <p>A positive score means the team got more value than expected at that pick.
                            A negative score means they got less. Summing these scores across all picks
                            and all drafts gives us a single number per team that captures their overall
                            drafting effectiveness.</p>

                        <p><strong>4.2. Why Not Other Approaches</strong></p>
                        <p>Several alternatives were considered and ruled out:</p>
                        <ul>
                            <li>Raw points totals favor teams that drafted in talent rich years rather than teams that drafted well.</li>
                            <li>Games played alone doesn&apos;t distinguish a franchise cornerstone from a journeyman.</li>
                            <li>Advanced stats like WAR or win shares would be ideal for measuring true player impact, but are not available in this dataset.</li>
                        </ul>
                        <p>The hindsight ranking approach addresses each of these limitations while working within the data we have.</p>

                        <p><strong>4.3. The Formula</strong></p>
                        <p>The performance metric used to build the hindsight ranking is a weighted
                            combination of career points and games played. Points capture a player&apos;s
                            overall quality and impact, while games played ensures that defensive
                            players and reliable depth contributors are not undervalued by a points
                            only metric.
                        </p>
                        <p>
                            The formula used is:
                        </p>
                        <p><strong>Performance Score = games_played + (points * 2.29)</strong></p>
                        <p>
                            The coefficient 2.29 was derived directly from the data as the natural
                            equal-weight point — the value at which games played and points contribute
                            equally to the performance score on average. Before committing to this
                            value two checks were run:
                        </p>
                        <ul>
                            <ol>Positional fairness — at X=2.29 forwards are over-represented by 4.0
                                percentage points in the hindsight top 30 relative to actual draft
                                selections, equating to roughly one extra forward per draft class.
                                This was deemed acceptable.</ol>
                            <ol>Sensitivity — moving one full unit in either direction from X=2.29
                                produces an average rank difference of less than one spot across
                                benchmark drafts, confirming the methodology is robust regardless
                                of the exact coefficient chosen.</ol>
                        </ul>
                        <p>Goalies are excluded from the hindsight ranking. Because goalies
                            accumulate minimal points regardless of their quality, including them
                            would systematically penalize teams that invested early picks in goalies
                            even when those were correct decisions. Goalie picks are not counted
                            toward a team&apos;s score — acknowledged as a limitation but fairer than
                            the alternative.
                        </p>
                        <p>The full coefficient investigation is documented in{" "}
                            <a
                                href="https://github.com/vanbrantley/nhl-draft-analysis/blob/main/notebooks/formula.ipynb"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:text-blue-700 visited:text-blue-800"
                            >
                                formula.ipynb
                            </a>
                            .
                        </p>
                    </ProjectSection>

                    <ProjectSection title="5. Tableau Visualizations">
                        <p>Overview of the dashboards and charts used to explore the results.</p>
                    </ProjectSection>

                    <ProjectSection title="6. Discussion and Conclusions">
                        <p>List known limitations.</p>
                        <p>Key findings and insights from the analysis.</p>
                    </ProjectSection>


                </ProjectWriteup>

            </main>
        </Layout>
    );
}