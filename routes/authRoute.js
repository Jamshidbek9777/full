import express from "express";
import { registerController } from "../controllers/authController.js";
import { loginController } from "../controllers/authController.js";
import { testController } from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
// route object
const router = express.Router();

//routing
//Register || method POST
router.post("/register", registerController);
//Login route
router.post("/login", loginController);

//test route
router.get("/test", requireSignIn, isAdmin, testController);

//private route
router.get("/user-auth", requireSignIn, (req, res) => {
     res.status(200).send({ ok: true });
});
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
     res.status(200).send({ ok: true });
});
export default router;
