import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET(_request: Request) {
    /* delete * from tasks */
    await prisma.tasks.deleteMany();

    await prisma.tasks.createMany({
        data: [
            { description: 'Piedra del alma', complete: true },
            { description: 'Piedra del poder' },
            { description: 'Piedra del tiempo' },
            { description: 'Piedra del espacio' },
            { description: 'Piedra del realidad' },
        ],
    });

    /*await prisma.tasks.create({
        data: {
            description: 'Piedra del alma',
            complete: true,
        },
    });*/

    return NextResponse.json({ message: 'Exito database' });
}
