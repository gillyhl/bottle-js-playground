

class UsersService {
  constructor(userRepository) {
    this.userRepository = userRepository
  }

  async getUsers() {
    return this.userRepository.getUsers()
  }

  async getUsersById(id) {
    return this.userRepository.getUserById(id)
  }

}

module.exports = UsersService