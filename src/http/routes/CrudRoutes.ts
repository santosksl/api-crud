import { FastifyInstance } from 'fastify';
import {
    createCategoryController,
    createProductController,
    createSupplierController,
} from '../controllers';

async function crudRoutes(fastify: FastifyInstance) {
    fastify.post('/category', async (request, reply) => {
        await createCategoryController.handle(request, reply);
    });

    fastify.post('/supplier', async (request, reply) => {
        await createSupplierController.handle(request, reply);
    });

    fastify.post('/product', async (request, reply) => {
        await createProductController.handle(request, reply);
    });
}

export { crudRoutes };
