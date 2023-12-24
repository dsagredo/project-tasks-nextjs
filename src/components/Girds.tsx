'use client';

import { tasks } from '@prisma/client';
import { Items } from '.';
import * as api from '@/helpers/tasks';
import { useRouter } from 'next/navigation';
import { useSetAtom } from 'jotai';
import atomId from '@/store/id';

interface TasksT {
    tasks?: tasks[];
}

export const Girds = ({ tasks = [] }: TasksT): JSX.Element => {
    const router = useRouter();
    const setId = useSetAtom(atomId);

    const toggleTask = async (id: string, complete: boolean): Promise<void> => {
        setId(id);
        await api.updateTask(id, complete);
        router.refresh();
    };

    const onDeleteId = (id: string): void => {
        api.deleteTaskId(id);
        router.refresh();
    };

    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {tasks.map(
                (task, index: number): JSX.Element => (
                    <Items
                        key={index}
                        task={task}
                        toggleTask={toggleTask}
                        onDeleteId={onDeleteId}
                    />
                )
            )}
        </div>
    );
};
