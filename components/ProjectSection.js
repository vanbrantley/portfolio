// controls spacing and style within a single section
// handles header bolding and spacing from text
// spacing between paragraphs

export default function ProjectSection({ title, children }) {
    return (
        <div className="space-y-4">
            <h2 className="text-2xl font-semibold mb-4">{title}</h2>
            {children}
        </div>
    );
}