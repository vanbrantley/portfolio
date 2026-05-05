import { useEffect, useState } from "react";
import { sections } from "./sections";

export default function StickySidebarNav() {
    const [active, setActive] = useState("hero");

    useEffect(() => {
        const handleScroll = () => {
            const scrollPos = window.scrollY + 200;

            for (let i = sections.length - 1; i >= 0; i--) {
                const el = document.getElementById(sections[i].id);
                if (el && el.offsetTop <= scrollPos) {
                    setActive(sections[i].id);
                    break;
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className="hidden lg:flex fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 p-6 border-r flex-col gap-3 bg-white z-40">
            {sections.map((s) => (
                <a
                    key={s.id}
                    href={`#${s.id}`}
                    className={`text-sm transition ${active === s.id
                        ? "text-black font-semibold"
                        : "text-gray-500 hover:text-black"
                        }`}
                >
                    {s.label}
                </a>
            ))}
        </nav>
    );
}