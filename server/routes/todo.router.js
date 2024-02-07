const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// GET
router.get('/', (req, res) => {
  const dbQuery = 'SELECT * FROM "weekend-to-do-app" ORDER BY "status" ASC;';

  pool
    .query(dbQuery)
    .then((result) => {
      // console.log('RESULT', result);
      res.send(result.rows);
    })
    .catch((err) => {
      console.log('ERROR', err);

      res.send(500);
    });
});

// POST
router.post('/', (req, res) => {
  const newTask = req.body;
  const sqlText = `INSERT INTO "weekend-to-do-app" ("task")
                    VALUES ($1)`;
  // Let sql sanitize your inputs (NO Bobby Drop Tables here!)
  // the $1, $2, etc get substituted with the values from the array below
  pool
    .query(sqlText, [newTask.task])
    .then((result) => {
      // console.log(`Added new task to the database`, newTask);
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log(`Error making database query ${sqlText}`, error);
      res.sendStatus(500); // Good server always responds
    });
});

// PUT
router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const updateTask = req.body;
  const queryText = `UPDATE "weekend-to-do-app" SET "status" = NOT "status"
    WHERE "id" = $1;`;
  // console.log('todo router PUT');

  pool
      .query(queryText, [id])
      .then(() => {
          res.sendStatus(200);
        })
        .catch((err) => {
          console.log(updateTask.status);
          console.log('ERROR:', err);
          res.sendStatus(500);
      });
});

// DELETE
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const queryText = 'DELETE FROM "weekend-to-do-app" WHERE "id" = $1;';
  pool
    .query(queryText, [id])
    .then(() => {
      res.sendStatus(200);
    })
    .catch(() => {
      console.log('ERROR', err);
      res.sendStatus(500);
    });
});

module.exports = router;
