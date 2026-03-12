import Layout from "@/components/Layout";
import ProjectHeader from "../../components/ProjectHeader";

export default function NHLDraftAnalysis() {
    return (
        <Layout>
            <main className="px-6 py-12 max-w-5xl mx-auto">
                <ProjectHeader
                    title="NHL Draft Analysis"
                    subtitle="NHL Draft Analysis project"
                    image="/images/nhl-draft-analysis-icon.png"
                />
                <section>
                    {/* Start writing project content here */}
                </section>
            </main>
        </Layout>
    );
}