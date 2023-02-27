const { Router } = require('express')
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
const router = Router()
const {usersGet, usersPost, usersPut, usersDelete} = require('../controllers/user.controllers')
const { body } = require('express-validator')


router.get('/', usersGet)
router.post('/', [jsonParser, body('email','Email invalid').isEmail()], usersPost)
router.put('/', usersPut)
router.delete('/', usersDelete)

module.exports = router