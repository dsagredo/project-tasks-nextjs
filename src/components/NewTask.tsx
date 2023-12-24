'use client';

import { ChangeEvent, FormEvent, useState } from 'react';
import * as api from '@/helpers/tasks';
import { IoTrashOutline } from 'react-icons/io5';
import { useAtomValue } from 'jotai';
import atomId from '@/store/id';
import { useRouter } from 'next/navigation';

export const NewTask = (): JSX.Element => {
    const router = useRouter();
    const id = useAtomValue(atomId);
    const [description, setDescription] = useState('');

    const onSubmit = (e: FormEvent): void => {
        e.preventDefault();
        if (description.trim().length === 0) return;
        api.createTask(description);
        setDescription('');
        router.refresh();
    };

    const onDelete = async (): Promise<void> => {
        await api.deleteTask();
        router.refresh();
    };

    return (
        <form onSubmit={onSubmit} className="flex w-full">
            <input
                onChange={(e: ChangeEvent<HTMLInputElement>): void =>
                    setDescription(e.target.value)
                }
                value={description}
                type="text"
                className="w-6/12 -ml-10 pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-sky-500 transition-"
                placeholder="¿Qué necesita ser hecho?"
            />
            <button
                className="flex items-center justify-center rounded ml-2 bg-sky-500 p-2 text-white hover:bg-sky-700"
                type="submit"
            >
                Crear
            </button>
            <span className="flex flex-1"></span>
            <button
                onClick={() => onDelete()}
                className="flex items-center justify-center rounded ml-2 bg-red-400 p-2 text-white hover:bg-red-700"
                type="button"
            >
                <IoTrashOutline />
                <span className="ml-2">Borrar</span>
            </button>
        </form>
    );
};
