import { db } from '@/database';
import { products } from '@/database/schema';
import { eq } from 'drizzle-orm';
import { ProductDoesNotExistError } from './errors';

class DeleteProductUseCase {
    async execute(id: number) {
        const alreadyExistsProduct = await db
            .select()
            .from(products)
            .where(eq(products.id, id));

        if (alreadyExistsProduct.length <= 0) {
            throw new ProductDoesNotExistError();
        }

        await db.delete(products).where(eq(products.id, id));
    }
}

export { DeleteProductUseCase };
