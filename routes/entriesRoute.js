const express = require('express');
const router = express.Router();

const validation = require('../middleware/validate');

const entriesController = require('../controllers/entriesController')

router.get('/', entriesController.getAllEntries);

router.get('/:id', entriesController.getOneEntry);

router.post('/', entriesController.addEntry);

router.put('/:id', entriesController.updateEntry);

router.delete('/:id', entriesController.deleteEntry);

module.exports = router;