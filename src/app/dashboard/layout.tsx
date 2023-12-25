import { ReactNode } from 'react';
import { Menu } from '@/components/Menu';
import { Sidebar } from '@/components/Sidebar';

export default function DashboardLayout({ children }: { children: ReactNode }) {
    return (
        <>
            <Sidebar />
            <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%] min-h-screen">
                <Menu />
                <div className="px-6 pt-6 bg-white p-2 m-2 rounded h-screen">
                    {children}
                </div>
            </div>
        </>
    );
}
