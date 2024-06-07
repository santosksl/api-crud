import { CreateProductUseCase } from '@/useCases/product/CreateProductUseCase';
import {
    CategoryDoesNotExistError,
    SupplierDoesNotExistError,
} from '@/useCases/errors';
import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';

const productSchema = z.object({
    name: z
        .string()
        .min(2, { message: 'Name must be at least 2 characters long' }),
    description: z
        .string()
        .min(2, { message: 'Description must be at least 2 characters long' }),
    amount: z.number(),
    price: z
        .number()
        .min(1, { message: 'A product must carry a higher price' })
        .positive({ message: 'Invalid price format' })
        .nonnegative({ message: 'Invalid price format' }),
    supplierId: z.number(),
    categoryId: z.number(),
});

class CreateProductController {
    constructor(private createProductUseCase: CreateProductUseCase) {}

    async handle(
        request: FastifyRequest,
        reply: FastifyReply,
    ): Promise<FastifyReply> {
        const { name, description, amount, price, supplierId, categoryId } =
            productSchema.parse(request.body);

        try {
            await this.createProductUseCase.execute({
                name,
                description,
                amount,
                price,
                supplierId,
                categoryId,
            });
            return reply
                .status(201)
                .send({ message: 'Product created successfully' });
        } catch (err) {
            if (err instanceof SupplierDoesNotExistError) {
                return reply.status(409).send({ message: err.message });
            } else if (err instanceof CategoryDoesNotExistError) {
                return reply.status(409).send({ message: err.message });
            }

            throw err;
        }
    }
}

export { CreateProductController };
