import { tasks } from '@prisma/client';
import { IoTrashOutline } from 'react-icons/io5';
import { IoCheckboxOutline, IoSquareOutline } from 'react-icons/io5';
import styles from './Items.module.css';

interface taskT {
    task: tasks;
    toggleTask: (id: string, complete: boolean) => Promise<tasks | void>;
    onDeleteId: (id: string) => void;
}

export const Items = ({ task, toggleTask, onDeleteId }: taskT): JSX.Element => {
    return (
        <div className={task.complete ? styles.done : styles.pending}>
            <div className="flex flex-col sm:flex-row w-full justify-between items-center gap-4">
                <div className="flex items-center">
                    <div
                        onClick={() => toggleTask(task.id, !task.complete)}
                        className={`flex p-2 rounded-md cursor-pointer hover:bg-opacity-60 ${
                            task.complete ? ' bg-blue-100' : ' bg-red3-100'
                        }`}
                    >
                        {task.complete ? (
                            <IoCheckboxOutline size={30} />
                        ) : (
                            <IoSquareOutline size={30} />
                        )}
                    </div>
                    {task.description}
                </div>
                <div className="flex">
                    <button
                        onClick={() => onDeleteId(task.id)}
                        className="flex items-center justify-center rounded ml-2 bg-red-400 p-2 text-white hover:bg-red-700"
                        type="button"
                    >
                        <IoTrashOutline />
                    </button>
                </div>
            </div>
        </div>
    );
};
