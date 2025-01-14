const express = require('express')
const {DisplayUserHomePage , VerifyUser , CreateUser , DisplayMyLearning , DisplayTransactionHistory} = require('../Controllers/user')
// DisplayStore

const {allow_login_user} = require("../Middlewares/login_user")

const user_router = express.Router()

user_router.get('/',DisplayUserHomePage)
user_router.post('/login' , VerifyUser)
user_router.post('/sign-up' , CreateUser)
user_router.get("/my-learning" , allow_login_user , DisplayMyLearning)
user_router.get("/transaction-history" , allow_login_user , DisplayTransactionHistory)
// user_router.get("/redeem" , DisplayStore)
// user_router.get('/login' , DisplayUserLoginPage)
// user_router.get('/signup' , DisplayUserSignupPage)
// user_router.get("/courses" , DisplayCourses)

module.exports = user_router;

// DisplayUserLoginPage
// DisplayUserSignupPage
// DisplayCourses