CREATE TABLE `chapters` (
	`id` int AUTO_INCREMENT NOT NULL,
	`subjectId` int NOT NULL,
	`name` varchar(120) NOT NULL,
	`slug` varchar(140) NOT NULL,
	`position` int NOT NULL DEFAULT 0,
	`description` text,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `chapters_id` PRIMARY KEY(`id`),
	CONSTRAINT `chapters_subject_name_idx` UNIQUE(`subjectId`,`name`)
);
--> statement-breakpoint
CREATE TABLE `exercises` (
	`id` int AUTO_INCREMENT NOT NULL,
	`subjectId` int NOT NULL,
	`kind` enum('course','proof','oral') NOT NULL,
	`title` varchar(180) NOT NULL,
	`statement` text NOT NULL,
	`solution` text,
	`imageUrl` text,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `exercises_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `mastery_records` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int NOT NULL,
	`resourceType` enum('card','exercise') NOT NULL,
	`resourceId` int NOT NULL,
	`status` enum('new','learning','confident') NOT NULL DEFAULT 'new',
	`lastReviewedAt` timestamp NOT NULL DEFAULT (now()),
	`reviewCount` int NOT NULL DEFAULT 0,
	CONSTRAINT `mastery_records_id` PRIMARY KEY(`id`),
	CONSTRAINT `mastery_user_resource_idx` UNIQUE(`userId`,`resourceType`,`resourceId`)
);
--> statement-breakpoint
CREATE TABLE `mind_maps` (
	`id` int AUTO_INCREMENT NOT NULL,
	`subjectId` int NOT NULL,
	`title` varchar(180) NOT NULL,
	`content` text,
	`imageUrl` text,
	`description` text,
	`linkedCardIds` json NOT NULL,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `mind_maps_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `revision_cards` (
	`id` int AUTO_INCREMENT NOT NULL,
	`subjectId` int NOT NULL,
	`chapterId` int,
	`title` varchar(180) NOT NULL,
	`content` text NOT NULL,
	`tags` json NOT NULL,
	`masteryHint` enum('new','learning','confident') NOT NULL DEFAULT 'new',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `revision_cards_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `study_sessions` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int,
	`mode` enum('cards','exercises','oral') NOT NULL,
	`subjectId` int,
	`itemCount` int NOT NULL DEFAULT 0,
	`correctCount` int NOT NULL DEFAULT 0,
	`durationSeconds` int NOT NULL DEFAULT 0,
	`completedAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `study_sessions_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `subjects` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(80) NOT NULL,
	`slug` varchar(100) NOT NULL,
	`accent` varchar(24) NOT NULL DEFAULT '#5DD6C9',
	`description` text,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `subjects_id` PRIMARY KEY(`id`),
	CONSTRAINT `subjects_name_unique` UNIQUE(`name`),
	CONSTRAINT `subjects_slug_unique` UNIQUE(`slug`)
);
--> statement-breakpoint
ALTER TABLE `users` MODIFY COLUMN `role` enum('admin','user') NOT NULL DEFAULT 'user';--> statement-breakpoint
ALTER TABLE `chapters` ADD CONSTRAINT `chapters_subjectId_subjects_id_fk` FOREIGN KEY (`subjectId`) REFERENCES `subjects`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `exercises` ADD CONSTRAINT `exercises_subjectId_subjects_id_fk` FOREIGN KEY (`subjectId`) REFERENCES `subjects`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `mastery_records` ADD CONSTRAINT `mastery_records_userId_users_id_fk` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `mind_maps` ADD CONSTRAINT `mind_maps_subjectId_subjects_id_fk` FOREIGN KEY (`subjectId`) REFERENCES `subjects`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `revision_cards` ADD CONSTRAINT `revision_cards_subjectId_subjects_id_fk` FOREIGN KEY (`subjectId`) REFERENCES `subjects`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `revision_cards` ADD CONSTRAINT `revision_cards_chapterId_chapters_id_fk` FOREIGN KEY (`chapterId`) REFERENCES `chapters`(`id`) ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `study_sessions` ADD CONSTRAINT `study_sessions_userId_users_id_fk` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `study_sessions` ADD CONSTRAINT `study_sessions_subjectId_subjects_id_fk` FOREIGN KEY (`subjectId`) REFERENCES `subjects`(`id`) ON DELETE set null ON UPDATE no action;--> statement-breakpoint
CREATE INDEX `chapters_subject_idx` ON `chapters` (`subjectId`);--> statement-breakpoint
CREATE INDEX `exercises_subject_idx` ON `exercises` (`subjectId`);--> statement-breakpoint
CREATE INDEX `exercises_kind_idx` ON `exercises` (`kind`);--> statement-breakpoint
CREATE INDEX `mastery_user_idx` ON `mastery_records` (`userId`);--> statement-breakpoint
CREATE INDEX `mind_maps_subject_idx` ON `mind_maps` (`subjectId`);--> statement-breakpoint
CREATE INDEX `revision_cards_subject_idx` ON `revision_cards` (`subjectId`);--> statement-breakpoint
CREATE INDEX `revision_cards_chapter_idx` ON `revision_cards` (`chapterId`);--> statement-breakpoint
CREATE INDEX `study_sessions_user_idx` ON `study_sessions` (`userId`);