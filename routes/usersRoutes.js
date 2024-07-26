const express = require('express');
const router = express.Router();
const { showAllUsers, addNewUser, UpdateUsersById, deleteUser, secrtUsers } = require('../controllers/userController');

router.get('/auth', secrtUsers);
router.get('/', showAllUsers);
router.post('/', addNewUser);
router.put('/:userId', UpdateUsersById);
router.delete('/:userId', deleteUser);

module.exports = router;
