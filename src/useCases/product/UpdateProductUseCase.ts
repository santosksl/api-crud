import { db } from '@/database';
import { products } from '@/database/schema';
import { IProductDTO } from '@/repositories/IProductRepository';
import { eq, sql } from 'drizzle-orm';
import { ProductDoesNotExistError } from '../errors';

interface IProductSQLRequest {
    name: string;
    description: string | null;
    amount: number;
    price: string;
    supplierId: number | null;
    categoryId: number | null;
    id: number;
}

interface UpdateProductUseCaseResponse {
    previousProduct: IProductSQLRequest[];
    updatedProduct: IProductSQLRequest[];
}

class UpdateProductUseCase {
    async execute(
        id: number,
        {
            name,
            description,
            amount,
            price,
            supplierId,
            categoryId,
        }: IProductDTO,
    ): Promise<UpdateProductUseCaseResponse> {
        const alreadyExistsProduct = await db
            .select()
            .from(products)
            .where(eq(products.id, id));

        if (alreadyExistsProduct.length <= 0) {
            throw new ProductDoesNotExistError();
        }

        const previousProduct = await db.select().from(products);

        await db.update(products).set({
            name: sql`${name}`,
            description: sql`${description}`,
            amount: sql`${amount}`,
            price: sql`${price}`,
            supplierId: sql`${supplierId}`,
            categoryId: sql`${categoryId}`,
        });

        const updatedProduct = await db.select().from(products);

        return { previousProduct, updatedProduct };
    }
}

export { UpdateProductUseCase };

