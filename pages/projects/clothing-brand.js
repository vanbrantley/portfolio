import Layout from "@/components/Layout";
import ProjectHeader from "../../components/ProjectHeader";

export default function ClothingBrand() {
    return (
        <Layout>
            <main className="px-6 py-12 max-w-5xl mx-auto">
                <ProjectHeader
                    title="Streetwear Analytics Dashboard"
                    subtitle="Business intelligence dashboard tracking sales, customers, and products"
                    image="/images/streetwear-icon.png"
                />
                <section>
                    {/* Start writing project content here */}
                </section>
            </main>
        </Layout>
    );
}