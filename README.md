# BottleJS

This project is used to demonstrate the benefit of using BottleJS within JavaScript projects, whether it is in the front end or back end.

BottleJS is a lightweight dependency injection container, the Autofac of the Javascript world.

This will greatly reduce the amount of imports in files that have dependencies and tidy up the code.

## Project Structure

This repo contains two directories within `src`: the directory `sans-bottle` imports the dependencies and coordinates the interdependencies within the route file that uses them by calling the respective constructors. The `bottle` directory contains the code that makes use of BottleJS where the `bottle.js` file defines the services and dependencies within them, providing one source fo truth for all services within a project.

For simplicity this demo is just a simple REST API with the following endpoints.

|Verb|URL|Description|
|--|--|--|
|`GET`|`/users`|Get a list of all users.
|`GET`|`/users/{id}`|Get a user by a given ID. ID is in range 0-11

## Main Differences
The main differences occur in the user route file. Without BottleJS, the top of the file imports dependencies directly - including the ones in which the main dependency is dependent on. As the project gets bigger, this approach will not scale. Every route file will need to include these cumbersome imports and if the dependency tree gets large you will have half your file full of imports.

This is the top of `user.js` route file before
```js
const express = require('express')
const router = express.Router()

const UserService = require('../services/users')
const UserRepository = require('../repositories/users')
const ResponseService = require('../services/response')

const userRepository = new UserRepository()
const userService = new UserService(userRepository)
const responseService = new ResponseService()
```

and after using BottleJS
```js
const express = require('express')
const router = express.Router()
const { container } = require('../bottle')

// Reference a service with container.ServiceName
```

The BottleJS configuration occurs in `bottle.js`
```js
const Bottle = require('bottlejs')

const UserRepository = require('./repositories/users')
const UserService = require('./services/users')
const ResponseService = require('./services/response')

const bottle = new Bottle()
bottle.service('UserRepository', UserRepository)
bottle.service('UserService', UserService, 'UserRepository')
bottle.service('ResponseService', ResponseService)


module.exports = bottle
```

When the project expands, the extra dependencies can be added into `bottle.js` without having to add more imports into the files that require them.