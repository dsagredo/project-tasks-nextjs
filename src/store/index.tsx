'use client';

import { ReactNode } from 'react';
import { Provider } from 'jotai';
import { SessionProvider } from 'next-auth/react';

export default function StoreProvider({
    children,
}: {
    children: ReactNode;
}): JSX.Element {
    return (
        <Provider>
            <SessionProvider>{children}</SessionProvider>
        </Provider>
    );
}
