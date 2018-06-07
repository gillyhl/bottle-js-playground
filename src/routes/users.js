const express = require('express')
const router = express.Router()

const UserService = require('../services/users')
const UserRepository = require('../repositories/users')
const ResponseService = require('../services/response')

const userRepository = new UserRepository()
const userService = new UserService(userRepository)
const responseService = new ResponseService()

router.get('/', async (req, res) => {
  return responseService.sendSuccess(res, await userService.getUsers())
})

router.get('/:id', (req, res, next) => {
    const id = parseInt(req.params.id)
    if (isNaN(id)) {
      return responseService.sendError(res, 'User ID must be a number', 400)
    }
    req.params.id = id
    next()
  }, async (req, res) => {
  const { id } = req.params
  return responseService.sendSuccess(res, await userService.getUsersById(id))
})

module.exports = router