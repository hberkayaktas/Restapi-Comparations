const fastify = require("fastify")({logger:true})
// fastify ekledik ve  günlükleri açtık
const dotenv = require("dotenv").config({path:"./src/config/.env"})
const cors = require("@fastify/cors")
// dot env kütüphanesini ekledik
// Dotenv .env dosyası içerisinde oluşturulan değişkenleri process.env
// nesnesine otomatik aktarmak için geliştirilmiş olan ve 
// herhangi bir bağımlılığı olmayan bir JavaScript kütüphanesidir.

// yolları dahil ederiz
const router = require("./src/router/authRouter")

fastify.register(cors, {})

// port larımızı belirttik
const port = process.env.PORT || 3003;

// Data base bağlantısını import edelim
require("./src/config/database")

// fastifyda res yerine reply kullanılır
fastify.get("/", async (req,reply) => {
    return {message :"Merhaba"}
})
router.map((route,index)=> {
    fastify.route(route)
})

const start = async () => {
    try{
        await fastify.listen({port})
            .then(() => {
                console.log(`server start at ${port} port`)
            })
            .catch((err) => {
                console.log("Server connection error")
            })
    }catch(err){
        console.log(err)
        process.exit(1)
    }
}

start()
