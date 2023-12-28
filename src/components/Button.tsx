'use client';

import { useSession, signOut } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { CiLogout } from 'react-icons/ci';
import { IoShieldOutline } from 'react-icons/io5';

export const Button = (): JSX.Element => {
    const { status } = useSession();

    if (status === 'loading') {
        return (
            <button className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
                <IoShieldOutline />
                <span className="group-hover:text-gray-700">Espere...</span>
            </button>
        );
    }
    if (status === 'unauthenticated') {
        return redirect('/api/auth/signin');
    }
    return (
        <button
            onClick={() => signOut()}
            className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
        >
            <CiLogout />
            <span className="group-hover:text-gray-700">Logout</span>
        </button>
    );
};
