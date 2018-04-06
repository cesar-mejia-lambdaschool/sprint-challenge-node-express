const express = require('express');
const db = require('../data/helpers/projectModel');

const router = express.Router();

router.get('/', (req, res) => {
  db
    .get()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  db
    .get(id)
    .then(project => {
      res.status(200).json(project);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.get('/:id/tags', (req, res) => {
  const { id } = req.params;

  db
    .getProjectActions(id)
    .then(tags => {
      res.status(200).json(tags);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.post('/', (req, res) => {
  const newProject = req.body;

  db
    .insert(newProject)
    .then(addedProject => {
      res.status(201).json(addedProject);
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
        res.status(200).json({ success: `project with id ${id} deleted` });
      } else {
        res.status(400).json({ error: `project with id ${id} does not exist` });
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
    .then(project => {
      res.status(200).json(project);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = router;
