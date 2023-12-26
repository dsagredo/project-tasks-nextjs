'use client';

import Image from 'next/image';
import { IoAddCircleOutline, IoTrashOutline } from 'react-icons/io5';
import { Product } from '@/data/products';
import { Star } from '.';
import { addProductCart, removeProductCart } from '@/actions';
import { useRouter } from 'next/navigation';

export const Cards = ({
    id,
    name,
    price,
    rating,
    image,
}: Product): JSX.Element => {
    const router = useRouter();

    const onAddtoCart = (): void => {
        addProductCart(id);
        router.refresh();
    };

    const onRemovetoCart = (): void => {
        removeProductCart(id);
        router.refresh();
    };

    return (
        <div className="shadow rounded-lg max-w-sm bg-gray-800 border-gray-100">
            <div className="p-2">
                <Image
                    width={500}
                    height={500}
                    className="rounded"
                    src={image}
                    alt="product image"
                />
            </div>
            <div className="px-5 pb-5">
                <a href="#">
                    <h3 className="font-semibold text-xl tracking-tight text-white">
                        {name}
                    </h3>
                </a>
                <div className="flex items-center mt-2.5 mb-5">
                    {Array(rating)
                        .fill(0)
                        .map(
                            (_v, i: number): JSX.Element => (
                                <Star key={i} />
                            )
                        )}
                    <span className="text-xs font-semibold mr-2 px-2.5 py-0.5 rounded bg-blue-200 text-blue-800 ml-3">
                        {rating}
                    </span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-white">
                        ${price}
                    </span>
                    <div className="flex">
                        <button
                            onClick={onAddtoCart}
                            className="text-white mr-2 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
                        >
                            <IoAddCircleOutline size={25} />
                        </button>
                        <button
                            onClick={onRemovetoCart}
                            className="text-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-red-600 hover:bg-red-700 focus:ring-red-800"
                        >
                            <IoTrashOutline size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
