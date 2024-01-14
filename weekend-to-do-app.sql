CREATE TABLE "weekeend-to-do-app" (
	"id" SERIAL PRIMARY KEY,
	"task" VARCHAR (250) NOT NULL,
	"task-status" BOOLEAN DEFAULT FALSE,
);

INSERT INTO "weekend-to-do-app" ("task", "task-status")
VALUES ('make bed', false),
('wash dishes', false),
('vacuum', false);