const express = require('express')
const router = express.Router()
const { container } = require('../bottle')

router.get('/', async (req, res) => {
  return container.ResponseService.sendSuccess(res, await container.UserService.getUsers())
})

router.get('/:id', (req, res, next) => {
    const id = parseInt(req.params.id)
    if (isNaN(id)) {
      return container.ResponseService.sendError(res, 'User ID must be a number', 400)
    }
    req.params.id = id
    next()
  }, async (req, res) => {
  const { id } = req.params
  return container.ResponseService.sendSuccess(res, await container.UserService.getUsersById(id))
})

module.exports = router