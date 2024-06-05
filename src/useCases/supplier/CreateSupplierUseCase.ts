import { db } from '@/database';
import { suppliers } from '@/database/schema';
import { ISupplierDTO } from '@/repositories/ISupplierRepository';
import { eq } from 'drizzle-orm';
import { SupplierAlreadyExistsError } from '../errors/';

class CreateSupplierUseCase {
    async execute({ name, email }: ISupplierDTO) {
        const alreadyExistsEmail = await db
            .select()
            .from(suppliers)
            .where(eq(suppliers.email, email));

        if (alreadyExistsEmail.length > 0) {
            console.error('E-mail already exists');
            throw new SupplierAlreadyExistsError();
        }

        await db.insert(suppliers).values({ name, email });
    }
}

export { CreateSupplierUseCase };
