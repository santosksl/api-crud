import { db } from '@/database';
import { categories, products, suppliers } from '@/database/schema';
import { IProductDTO } from '@/repositories/IProductRepository';
import { eq, sql } from 'drizzle-orm';
import {
    CategoryDoesNotExistError,
    ProductAlreadyExistsError,
    SupplierDoesNotExistError,
} from '../errors';

class CreateProductUseCase {
    async execute({
        name,
        description,
        amount,
        price,
        supplierId,
        categoryId,
    }: IProductDTO) {
        const [
            alreadyExistsSupplier,
            alreadyExistsCategory,
            alreadyExistsProduct,
        ] = await Promise.all([
            db.select().from(suppliers).where(eq(suppliers.id, supplierId)),
            db.select().from(categories).where(eq(categories.id, categoryId)),
            db.select().from(products).where(eq(products.name, name)),
        ]);

        if (alreadyExistsSupplier.length <= 0) {
            throw new SupplierDoesNotExistError();
        } else if (alreadyExistsCategory.length <= 0) {
            throw new CategoryDoesNotExistError();
        } else if (alreadyExistsProduct.length > 0) {
            throw new ProductAlreadyExistsError();
        }

        await db.insert(products).values({
            name: sql`${name}`,
            description: sql`${description}`,
            amount: sql`${amount}`,
            price: sql`${price}`,
            supplierId: sql`${supplierId}`,
            categoryId: sql`${categoryId}`,
        });
    }
}

export { CreateProductUseCase };
