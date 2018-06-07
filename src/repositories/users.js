const users = [
  {
    'id': 0,
    'firstName': 'Langley',
    'lastName': 'Hall',
    'email': 'langleyhall@ziore.com'
  },
  {
    'id': 1,
    'firstName': 'Dominguez',
    'lastName': 'Haley',
    'email': 'dominguezhaley@ziore.com'
  },
  {
    'id': 2,
    'firstName': 'French',
    'lastName': 'Castro',
    'email': 'frenchcastro@ziore.com'
  },
  {
    'id': 3,
    'firstName': 'Glover',
    'lastName': 'Love',
    'email': 'gloverlove@ziore.com'
  },
  {
    'id': 4,
    'firstName': 'Teresa',
    'lastName': 'Burke',
    'email': 'teresaburke@ziore.com'
  },
  {
    'id': 5,
    'firstName': 'Farley',
    'lastName': 'Dominguez',
    'email': 'farleydominguez@ziore.com'
  },
  {
    'id': 6,
    'firstName': 'Lela',
    'lastName': 'Mclaughlin',
    'email': 'lelamclaughlin@ziore.com'
  },
  {
    'id': 7,
    'firstName': 'Vicki',
    'lastName': 'Wilson',
    'email': 'vickiwilson@ziore.com'
  },
  {
    'id': 8,
    'firstName': 'Carla',
    'lastName': 'Thomas',
    'email': 'carlathomas@ziore.com'
  },
  {
    'id': 9,
    'firstName': 'Bobbi',
    'lastName': 'Foreman',
    'email': 'bobbiforeman@ziore.com'
  },
  {
    'id': 10,
    'firstName': 'Amparo',
    'lastName': 'Berg',
    'email': 'amparoberg@ziore.com'
  },
  {
    'id': 11,
    'firstName': 'Lawson',
    'lastName': 'Dean',
    'email': 'lawsondean@ziore.com'
  }
]
class UserRepository {
  async getUsers () {
    return users
  }

  async getUserById (id) {
    return users.find(user => user.id === id)
  }
}

module.exports = UserRepository