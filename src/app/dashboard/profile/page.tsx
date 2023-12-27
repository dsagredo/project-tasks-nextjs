'use client';

import { useEffect } from 'react';
import { useSession } from 'next-auth/react';

export default function ProfilePage() {
    const { data: session } = useSession();

    useEffect(() => {}, []);

    return (
        <div>
            <h1>Hello Page</h1>
            <hr />
            <div className="flex flex-col">
                <span>{session?.user?.name}</span>
            </div>
        </div>
    );
}
