'use client';

import { useEffect, useState } from 'react';
import { LoadingSvg } from '@/app/icons/LoadingSvg';

export const DateTime = (): JSX.Element => {
    const [dateLocaleString, setDateLocaleString] = useState('');

    useEffect((): (() => void) => {
        const interval = setInterval((): void => {
            const formattedDateTime = new Date().toLocaleString('en-US', {
                day: '2-digit',
                hour12: true,
                month: 'long',
                weekday: 'short',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                timeZone: 'UTC',
            });
            setTimeout((): void => {
                setDateLocaleString(formattedDateTime);
            }, 500);
        }, 500);
        return (): void => clearInterval(interval);
    }, []);

    const [weekday, dayAndMonth, year] = dateLocaleString.split(',');

    return !dateLocaleString ? (
        <div className="flex justify-center">
            <LoadingSvg />
        </div>
    ) : (
        <div className="flex flex-col items-center justify-center">
            <span className="m-2 text-red-400 text-5xl uppercase">
                {weekday}
            </span>
            <span className="m-2 text-red-400 text-2xl uppercase">
                {dayAndMonth} {year}
            </span>
        </div>
    );
};
