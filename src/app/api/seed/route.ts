import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';

export async function GET(_request: Request) {
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

    return NextResponse.json({ message: 'Exito database' });
}
