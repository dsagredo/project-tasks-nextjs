import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';
import postSchema from '@/app/validations/postSchema';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const take = Number(searchParams.get('take') ?? '10');
    const skip = Number(searchParams.get('skip') ?? '0');

    if (isNaN(take)) {
        return NextResponse.json(
            { message: 'Take tiene que ser un número' },
            { status: 400 }
        );
    }

    if (isNaN(skip)) {
        return NextResponse.json(
            { message: 'Skip tiene que ser un número' },
            { status: 400 }
        );
    }

    const clients = await prisma.tasks.findMany({
        take: take,
        skip: skip,
    });

    return NextResponse.json(clients);
}

export async function POST(request: Request) {
    try {
        const { complete, description } = await postSchema.validate(
            await request.json()
        );
        const data = await prisma.tasks.create({
            data: {
                description,
                complete,
            },
        });

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json(error, { status: 400 });
    }
}

export async function DELETE(request: Request) {
    try {
        await prisma.tasks.deleteMany({
            where: { complete: true },
        });
        return NextResponse.json('Borrados completados');
    } catch (error) {
        return NextResponse.json(error, { status: 400 });
    }
}
