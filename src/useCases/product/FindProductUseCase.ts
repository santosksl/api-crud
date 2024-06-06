import { db } from '@/database';
import { products } from '@/database/schema';
import { eq } from 'drizzle-orm';
import {
    InvalidCategoryParamsError,
    ProductDoesNotExistError,
} from '../errors';

interface IProductSQLRequest {
    name: string;
    description: string | null;
    amount: number;
    price: string;
    supplierId: number | null;
    categoryId: number | null;
    id: number;
}

interface FindProductUseCaseResponse {
    ProductAssociatedThisCategory: IProductSQLRequest[];
}

class FindProductUseCase {
    async execute(category: number): Promise<FindProductUseCaseResponse> {
        if (!category || isNaN(category)) {
            throw new InvalidCategoryParamsError();
        }

        console.log('Category:', category);

        const ProductAssociatedThisCategory = await db
            .select()
            .from(products)
            .where(eq(products.categoryId, category));

        if (ProductAssociatedThisCategory.length <= 0) {
            console.log(ProductAssociatedThisCategory);
            throw new ProductDoesNotExistError();
        }

        return { ProductAssociatedThisCategory };
    }
}

export { FindProductUseCase };
