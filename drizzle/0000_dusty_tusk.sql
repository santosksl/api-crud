CREATE TABLE `categories` (
	`id_category` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`description` text,
	CONSTRAINT `categories_id_category` PRIMARY KEY(`id_category`)
);
--> statement-breakpoint
CREATE TABLE `products` (
	`id_product` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`description` text,
	`amount` int NOT NULL,
	`price` decimal(10,2) NOT NULL,
	`id_supplier` int,
	`id_category` int,
	CONSTRAINT `products_id_product` PRIMARY KEY(`id_product`)
);
--> statement-breakpoint
CREATE TABLE `suppliers` (
	`id_supplier` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`contact` varchar(255),
	CONSTRAINT `suppliers_id_supplier` PRIMARY KEY(`id_supplier`)
);
--> statement-breakpoint
ALTER TABLE `products` ADD CONSTRAINT `products_id_supplier_suppliers_id_supplier_fk` FOREIGN KEY (`id_supplier`) REFERENCES `suppliers`(`id_supplier`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `products` ADD CONSTRAINT `products_id_category_categories_id_category_fk` FOREIGN KEY (`id_category`) REFERENCES `categories`(`id_category`) ON DELETE no action ON UPDATE no action;