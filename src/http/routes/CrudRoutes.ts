import { FastifyInstance } from 'fastify';
import { createCategoryController } from '../controllers';

async function crudRoutes(fastify: FastifyInstance) {
    fastify.post('/category', async (request, reply) => {
        await createCategoryController.handle(request, reply);
    });
}

export { crudRoutes };
