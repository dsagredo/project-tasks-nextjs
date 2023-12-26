'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { setCookie } from 'cookies-next';

interface TabT {
    currentTab?: number;
    tabOptions?: number[];
}

export const TabBar = ({
    currentTab = 1,
    tabOptions = [1, 2, 3, 4],
}: TabT): JSX.Element => {
    const [selected, setSelected] = useState(currentTab);
    const router = useRouter();

    const onTabSelected = (tab: number): void => {
        setSelected(tab);
        setCookie('selectedTab', tab.toString());
        router.refresh();
    };

    return (
        <div
            className={`grid w-full space-x-2 rounded-xl bg-gray-200 p-2 grid-cols-${tabOptions.length}`}
        >
            {tabOptions.map(
                (tab: number, index: number): JSX.Element => (
                    <div key={index}>
                        <input
                            checked={selected === tab}
                            type="radio"
                            onChange={(): void => {}}
                            id={tab.toString()}
                            className="peer hidden"
                        />
                        <label
                            onClick={() => onTabSelected(tab)}
                            className="transition-all block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white"
                        >
                            {tab}
                        </label>
                    </div>
                )
            )}
        </div>
    );
};
