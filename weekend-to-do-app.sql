CREATE TABLE "weekeend-to-do-app" (
	"id" SERIAL PRIMARY KEY,
	"task" VARCHAR (250) NOT NULL,
	"task-status" BOOLEAN DEFAULT FALSE,
);