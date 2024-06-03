import fastify from 'fastify';
import { Server } from 'http';

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

    private async setupFastify() {}

    private setupRoutes() {}

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
