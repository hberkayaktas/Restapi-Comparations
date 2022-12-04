//npm i koa-router
//npm i koa
const Koa = require("koa");
const Router = require("koa-router");
const dotenv = require("dotenv").config({path:"./src/config/.env"})

const app = new Koa();
const router = new Router();
const port = process.env.PORT || 3003;
const userControllers = require('./src/controllers/userController');

// Data base bağlantısını import edelim
require("./src/config/database")

router.get("/", (ctx) => {
      ctx.body = `merhaba`;
      ctx.status = 200;
});

router.get("/alluser",   userControllers.getAllUser);


app.use(router.routes());

app.listen(port, () => {
      console.log(`Server ${port} Portunda Çalışıyor.`);
});
