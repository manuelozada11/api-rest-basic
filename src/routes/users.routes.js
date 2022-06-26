const express = require('express');
const router = express.Router();
const { createUser, getUser, updateUser, deleteUser } = require('../controllers/users.controllers.js');

router.post('/', createUser);
router.get('/:_id', getUser);
router.patch('/:_id', updateUser);
router.delete('/:_id', deleteUser);

module.exports = router;