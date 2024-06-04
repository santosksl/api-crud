import { relations } from 'drizzle-orm';
import {
    decimal,
    int,
    mysqlTable,
    text,
    varchar,
} from 'drizzle-orm/mysql-core';

export const Suppliers = mysqlTable('suppliers', {
    id: int('id_supplier').autoincrement().primaryKey(),
    name: varchar('name', { length: 255 }).notNull(),
    contact: varchar('contact', { length: 255 }),
});

export const Categories = mysqlTable('categories', {
    id: int('id_category').autoincrement().primaryKey(),
    name: varchar('name', { length: 255 }).notNull(),
    description: text('description'),
});

export const Products = mysqlTable('products', {
    id: int('id_product').autoincrement().primaryKey(),
    name: varchar('name', { length: 255 }).notNull(),
    description: text('description'),
    amount: int('amount').notNull(),
    price: decimal('price', { precision: 10, scale: 2 }).notNull(),
    supplierId: int('id_supplier').references(() => Suppliers.id),
    categoryId: int('id_category').references(() => Categories.id),
});

export const suppliersRelations = relations(Suppliers, ({ many }) => ({
    products: many(Products),
}));

export const categoriesRelations = relations(Categories, ({ many }) => ({
    products: many(Products),
}));

export const productsRelations = relations(Products, ({ one }) => ({
    supplier: one(Suppliers, {
        fields: [Products.supplierId],
        references: [Suppliers.id],
    }),
    category: one(Categories, {
        fields: [Products.categoryId],
        references: [Categories.id],
    }),
}));
