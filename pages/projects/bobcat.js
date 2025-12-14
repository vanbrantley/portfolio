import Layout from "@/components/Layout";
import ProjectHeader from "../../components/ProjectHeader";

export default function Bobcat() {
    return (
        <Layout>
            <main className="px-6 py-12 max-w-5xl mx-auto">
                <ProjectHeader
                    title="BoBCAT"
                    subtitle="BoBCAT subtitle"
                    image="/images/bobcat.jpg"
                />
                <section>
                    {/* Start writing project content here */}
                </section>
            </main>
        </Layout>
    );
}
