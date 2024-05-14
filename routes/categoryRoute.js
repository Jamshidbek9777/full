import express from "express";
import { requireSignIn, isAdmin } from "../middlewares/authMiddleware.js";
import {
     createCategoryController,
     deleteCategory,
     getAllCategory,
     getSingleCategory,
} from "../controllers/categoryController.js";
import { UpdateCategory } from "../controllers/categoryController.js";
const router = express.Router();

//routes
//create-category
router.post("/create-category", createCategoryController);

//update category
router.put("/update-category/:id", UpdateCategory);

//getAllCategory
router.get("/get-categories", getAllCategory);

//getSingleCategory
router.get("/get-category/:slug", getSingleCategory);

//deleteCategory
router.delete("/delete-category/:id", deleteCategory, requireSignIn, isAdmin);
export default router;
