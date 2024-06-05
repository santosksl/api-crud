import { relations } from 'drizzle-orm';
import {
    decimal,
    int,
    mysqlTable,
    text,
    varchar,
} from 'drizzle-orm/mysql-core';

export const suppliers = mysqlTable('suppliers', {
    id: int('id_supplier').autoincrement().primaryKey(),
    name: varchar('name', { length: 255 }).notNull(),
    contact: varchar('contact', { length: 255 }),
});

export const categories = mysqlTable('categories', {
    id: int('id_category').autoincrement().primaryKey(),
    name: varchar('name', { length: 255 }).notNull(),
    description: text('description'),
});

export const products = mysqlTable('products', {
    id: int('id_product').autoincrement().primaryKey(),
    name: varchar('name', { length: 255 }).notNull(),
    description: text('description'),
    amount: int('amount').notNull(),
    price: decimal('price', { precision: 10, scale: 2 }).notNull(),
    supplierId: int('id_supplier').references(() => suppliers.id),
    categoryId: int('id_category').references(() => categories.id),
});

export const suppliersRelations = relations(suppliers, ({ many }) => ({
    products: many(products),
}));

export const categoriesRelations = relations(categories, ({ many }) => ({
    products: many(products),
}));

export const productsRelations = relations(products, ({ one }) => ({
    supplier: one(suppliers, {
        fields: [products.supplierId],
        references: [suppliers.id],
    }),
    category: one(categories, {
        fields: [products.categoryId],
        references: [categories.id],
    }),
}));
