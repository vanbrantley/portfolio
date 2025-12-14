import Layout from "@/components/Layout";
import ProjectHeader from "../../components/ProjectHeader";

export default function PersonalFinance() {
    return (
        <Layout>
            <main className="px-6 py-12 max-w-5xl mx-auto">
                <ProjectHeader
                    title="Personal Finance"
                    subtitle="Personal Finance subtitle"
                    image="/images/budget-icon.png"
                />
                <section>
                    {/* Start writing project content here */}
                </section>
            </main>
        </Layout>
    );
}
