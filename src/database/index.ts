import { drizzle } from 'drizzle-orm/mysql2';
import mysql from 'mysql2/promise';

const connection = await mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'docker',
    database: 'apicrud',
    password: 'teste',
});

export const db = drizzle(connection);
