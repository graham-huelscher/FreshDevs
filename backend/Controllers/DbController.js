const User = require('../models/User')

const DbController = {
    addUser: async (userObj) => {
        //create a new user using the User schema and the userObj sent from the client. Save this to the database and return true if successful and false+err if not
        const newUser = new User(userObj)
        try {
            await newUser.save()
            return { result: true }
        } 
        catch (err) {
            return { result: false, err }
        }
    },
    updateUser: async (updateObj) => {
        const filter = { name: updateObj.oldName }
        const update = { name: updateObj.newName }
        //parse out the updateObj into the name to look for (oldName) and the name that is going to be updated (newName)
        try {
            const updatedUser = await User.findOneAndUpdate(filter, update, {
                new: true
            })

            if(updatedUser) return updatedUser
            else return false
        } 
        catch (err) {
            return (err)
        }
    },
    getAll: async () => {
       return await User.find({})
    }


}

module.exports = DbController;