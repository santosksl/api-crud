import { FastifyInstance } from 'fastify';
import {
    createCategoryController,
    createSupplierController,
} from '../controllers';

async function crudRoutes(fastify: FastifyInstance) {
    fastify.post('/category', async (request, reply) => {
        await createCategoryController.handle(request, reply);
    });

    fastify.post('/supplier', async (request, reply) => {
        await createSupplierController.handle(request, reply);
    });
}

export { crudRoutes };
