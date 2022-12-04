const users  = require("../model/userModel")
const bcrypt = require("bcrypt")
const createError = require("http-errors")

const allUsers = async (req,reply) => {
    try {
        const _foundUsers = await users.find();
        return JSON.stringify({_foundUsers})
    } catch (error) {
        throw createError(400,"Kayıtlar getirilirken hata ile karşılaşıldı"+error)
    }
}

module.exports =  {
    allUsers,
   
}