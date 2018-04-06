const express = require('express');
const db = require('../data/helpers/actionModel');

const router = express.Router();

router.get('/', (req, res) => {
  db
    .get()
    .then(actions => {
      res.status(200).json(actions);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  db
    .get(id)
    .then(action => {
      res.status(200).json(action);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.post('/', (req, res) => {
  const newAction = req.body;

  db
    .insert(newAction)
    .then(addedAction => {
      res.status(201).json(addedAction);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;

  db
    .remove(id)
    .then(deletions => {
      if (deletions === 1) {
        res.status(200).json({ success: `action with id ${id} deleted` });
      } else {
        res.status(400).json({ error: `action with id ${id} does not exist` });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  db
    .update(id, changes)
    .then(action => {
      res.status(200).json(action);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = router;
