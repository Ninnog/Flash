ALTER TABLE `study_sessions` MODIFY COLUMN `mode` enum('cards','exercises','oral','mind_maps') NOT NULL;--> statement-breakpoint
ALTER TABLE `study_sessions` ADD `settings` json;