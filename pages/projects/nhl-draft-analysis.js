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
                        <p>Explanation of the approach used to evaluate team draft performance.</p>
                    </ProjectSection>

                    <ProjectSection title="5. Tableau Visualizations">
                        <p>Overview of the dashboards and charts used to explore the results.</p>
                    </ProjectSection>

                    <ProjectSection title="6. Discussion and Conclusions">
                        <p>Key findings and insights from the analysis.</p>
                    </ProjectSection>


                </ProjectWriteup>

            </main>
        </Layout>
    );
}