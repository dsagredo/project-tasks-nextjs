import { WidgetItem } from '@/components';
import { Card } from '@/components/Card';
import { products, type Product } from '@/data/products';
import { cookies } from 'next/headers';

export const metadata = {
    title: 'Shopping Cart',
    description: 'SEO Title',
};

interface ProductsCartT {
    product: Product;
    quantity: number;
}

export default function CartPage(): JSX.Element {
    const cookieStore = cookies();
    const cart = JSON.parse(cookieStore.get('cart')?.value ?? '{}') as {
        [id: string]: number;
    };

    const getProductsCart = (cart: {
        [id: string]: number;
    }): ProductsCartT[] => {
        const productsCart: ProductsCartT[] = [];
        for (const id of Object.keys(cart)) {
            const product = products.find(
                (prod: Product): boolean => prod.id === id
            );
            if (product) {
                productsCart.push({ product: product, quantity: cart[id] });
            }
        }
        return productsCart;
    };

    const productsCart = getProductsCart(cart);

    const totalPay = productsCart.reduce(
        (prev: number, current: ProductsCartT): number =>
            current.product.price * current.quantity + prev,
        0
    );

    return (
        <div>
            <h1 className="text-5xl">Productos en el carrito</h1>
            <hr className="mb-2" />
            <div className="flex flex-col sm:flex-row gap-2 w-full">
                <div className="flex flex-col gap-2 w-full sm:w-8/12">
                    {productsCart.map(
                        ({ product, quantity }: ProductsCartT): JSX.Element => (
                            <Card
                                key={product.id}
                                product={product}
                                quantity={quantity}
                            />
                        )
                    )}
                </div>
                <div className="flex flex-col w-full sm:w-4/12">
                    <WidgetItem title="Total a pagar">
                        <div className="mt-2 flex justify-center gap-4">
                            <h3 className="text-3xl font-bold text-gray-700">
                                ${(totalPay * 1.15).toFixed(2)}
                            </h3>
                        </div>
                        <span className="font-bold text-center text-gray-500">
                            Impuestos 15%: ${(totalPay * 0.15).toFixed(2)}
                        </span>
                    </WidgetItem>
                </div>
            </div>
        </div>
    );
}
