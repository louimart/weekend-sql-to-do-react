CREATE TABLE "weekend-to-do-app" (
	"id" SERIAL PRIMARY KEY,
	"task" VARCHAR (250) NOT NULL,
	"status" BOOLEAN DEFAULT FALSE
);

INSERT INTO "weekend-to-do-app" ("task", "status")
VALUES ('make bed', false),
('wash dishes', false),
('vacuum', false);