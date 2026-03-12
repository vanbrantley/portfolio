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
                        <p>The goal of this project is to investigate the drafting aptitude of NHL teams.</p>
                        <p>It aims to answer the question: “Which NHL teams draft the best?”</p>
                        <p>This analysis covers drafts from 2005 to 2017, capturing the modern salary cap era and providing enough time for players to develop and demonstrate their performance.</p>
                        <p>As a fan of the New York Rangers, a team that has often missed out on early-round draft value, I wanted to explore whether team drafting performance could be quantified and ranked, especially compared to consistently effective teams such as the Dallas Stars.</p>
                    </ProjectSection>

                    <ProjectSection title="2. Data Overview">
                        <p>The project uses draft recap data from the website{" "}
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
                            The table from the website includes draft details such as the round and selection number, the drafting team, and the player’s name, position, and youth team. It also shows the player’s NHL career totals, including games played, goals, assists, points, penalty minutes, and their last season in the league.
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
                    </ProjectSection>

                    <ProjectSection title="3. Exploratory Data Analysis">
                        <p>Initial analysis performed to understand the data and identify patterns or trends.</p>
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