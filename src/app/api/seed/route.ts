import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';

export async function GET(_request: Request) {
    /* delete * from tasks */
    await prisma.user.deleteMany();
    await prisma.tasks.deleteMany();

    await prisma.user.create({
        data: {
            email: 'demo@example.com',
            password: bcrypt.hashSync('123456'),
            roles: ['member'],
            tasks: {
                create: [
                    { description: 'Piedra del alma', complete: true },
                    { description: 'Piedra del poder' },
                    { description: 'Piedra del tiempo' },
                    { description: 'Piedra del espacio' },
                    { description: 'Piedra del realidad' },
                ],
            },
        },
    });

    // await prisma.tasks.createMany({
    //     data: [
    //         { description: 'Piedra del alma', complete: true },
    //         { description: 'Piedra del poder' },
    //         { description: 'Piedra del tiempo' },
    //         { description: 'Piedra del espacio' },
    //         { description: 'Piedra del realidad' },
    //     ],
    // });

    /*await prisma.tasks.create({
        data: {
            description: 'Piedra del alma',
            complete: true,
        },
    });*/

    return NextResponse.json({ message: 'Exito database' });
}
