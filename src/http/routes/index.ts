import { FastifyInstance } from 'fastify';
import { crudRoutes } from './CrudRoutes';

class Routes {
    static RegisterRoutes(routerController: FastifyInstance) {
        routerController.register(crudRoutes);
    }
}

export { Routes };
