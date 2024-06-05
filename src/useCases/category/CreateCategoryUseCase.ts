import { db } from '@/database';
import { categories } from '@/database/schema';
import { ICategoryDTO } from '@/repositories/ICategoryRepository';
import { eq } from 'drizzle-orm';
import { CategoryAlreadyExistsError } from '../errors/';

/* interface CategoryUseCaseResponse {
    data: ICategoryDTO;
} */

class CreateCategoryUseCase {
    async execute({ name, description }: ICategoryDTO) {
        const alreadyExistsCategory = await db
            .select()
            .from(categories)
            .where(eq(categories.name, name));

        if (alreadyExistsCategory.length > 0) {
            console.error('Category already exists');
            throw new CategoryAlreadyExistsError();
        }

        await db.insert(categories).values({ name, description });
    }
}

export { CreateCategoryUseCase };
