ALTER TABLE `exercises` ADD `chapterId` int;--> statement-breakpoint
ALTER TABLE `exercises` ADD CONSTRAINT `exercises_chapterId_chapters_id_fk` FOREIGN KEY (`chapterId`) REFERENCES `chapters`(`id`) ON DELETE set null ON UPDATE no action;--> statement-breakpoint
CREATE INDEX `exercises_chapter_idx` ON `exercises` (`chapterId`);