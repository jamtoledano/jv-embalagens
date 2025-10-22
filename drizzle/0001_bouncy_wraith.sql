CREATE TABLE `quotations` (
	`id` int AUTO_INCREMENT NOT NULL,
	`fullName` varchar(255) NOT NULL,
	`email` varchar(320) NOT NULL,
	`phone` varchar(20) NOT NULL,
	`company` varchar(255) NOT NULL,
	`packagingType` varchar(255) NOT NULL,
	`estimatedQuantity` int NOT NULL,
	`message` text,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `quotations_id` PRIMARY KEY(`id`)
);
