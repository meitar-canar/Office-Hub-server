const express = require('express');
const router = express.Router();
const { showAllUsersInfo, CreatingUserInfo, UpdateUserInfoById, deleteUserInfo, secretUsers } = require('../controllers/detailController');

router.post('/', showAllUsersInfo);
router.post('/auth', secretUsers);
router.post('/', CreatingUserInfo);
router.put('/:userDId', UpdateUserInfoById);
router.delete('/:userDId', deleteUserInfo);

module.exports = router;
