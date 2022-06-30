import {
    Router
} from "express";
import auth from '../auth.js'
const router = Router();
import {
    registerNewUser,
    loginUser,
    getUserDetails
} from "../controller/userController.js";

router.post("/register", registerNewUser);
router.post("/login", loginUser);
router.get("/me", auth, getUserDetails);

export default router;