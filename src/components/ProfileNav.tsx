"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import cn from "classnames";

const tabs = [
    { label: "My account", href: "/account/profile" },
    { label: "My orders", href: "/account/orders" },
    { label: "Need help?", href: "/account/help" },
];

export default function ProfileNav() {
    const pathname = usePathname();
    const navRef = useRef<HTMLDivElement>(null);
    const [indicator, setIndicator] = useState({ left: 0, width: 0 });

    useEffect(() => {
        const activeEl = navRef.current?.querySelector(
            '[data-active="true"]'
        ) as HTMLElement | null;

        if (activeEl) {
            setIndicator({
                left: activeEl.offsetLeft,
                width: activeEl.offsetWidth,
            });
        }
    }, [pathname]);

    return (
        <div className="relative pt-1.5">
            <nav ref={navRef} className="relative flex gap-10 pb-2.5">
                {tabs.map((t) => {
                    const isActive = pathname.startsWith(t.href);

                    return (
                        <Link
                            key={t.href}
                            href={t.href}
                            data-active={isActive}
                            className={cn(
                                "text-[16px] transition-colors",
                                isActive
                                    ? "text-[#1A2B4C] font-bold"
                                    : "text-[#8A94A6] font-medium hover:text-[#5A667A]"
                            )}
                        >
                            {t.label}
                        </Link>
                    );
                })}

                <span className="absolute left-0 right-0 bottom-0 h-[1px] bg-[#E6E9EF]" />
            </nav>

            <span
                className="absolute bottom-0 h-[4px] bg-[#D83B6F] rounded-t-full transition-all duration-300 ease-out"
                style={{
                    left: indicator.left + 6,
                    width: indicator.width - 12,
                }}
            />
        </div>
    );
}