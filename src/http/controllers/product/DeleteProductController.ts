import { DeleteProductUseCase } from '@/useCases/product/DeleteProductUseCase';
import { ProductDoesNotExistError } from '@/useCases/errors/';
import { FastifyReply, FastifyRequest } from 'fastify';

class DeleteProductController {
    constructor(private deleteProductUseCase: DeleteProductUseCase) {}

    async handle(
        request: FastifyRequest,
        reply: FastifyReply,
    ): Promise<FastifyReply> {
        const { id } = request.params as { id: number };

        try {
            await this.deleteProductUseCase.execute(id);
            return reply.status(200).send({ message: '✔️ Product deleted!' });
        } catch (err) {
            if (err instanceof ProductDoesNotExistError) {
                return reply.status(409).send({ message: err.message });
            }

            throw err;
        }
    }
}

export { DeleteProductController };
