import {
    InvalidCategoryParamsError,
    ProductDoesNotExistError,
} from '@/useCases/errors/';
import { FindProductUseCase } from '@/useCases/product/FindProductUseCase';
import { FastifyReply, FastifyRequest } from 'fastify';

class FindProductController {
    constructor(private findProductUseCase: FindProductUseCase) {}

    async handle(
        request: FastifyRequest,
        reply: FastifyReply,
    ): Promise<FastifyReply> {
        const { category } = (await request.query) as { category: number };

        try {
            const { ProductAssociatedThisCategory } =
                await this.findProductUseCase.execute(category);
            return reply.status(200).send({ ProductAssociatedThisCategory });
        } catch (err) {
            if (err instanceof InvalidCategoryParamsError) {
                return reply.status(409).send({ message: err.message });
            }

            if (err instanceof ProductDoesNotExistError) {
                return reply.status(409).send({ message: err.message });
            }

            throw err;
        }
    }
}

export { FindProductController };
