import { NewTask } from '@/components/NewTask';
import { Girds } from '@/components/Girds';
import prisma from '@/lib/prisma';

export const metadata = {
    title: 'Lists Tasks',
    description: 'SEO Title',
};

export default async function TasksPage(): Promise<JSX.Element> {
    const tasks = await prisma.tasks.findMany({
        orderBy: { description: 'asc' },
    });

    return (
        <div>
            <div className="w-full px-3 mx-5 mb-5">
                <NewTask />
            </div>
            <Girds tasks={tasks} />
        </div>
    );
}
