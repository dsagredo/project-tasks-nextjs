import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';
import putSchema from '../../../validations/putSchema';

interface SagmentsT {
    params: {
        id: string;
    };
}

export async function GET(_request: Request, { params }: SagmentsT) {
    const { id } = params;
    const tasks = await prisma.tasks.findFirst({ where: { id } });

    if (!tasks) {
        return NextResponse.json(
            { message: `el id ${id} no existe` },
            { status: 404 }
        );
    }
    return NextResponse.json(tasks);
}

export async function PUT(request: Request, { params }: SagmentsT) {
    const { id } = params;
    const tasks = await prisma.tasks.findFirst({ where: { id } });

    if (!tasks) {
        return NextResponse.json(
            { message: `el id ${id} no existe` },
            { status: 404 }
        );
    }

    try {
        const body = await request.json();

        const updated = await putSchema.validate(
            await prisma.tasks.update({
                where: { id },
                data: { ...body },
            })
        );

        return NextResponse.json(updated);
    } catch (error) {
        return NextResponse.json(error, { status: 400 });
    }
}

export async function DELETE(_request: Request, { params }: SagmentsT) {
    const { id } = params;
    const task = await prisma.tasks.findFirst({ where: { id } });

    if (!task) {
        return NextResponse.json(
            { message: `el id ${id} no existe` },
            { status: 404 }
        );
    }

    try {
        await prisma.tasks.delete({
            where: { id },
        });

        return NextResponse.json('Borrado ID');
    } catch (error) {
        return NextResponse.json(error, { status: 400 });
    }
}
