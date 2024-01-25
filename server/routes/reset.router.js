const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// PUT - RESET ALL Task Status
router.put('/', (req, res) => {
  const updateTask = req.body;
  const queryText = `UPDATE "weekend-to-do-app" SET "status" = FALSE;`;
  console.log('louis');

  pool
    .query(queryText)
    .then(() => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log(updateTask.status);
      console.log('ERROR:', err);
      res.sendStatus(500);
    });
});

module.exports = router;
