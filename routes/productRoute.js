import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import {
     createProduct,
     deleteProduct,
     getProduct,
     getProductPid,
     getProducts,
     updateProduct,
} from "../controllers/createProductController.js";
import formidable from "express-formidable";
const router = express.Router();

//routes
router.post(
     "/create-product",
     formidable(),
     requireSignIn,
     isAdmin,
     createProduct
);
router.put(
     "/update-product/:pid",
     formidable(),
     requireSignIn,
     isAdmin,
     updateProduct
);

//getproducts
router.get("/get-products", getProducts);
//get single product
router.get("/get-product/:slug", getProduct);
//get sinfle product pid
router.get("/product-photo/:pid", getProductPid);
//deleteProduct
router.delete("/product/:pid", deleteProduct);
export default router;
