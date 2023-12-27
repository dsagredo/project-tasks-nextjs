import { ReactNode } from 'react';
import { cookies } from 'next/headers';
import { Menu, Sidebar } from '@/components';
import { useSession } from 'next-auth/react';

export default function DashboardLayout({
    children,
}: {
    children: ReactNode;
}): JSX.Element {
    const cookieStore = cookies();
    const cart = JSON.parse(cookieStore.get('cart')?.value ?? '{}');

    const getTotalCount = (cart: { [id: string]: number }): number => {
        let items = 0;
        Object.values(cart).forEach((value: number): void => {
            items += value as number;
        });

        return items;
    };

    return (
        <>
            <Sidebar />
            <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
                <Menu totalItems={getTotalCount(cart)} />
                <div className="px-6 pt-6 bg-white p-2 m-2 rounded min-h-screen">
                    {children}
                </div>
            </div>
        </>
    );
}
