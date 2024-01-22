const users = require('./data')

//getters

function getUserById(id) {
    return users.find(user => user.id === id);
}


module.exports = {getUserById} 