import ProjectHeader from "@/components/ProjectHeader";

export default function Hero() {
    return (
        <div className="py-12 px-6">
            <ProjectHeader
                title="NHL Draft Efficiency Analysis"
                subtitle="Evaluating NHL team draft performance from 2005–2017"
                image="/images/nhl-draft-analysis-icon.png"
            />
        </div>
    );
}