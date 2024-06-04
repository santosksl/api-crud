import { defineConfig } from 'drizzle-kit';

export default defineConfig({
    out: './drizzle',
    schema: './src/database/schema.ts',
    dialect: 'mysql',
    dbCredentials: {
        host: 'localhost',
        port: 3306,
        user: 'docker',
        database: 'apicrud',
        password: 'teste',
    },
});
