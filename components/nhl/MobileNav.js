import { useState } from "react";
import { sections } from "./sections";

export default function MobileNav() {
    const [open, setOpen] = useState(false);

    return (
        <div className="lg:hidden fixed top-2 left-1/2 -translate-x-1/2 z-50">

            <button
                onClick={() => setOpen(!open)}
                className="bg-black text-white px-3 py-2 rounded"
            >
                {open ? "Close" : "Menu"}
            </button>

            {open && (
                <div className="absolute left-1/2 -translate-x-1/2 mt-2 bg-white border rounded shadow w-48">
                    {sections.map((s) => (
                        <a
                            key={s.id}
                            href={`#${s.id}`}
                            onClick={() => setOpen(false)}
                            className="block px-4 py-2 text-sm hover:bg-gray-100"
                        >
                            {s.label}
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
}