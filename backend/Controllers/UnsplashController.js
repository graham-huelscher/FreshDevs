const axios = require('axios')

const UnsplashController = {
   getRandImg: async () => {
       const response = await axios.get(`https://api.unsplash.com/photos/random/?client_id=${process.env.unsplashId}`)
       console.log("img retreived")
       return response.data
   }
}

module.exports = UnsplashController;