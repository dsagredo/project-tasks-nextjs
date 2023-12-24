import { tasks } from '@prisma/client';

export const updateTask = async (
    id: string,
    complete: boolean
): Promise<tasks> => {
    const body = { complete };

    const task = await fetch(`/api/tasks/${id}`, {
        method: 'PUT',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((res) => res.json());

    return task;
};

export const createTask = async (description: string): Promise<tasks> => {
    const body = { description };

    const task = await fetch('/api/tasks', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((res) => res.json());

    return task;
};

export const deleteTask = async (): Promise<boolean> => {
    return await fetch('/api/tasks', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((res) => res.json());
};

export const deleteTaskId = async (id: string) => {
    return await fetch(`/api/tasks/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((res) => res.json());
};
