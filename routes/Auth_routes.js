const express = require('express');
const router = express.Router()
const addUser = require('../controller/Add_user');
const List_users = require('../controller/UserList');
const userUpdate = require('../controller/Update_user')


router.post('/add-user', addUser.creatUser)
router.get('/all-users', List_users.userList)
router.post('/Update-user/:id', userUpdate.Up_user)



module.exports = router