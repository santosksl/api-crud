import { CreateCategoryUseCase } from '@/useCases/category/CreateCategoryUseCase';
import { CategoryAlreadyExistsError } from '@/useCases/errors/';
import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';

const categorySchema = z.object({
    name: z.string(),
    description: z.string(),
});

class CreateCategoryController {
    constructor(private createCategoryUseCase: CreateCategoryUseCase) {}

    async handle(
        request: FastifyRequest,
        reply: FastifyReply,
    ): Promise<FastifyReply> {
        const { name, description } = categorySchema.parse(request.body);

        try {
            await this.createCategoryUseCase.execute({ name, description });
            return reply
                .status(201)
                .send({ message: '✔️  Category created successfully' });
        } catch (err) {
            if (err instanceof CategoryAlreadyExistsError) {
                return reply.status(409).send({ message: err.message });
            }

            throw err;
        }
    }
}

export { CreateCategoryController };
