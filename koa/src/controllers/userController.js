const users  = require("../models/user")
const createError = require("http-errors")

const getAllUser = async (ctx) => {
    try {
        const _foundUsers = await users.find();
        ctx.body = JSON.stringify({_foundUsers});
        ctx.status = 200;
    } catch (error) {
        throw createError(400,"Kayıtlar getirilirken hata ile karşılaşıldı"+error)
    }
}

module.exports =  {
    getAllUser
}