import { Cards } from '@/components';
import { Product, products } from '@/data/products';

export default function ProductsPage(): JSX.Element {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {products.map(
                (product: Product): JSX.Element => (
                    <Cards key={product.id} {...product} />
                )
            )}
        </div>
    );
}
