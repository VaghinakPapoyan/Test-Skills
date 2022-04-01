import { Router } from "express";
import { check } from "express-validator";
import registrationController from "../controllers/auth/registration-controller.js";
import getUserMiddleware from "../middlewares/get-user-middleware.js";
import getUserController from "../controllers/auth/get-user-controller.js";
import loginController from "../controllers/auth/login-controller.js";
import sendMailController from "../controllers/auth/send-mail-controller.js";
import verificationController from "../controllers/auth/verification-controller.js";
import deleteNotification from "../controllers/notification/delete-notification.js";

const authRouter = Router()

authRouter.post(
    "/registration",
    check("username", "Username is incorrect.").isLength({ min: 6, max: 18 }), 
    check("nickname", "nickname is incorrect.").isLength({ max: 18 }), 
    check("email", "Email is incorrect.").isEmail().isLength({ max: 36 }), 
    check("password", "Password is incorrect.").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/).isLength({ min: 8, max: 150 }), 
    registrationController
)

authRouter.post(
    "/log-in",
    check("username", "Username is incorrect.").isLength({ min: 6, max: 18 }), 
    check("password", "Password is incorrect.").isLength({ min: 8, max: 150 }), 
    loginController
)

authRouter.get(
    "/get-user", 
    getUserMiddleware,
    getUserController
)

authRouter.get(
    "/verification/:code", 
    verificationController
)

authRouter.post(
    "/send-mail", 
    sendMailController
)

authRouter.post(
    "/notification/delete",
    deleteNotification
)

export default authRouter;