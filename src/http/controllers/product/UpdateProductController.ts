import { ProductDoesNotExistError } from '@/useCases/errors/';
import { UpdateProductUseCase } from '@/useCases/product/UpdateProductUseCase';
import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';

const editProductSchema = z.object({
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

class UpdateProductController {
    constructor(private updateProductUseCase: UpdateProductUseCase) {}

    async handle(
        request: FastifyRequest,
        reply: FastifyReply,
    ): Promise<FastifyReply> {
        const { id } = request.params as { id: number };
        const { name, description, amount, price, supplierId, categoryId } =
            editProductSchema.parse(request.body);

        try {
            const { previousProduct, updatedProduct } =
                await this.updateProductUseCase.execute(id, {
                    name,
                    description,
                    amount,
                    price,
                    supplierId,
                    categoryId,
                });

            return reply.status(200).send({
                message: 'Product updated successfully',
                previousProduct,
                updatedProduct,
            });
        } catch (err) {
            if (err instanceof ProductDoesNotExistError) {
                return reply.status(409).send({ message: err.message });
            }

            throw err;
        }
    }
}

export { UpdateProductController };
