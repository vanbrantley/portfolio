import { useState } from "react";
import Image from "next/image";

export default function Carousel({ images = [] }) {
    const [index, setIndex] = useState(0);

    if (!images.length) return null;

    const prev = () =>
        setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

    const next = () =>
        setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

    return (
        <div className="w-full max-w-4xl mx-auto">
            <div className="relative">
                <Image
                    src={images[index]}
                    alt={`Slide ${index}`}
                    width={1200}
                    height={700}
                    className="w-full rounded-lg border object-contain"
                />

                {/* Controls */}
                <button
                    onClick={prev}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/70 text-white px-3 py-1 rounded cursor-pointer"
                >
                    ‹
                </button>

                <button
                    onClick={next}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/70 text-white px-3 py-1 rounded cursor-pointer"
                >
                    ›
                </button>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-3">
                {images.map((_, i) => (
                    <div
                        key={i}
                        className={`h-2 w-2 rounded-full ${i === index ? "bg-black" : "bg-gray-300"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}