const authController = require("../controller/authController")
const users = require("../model/userModel")


const routers = [
    {
        method:"GET",
        url:"/alluser",
        handler: authController.allUsers
    }
    //,
    // {
    //     method:"GET",
    //     url:"/api/user/:userId",
    //     handler: authController.singleUser
    // },
    // {
    //     method:"POST",
    //     url:"/api/register",
    //     handler: authController.register,
    //     schema:users
    // },
    // {
    //     method:"POST",
    //     url:"/api/login",
    //     handler: authController.login
    // }
];

module.exports = routers;