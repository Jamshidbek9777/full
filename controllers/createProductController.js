import productModel from "../models/productModel.js";
import fs from "fs";
import slugify from "slugify";
export const createProduct = async (req, res) => {
     try {
          const { name, description, price, category, quantity, shipping } =
               req.fields;
          const { photo } = req.files;

          //validation
          switch (true) {
               case !name:
                    return res.status(500).send({ error: "Name is required" });
               case !description:
                    return res
                         .status(500)
                         .send({ error: "Description is required" });
               case !price:
                    return res.status(500).send({ error: "Price is required" });
               case !category:
                    return res
                         .status(500)
                         .send({ error: "Category is required" });
               case !quantity:
                    return res
                         .status(500)
                         .send({ error: "Quantiy is required" });
               case photo && photo.size > 1000000:
                    return res.status(500).send({
                         error: "Photo size should be less than 1MB ",
                    });
          }
          const products = new productModel({
               ...req.fields,
               slug: slugify(name),
          });
          if (photo) {
               products.photo.data = fs.readFileSync(photo.path);
               products.photo.contentType = photo.type;
          }
          await products.save();
          res.status(201).send({
               success: true,
               message: "Product created successfully",
               products,
          });
     } catch (error) {
          console.log(error);
          res.status(500).send({
               success: false,
               message: "Failed to create product",
               error,
          });
     }
};

// get All products

export const getProducts = async (req, res) => {
     try {
          const products = await productModel
               .find({})
               .populate("category")
               .select("-photo")
               .limit(12)
               .sort({ createdAt: -1 });
          res.status(200).send({
               success: true,
               message: "All products",
               total: products.length,
               products,
          });
     } catch (error) {
          console.log(error);
          res.status(500).send({
               success: false,
               message: "Error in getting category",
               error: error.message,
          });
     }
};
//get siingle product
export const getProduct = async (req, res) => {
     try {
          const product = await productModel
               .findOne({
                    slug: req.params.slug,
               })
               .select("-photo")
               .populate("category");
          res.status(200).send({
               success: true,
               message: "Get single product successfully",
               product,
          });
     } catch (error) {
          console.log(error);
          res.status(500).send({
               succes: false,
               message: "Error getting a product",
               error,
          });
     }
};

//get photo
export const getProductPid = async (req, res) => {
     try {
          const product = await productModel
               .findById(req.params.pid)
               .select("photo");
          if (product.photo.data) {
               res.set("Content-type", product.photo.contentType);
               return res.status(200).send(product.photo.data);
          }
     } catch (error) {
          console.log(error);
          res.status(500).send({
               succes: false,
               message: "Error getting a product with pid",
               error,
          });
     }
};

//delete

export const deleteProduct = async (req, res) => {
     try {
          await productModel.findByIdAndDelete(req.params.pid).select("-photo");
          res.status(200).send({
               success: true,
               message: "Product deleted succesfully",
          });
     } catch (error) {
          console.log(error);
          res.status(500).send({
               success: false,
               message: "Error in deleting product",
          });
     }
};

//update
export const updateProduct = async (req, res) => {
     try {
          const { name, description, price, category, quantity, shipping } =
               req.fields;
          const { photo } = req.files;

          //validation
          switch (true) {
               case !name:
                    return res.status(500).send({ error: "Name is required" });
               case !description:
                    return res
                         .status(500)
                         .send({ error: "Description is required" });
               case !price:
                    return res.status(500).send({ error: "Price is required" });
               case !category:
                    return res
                         .status(500)
                         .send({ error: "Category is required" });
               case !quantity:
                    return res
                         .status(500)
                         .send({ error: "Quantiy is required" });
               case photo && photo.size > 1000000:
                    return res.status(500).send({
                         error: "Photo size should be less than 1MB ",
                    });
          }
          const products = await productModel.findByIdAndUpdate(
               req.params.pid,
               {
                    ...req.fields,
                    slug: slugify(name),
               },
               { new: true }
          );
          // if (photo) {
          //      products.photo.data = fs.readFileSync(photo.path);
          //      products.photo.contentType = photo.type;
          // }
          // await products.save();
          res.status(201).send({
               success: true,
               message: "Product updated successfully",
               products,
          });
     } catch (error) {
          console.log(error);
          res.status(500).send({
               success: false,
               message: "Failed to update product",
               error,
          });
     }
};
