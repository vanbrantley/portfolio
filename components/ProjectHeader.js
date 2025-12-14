// import Image from "next/image";

// export default function ProjectHeader({ title, subtitle, image }) {
//     return (
//         <header className="w-full bg-gray-50 rounded-lg mb-8 p-6 text-center">
//             <div className="w-full max-w-4xl mx-auto aspect-video mb-6 relative bg-white rounded">
//                 <Image
//                     src={image}
//                     alt={title}
//                     fill
//                     className="object-contain"
//                     priority
//                 />
//             </div>

//             <h1 className="text-3xl font-bold text-gray-900 mb-2">
//                 {title}
//             </h1>

//             {subtitle && (
//                 <p className="text-gray-700">
//                     {subtitle}
//                 </p>
//             )}
//         </header>
//     );
// }

import Image from "next/image";

export default function ProjectHeader({ title, subtitle, image }) {
    return (
        <header className="w-full bg-gray-50 rounded-lg mb-8 p-6 text-center">
            <div className="w-full max-w-3xl mx-auto aspect-video sm:h-40 md:h-48 lg:h-56 mb-6 relative bg-white rounded flex items-center justify-center">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-contain"
                    priority
                />
            </div>

            <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {title}
            </h1>

            {subtitle && (
                <p className="text-gray-700">
                    {subtitle}
                </p>
            )}
        </header>
    );
}