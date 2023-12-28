'use client';

import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

interface SidebarT {
    icon: ReactNode;
    path: string;
    title: string;
}

export const SidebarItem = ({ icon, path, title }: SidebarT): JSX.Element => {
    const pathName = usePathname();
    return (
        <li>
            <Link
                href={path}
                className={`
                px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group
                hover:bg-gradient-to-r hover:bg-gray-900 hover:text-white
                ${
                    pathName === path
                        ? 'text-white bg-gradient-to-r from-black to-slate-600'
                        : ''
                }
                `}
            >
                {icon}
                <span className="group-hover:text-white-700">{title}</span>
            </Link>
        </li>
    );
};
