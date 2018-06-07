const Bottle = require('bottlejs')

const UserRepository = require('./repositories/users')
const UserService = require('./services/users')
const ResponseService = require('./services/response')

const bottle = new Bottle()
bottle.service('UserRepository', UserRepository)
bottle.service('UserService', UserService, 'UserRepository')
bottle.service('ResponseService', ResponseService)


module.exports = bottle