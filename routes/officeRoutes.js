const express = require('express');
const router = express.Router();
const { showAllOffices, CreateOffice, UpdateOfficeById, deleteOffice, getOfficeById } = require('../controllers/officeController');

router.get('/:theId', getOfficeById);
router.get('/', showAllOffices);
router.post('/', CreateOffice);
router.put('/:officeid', UpdateOfficeById);
router.delete('/:officeDId', deleteOffice);

module.exports = router;
