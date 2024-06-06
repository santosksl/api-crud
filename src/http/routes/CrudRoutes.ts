import { FastifyInstance } from 'fastify';
import {
    createCategoryController,
    createProductController,
    createSupplierController,
    deleteProductController,
    findProductController,
    updateProductController,
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

    fastify.put('/product/:id', async (request, reply) => {
        await updateProductController.handle(request, reply);
    });

    fastify.delete('/product/:id', async (request, reply) => {
        await deleteProductController.handle(request, reply);
    });

    fastify.get('/product/:category', async (request, reply) => {
        await findProductController.handle(request, reply);
    });
}

export { crudRoutes };
