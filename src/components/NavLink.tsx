'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import cn from 'classnames'
import type { ComponentType, SVGProps, ReactNode } from 'react'

type IconType = ComponentType<SVGProps<SVGSVGElement>>
type NavLinkVariant = 'default' | 'discover'

type NavLinkProps = {
    href: string
    icon?: IconType
    children: ReactNode
    offerIcon?: boolean
    variant?: NavLinkVariant
}

export function NavLink({ href, icon: Icon, children, offerIcon, variant }: NavLinkProps) {
    const pathname = usePathname()
    const isActive = (() => {
        if (variant === 'discover') {
            return pathname === '/' || pathname.startsWith('/category/')
        }

        return pathname === href || pathname.startsWith(href + '/')
    })()

    return (
        <Link
            href={href}
            className={cn(
                'group flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--muted-bg)] transition-colors',
                {
                    'bg-[var(--primary-light)]': isActive,
                }
            )}
        >
            {/* ICON */}
            {Icon && (
               <div>
                   {offerIcon ? (
                       <Icon
                           className={cn('transition-colors', {
                               "text-[var(--primary)] [--offer-fill:var(--primary)] [--offer-mark-color:white]": isActive,
                               "text-[var(--text)] [--offer-fill:none] [--offer-mark-color:currentColor]": !isActive,
                               "group-hover:text-[var(--primary)] group-hover:[--offer-mark-color:var(--primary)]": !isActive,
                           })}
                       />
                   ): (
                       <Icon
                           className={cn('transition-colors', {
                               'fill-[var(--primary)] text-[var(--primary)]': isActive,
                               'fill-none text-[var(--text)]': !isActive,
                               'group-hover:text-[var(--primary)]': !isActive,
                           })}
                       />
                   )}
               </div>
            )}



            {/* TEXT */}
            <span
                className={cn('transition-colors', {
                    'text-[var(--primary)] font-bold': isActive,
                    'text-[var(--text)] group-hover:text-[var(--primary)]': !isActive,
                })}
            >
        {children}
      </span>
        </Link>
    )
}