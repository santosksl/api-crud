import { migrate } from 'drizzle-orm/mysql2/migrator';
import fastify from 'fastify';
import { Server } from 'http';
import { db } from './database';
import { Routes } from './http/routes';

class SetupApplication {
    private server?: Server;

    constructor(
        private port: number,
        public app = fastify(),
    ) {}

    public initApplication() {
        this.setupFastify();
        this.setupRoutes();
    }

    private async setupFastify() {
        await migrate(db, { migrationsFolder: './drizzle' });
    }

    private setupRoutes() {
        Routes.RegisterRoutes(this.app);
    }

    public startApplication() {
        this.app
            .listen({
                host: '0.0.0.0',
                port: this.port,
            })
            .then((address) => {
                console.log(`🚀 HTTP Server Running!\n🎯 Address: ${address}`);
            });
    }
}

export { SetupApplication };
