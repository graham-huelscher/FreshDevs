const User = require('../models/User')

const DbController = {
    addUser: async (userObj) => {
        const newUser = new User(userObj)

        const response = await newUser.save()

        return response

    }
}

module.exports = DbController;