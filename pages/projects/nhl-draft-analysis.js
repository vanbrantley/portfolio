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
                        <p><strong>Which NHL teams draft the most effectively?</strong></p>
                        <p>This analysis examines drafts from 2005 through 2017, a period that captures the modern salary cap era while also allowing sufficient time for drafted players to develop and establish their NHL careers.</p>
                        <p>As a fan of the New York Rangers, a team that has often struggled to generate strong value from early draft selections, I became interested in whether team drafting performance could be quantified and compared across the league. This project explores that idea by measuring draft outcomes relative to draft position.</p>
                    </ProjectSection>

                    <ProjectSection title="How It Works (Quick Summary)">
                        <ul>
                            <li>Each player is assigned a <strong>Performance Score</strong> based on career games played and points</li>
                            <li>Each draft pick has an <strong>expected value</strong> based on historical averages at that pick</li>
                            <li>Each selection is evaluated as: <strong>Draft Value = Actual Performance − Expected Performance</strong></li>
                            <li>Team scores are calculated by summing draft value across all picks</li>
                        </ul>
                        <p>This framework allows teams to be evaluated not by raw outcomes, but by how effectively they extract value from their draft positions.</p>
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
                        <p>The goal of this analysis is to measure how effectively NHL teams draft relative to the value of the picks they are given.</p>
                        <p>
                            Not all draft positions carry the same expectations. A 1st overall pick is expected to produce significantly more value
                            than a late-round selection. Because of this, teams should not be evaluated based on raw outcomes alone, but on how their
                            selections perform relative to what is typical for each pick.
                        </p>
                        <p>
                            This project evaluates drafting by comparing each player’s actual NHL
                            career performance to the historical expectation of their draft slot.
                        </p>

                        <p><strong>4.2. Defining Expected Value</strong></p>
                        <p>To establish a fair baseline, we calculate the expected value of every draft pick.</p>
                        <p>
                            For each pick number (e.g., 1st overall, 50th overall), we compute the average career
                            performance of all players selected at that position across the 2005–2017 drafts.
                        </p>
                        <p>This creates a stable expectation curve:</p>
                        <ul>
                            <li>Early picks have high expected value</li>
                            <li>Mid-round picks have moderate expected value</li>
                            <li>Late-round picks have low expected value</li>
                        </ul>
                        <p>This approach allows all draft selections to be evaluated on a consistent scale across years.</p>

                        <p><strong>4.3. Measuring Draft Value</strong></p>
                        <p>Each draft selection is evaluated using the following metric:</p>
                        <p><strong>Draft Value = Player Performance Score − Expected Performance at That Pick</strong></p>
                        <ul>
                            <li>A <strong>positive value</strong> indicates the team exceeded expectations</li>
                            <li>A <strong>negative value</strong> indicates the team fell short of expectations</li>
                        </ul>
                        <p>By summing these values across all picks and all drafts, we obtain a single score for each team:</p>
                        <ul>
                            <li>Positive total → strong drafting performance</li>
                            <li>Negative total → weaker drafting performance</li>
                        </ul>
                        <p>This framework captures both the magnitude and consistency of a team’s drafting outcomes.</p>

                        <p><strong>4.4. The Performance Score</strong></p>
                        <p>To evaluate players, we first need a single metric that captures NHL career value.</p>
                        <p>The dataset provides two key statistics:</p>
                        <ul>
                            <li>Career games played</li>
                            <li>Career points (the sum of career goals and career assists)</li>
                        </ul>
                        <p>Each captures a different dimension of performance:</p>
                        <ul>
                            <li>Games played reflects longevity and reliability</li>
                            <li>Points reflect production and impact</li>
                        </ul>
                        <p>To balance these, we define:</p>
                        <p><strong>Performance Score = games_played + (points × 2.29)</strong></p>
                        <p>The coefficient 2.29 is derived directly from the data as the value at which games played and points contribute equally on average:</p>
                        <ul>
                            <li>avg_games_played = avg_points × X</li>
                            <li><strong>X = avg_games_played / avg_points</strong></li>
                        </ul>
                        <p>This ensures that neither component disproportionately drives the metric.</p>
                        <p><strong>Validation</strong></p>
                        <p>Two checks were performed before finalizing the coefficient:</p>
                        <ul>
                            <li><strong>Positional fairness</strong>: At X = 2.29, forwards are overrepresented in the top 30 by ~4 percentage
                                points (≈1 player per draft), which was considered acceptable
                            </li>
                            <li><strong>Sensitivity analysis</strong>: Adjusting X by ±1 results in minimal ranking changes, confirming the metric is stable</li>
                        </ul>
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

                        <p><strong>4.5. Limitations</strong></p>
                        <p>Goalies are excluded from this analysis.</p>
                        <p>
                            Because goalies accumulate very few points regardless of their actual impact, including
                            them would systematically undervalue their performance and unfairly penalize teams that
                            drafted them early.
                        </p>
                        <p>
                            As a result, goalie selections are omitted from both the expected value calculations and
                            team scores. This is acknowledged as a limitation, but provides a more consistent
                            evaluation across skater positions.
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