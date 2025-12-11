export default function ProjectCard({ title, description, image, techIcons, link }) {
    return (
        <div className="bg-white rounded-lg shadow-md p-4 transition-colors duration-300">
            <img src={image} alt={title} className="w-full h-48 object-cover rounded mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
            <p className="mb-4 text-gray-700">{description}</p>
            <div className="flex gap-2 mb-4">
                {techIcons.map((icon, idx) => (
                    <img
                        key={idx}
                        src={icon.src}
                        alt={icon.label}
                        title={icon.label}
                        className="w-6 h-6"
                    />
                ))}
            </div>
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline hover:text-blue-800"
            >
                View Project
            </a>
        </div>
    );
}
