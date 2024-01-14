const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// GET
router.get('/', (req, res) => {
    const dbQuery = 'SELECT * FROM "weekend-to-do-app";';

    pool
        .query(dbQuery)
        .then((result) => {
            console.log('RESULT', result);
            res.send(result.rows);
        })
        .catch((err) => {
            console.log('ERROR', err);

            res.send(500);
        })
})

// POST
router.post('/', (req, res) => {
    const newTask = req.body;
    const sqlText = `INSERT INTO "weekend-to-do-app" ("task", "status")
                       VALUES ($1, $2)`;
    // Let sql sanitize your inputs (NO Bobby Drop Tables here!)
    // the $1, $2, etc get substituted with the values from the array below
    pool
      .query(sqlText, [newTask.task, newTask.status])
      .then((result) => {
        console.log(`Added new task to the database`, newTask);
        res.sendStatus(201);
      })
      .catch((error) => {
        console.log(`Error making database query ${sqlText}`, error);
        res.sendStatus(500); // Good server always responds
      });
  });

// PUT

// DELETE

module.exports = router;
