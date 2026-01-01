'use client'

import {useEffect, useRef, useState} from 'react'
import Image from "next/image";
import Link from "next/link";
import CategoriesSVG from "@/svg/CategoriesSVG";
import DropDownSVG from "@/svg/DropDownSVG";

export default function CategoryDropdown() {
    const [open, setOpen] = useState(false)
    const categories = ['dairy', 'fruits', 'vegetables', 'snacks', 'drinks'];
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="relative inline-block text-left" ref={dropdownRef}>
            {/* Кнопка */}
            <button
                onClick={() => setOpen(!open)}
                className="header-nav-item group cursor-pointer transition-colors duration-200"
            >
                <CategoriesSVG className="group-hover:text-[var(--primary)] transition-colors"/>
                <span className="text-[var(--text)] font-medium group-hover:text-[var(--primary)] transition-colors">Categories</span>
                <DropDownSVG classname="group-hover:text-[var(--primary)] transition-colors"/>
            </button>

            {/* Выпадающее меню */}
            {open && (
                <div className="absolute mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                    <ul className="p-2">
                        {categories.map((cat) => (
                            <li key={cat} className="px-4 py-2 cursor-pointer flex flex-row items-center gap-4">
                                <Image width="20" height="20" src={`/categories/${cat}.svg`} alt="category"/>
                                <Link onClick={() => setOpen(false)} className="text-(--text) font-medium"
                                      href={`/category/${cat}`}>{cat[0].toUpperCase() + cat.slice(1)}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}