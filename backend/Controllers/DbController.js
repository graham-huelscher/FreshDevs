const User = require('../models/User')

const DbController = {
    addUser: async (userObj) => {
        const newUser = new User(userObj)
        try {
            await newUser.save()
            return { result: true }
        } catch (err) {
            return { result: false, err }
        }
    },
    updateUser: async (updateObj) => {
        const filter = { name: updateObj.oldName }
        const update = { name: updateObj.newName }
        const updatedUser = await User.findOneAndUpdate(filter, update, {
            new: true,
            upsert: true 
        })

        return updatedUser
    }


}

module.exports = DbController;