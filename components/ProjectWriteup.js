// controls overall layout of the write-up
// handles spacing between the sections
// controls max width for readability

export default function ProjectWriteup({ children }) {
    return <section className="max-w-3xl mx-auto mt-12 space-y-12">{children}</section>;
}