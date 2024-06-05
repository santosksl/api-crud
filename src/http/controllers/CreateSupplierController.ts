import { CreateSupplierUseCase } from '@/useCases/CreateSupplierUseCase';
import { SupplierAlreadyExistsError } from '@/useCases/errors';
import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';

const supplierSchema = z.object({
    name: z
        .string()
        .min(2, { message: 'Name must be at least 2 characters long' }),
    email: z.string().email({ message: 'Invalid email format' }),
});

class CreateSupplierController {
    constructor(private createSupplierUseCase: CreateSupplierUseCase) {}

    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { name, email } = supplierSchema.parse(request.body);

        try {
            await this.createSupplierUseCase.execute({ name, email });
            return reply
                .status(201)
                .send({ message: '✔️  Supplier created successfully' });
        } catch (err) {
            if (err instanceof SupplierAlreadyExistsError) {
                return reply.status(409).send({ message: err.message });
            }

            throw err;
        }
    }
}

export { CreateSupplierController };
