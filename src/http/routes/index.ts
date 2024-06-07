import cors from '@fastify/cors';
import { FastifyInstance } from 'fastify';
import { crudRoutes } from './CrudRoutes';

class Routes {
    static RegisterRoutes(routerController: FastifyInstance) {
        routerController.register(cors, { origin: true });
        routerController.register(crudRoutes);
    }
}

export { Routes };
