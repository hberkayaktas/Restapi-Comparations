const users  = require("../models/user")
const createError = require("http-errors")

const getAllUser = async (req,res) => {
    try {
        const _foundUsers = await users.find();
        res.status(200).end(JSON.stringify({_foundUsers}));
    } catch (error) {
        throw createError(400,"Kayıtlar getirilirken hata ile karşılaşıldı"+error)
    }
}


module.exports =  {
    getAllUser
}