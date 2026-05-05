import Image from "next/image";

export default function TeamCard({
    id,
    name,
    logo,
    overall,
    early,
    hitRate,
    description,
    supports,
}) {
    return (
        <div id={id} className="border rounded-xl p-6 space-y-4">

            {/* Header */}
            <div className="flex items-center gap-3">
                <Image
                    src={logo}
                    alt={name}
                    width={40}
                    height={40}
                    className="rounded"
                />
                <h3 className="text-lg font-semibold">{name}</h3>
            </div>

            {/* Stats */}
            <div className="text-sm text-gray-700 flex flex-wrap gap-4">
                <span>Overall: {overall}</span>
                <span>Early Rounds: {early}</span>
                <span>Hit Rate: {hitRate}</span>
            </div>

            {/* Description */}
            <p className="text-sm leading-relaxed text-gray-800">
                {description}
            </p>

            <div className="text-xs">
                <span className="px-2 py-1 bg-gray-100 rounded-full text-gray-700">
                    {supports}
                </span>
            </div>
        </div>
    );
}