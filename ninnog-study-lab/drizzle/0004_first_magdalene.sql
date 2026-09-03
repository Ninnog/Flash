CREATE TABLE `study_sheets` (
	`id` int AUTO_INCREMENT NOT NULL,
	`subjectId` int NOT NULL,
	`chapterId` int,
	`title` varchar(180) NOT NULL,
	`content` text NOT NULL,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `study_sheets_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
ALTER TABLE `study_sheets` ADD CONSTRAINT `study_sheets_subjectId_subjects_id_fk` FOREIGN KEY (`subjectId`) REFERENCES `subjects`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `study_sheets` ADD CONSTRAINT `study_sheets_chapterId_chapters_id_fk` FOREIGN KEY (`chapterId`) REFERENCES `chapters`(`id`) ON DELETE set null ON UPDATE no action;--> statement-breakpoint
CREATE INDEX `study_sheets_subject_idx` ON `study_sheets` (`subjectId`);--> statement-breakpoint
CREATE INDEX `study_sheets_chapter_idx` ON `study_sheets` (`chapterId`);