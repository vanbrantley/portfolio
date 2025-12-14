import Image from "next/image";

export default function ProjectCard({ title, description, image, techIcons }) {
    return (
        <div className="project-card bg-white rounded-lg shadow-md p-4 transition-colors duration-300 flex flex-col h-full">
            <Image
                src={image}
                alt={title}
                width={800}
                height={450}
                className="
                    w-full
                    h-36 sm:h-44 md:h-48 lg:h-56
                    object-cover lg:object-contain
                    object-center
                    rounded
                    mb-4
                "
            />

            <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {title}
            </h3>

            <p className="mb-4 text-gray-700 flex-grow">
                {description}
            </p>

            <div className="flex gap-2 mb-4">
                {techIcons.map((icon, idx) => (
                    <Image
                        key={idx}
                        src={icon.src}
                        alt={icon.label}
                        title={icon.label}
                        width={24}
                        height={24}
                    />
                ))}
            </div>
        </div>
    );
}