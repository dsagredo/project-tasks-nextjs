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
            </div>
        </div>
    );
}
