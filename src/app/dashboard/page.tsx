import { WidgetItem } from '@/components/WidgetItem';
import { DateTime } from '@/components/DateTime';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';
import prisma from '@/lib/prisma';
import { getUserSession } from '@/actions/auth';

export default async function DashboardPage(): Promise<JSX.Element> {
    const session = await getServerSession(authOptions);
    const user = await getUserSession();

    if (!session || !user) {
        redirect('/api/auth/signin');
    }

    const tasks = await prisma.tasks.findMany({
        where: { userId: user.id },
    });

    return (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
            <WidgetItem title="My tasks">
                <div className="flex flex-col items-center">
                    <span className="text-8xl text-red-400">
                        {tasks.length}
                    </span>
                </div>
            </WidgetItem>

            <WidgetItem>
                <DateTime />
            </WidgetItem>
        </div>
    );
}
