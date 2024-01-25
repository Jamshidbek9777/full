import categoryModel from "../models/categoryModel.js";
import slugify from "slugify";

//Create category
export const createCategoryController = async (req, res) => {
     try {
          const { name } = req.body;
          if (!name) {
               return res.status(401).send({ message: "Name is required" });
          }
          const existingCategory = await categoryModel.findOne({ name });
          if (existingCategory) {
               return res.status(200).send({
                    success: true,
                    message: "Category Already Exisits",
               });
          }
          const category = await new categoryModel({
               name,
               slug: slugify(name),
          }).save();
          res.status(201).send({
               success: true,
               message: "new category created",
               category,
          });
     } catch (error) {
          console.log(error);
          res.status(500).send({
               success: false,
               error,
               message: "Error in Category",
          });
     }
};

//Update category

export const UpdateCategory = async (req, res) => {
     try {
          const { name } = req.body;
          const { id } = req.params;
          const category = await categoryModel.findByIdAndUpdate(
               id,
               {
                    name,
                    slug: slugify(name),
               },
               { new: true }
          );
          res.status(200).send({
               success: true,
               message: "Category updated successfully",
               category,
          });
     } catch (error) {
          console.log(error);
          res.status(500).send({
               success: false,
               error,
               message: "Error while update category",
          });
     }
};

// getAllCategosuccess

export const getAllCategory = async (req, res) => {
     try {
          const category = await categoryModel.find({});
          res.status(200).send({
               success: true,
               message: "All categories list",
               category,
          });
     } catch (error) {
          console.log(error);
          res.status(200).send({
               success: false,
               message: "Error while gettin all category",
               error,
          });
     }
};

// get Single category by id

export const getSingleCategory = async (req, res) => {
     try {
          const category = await categoryModel.findOne({
               slug: req.params.slug,
          });
          res.status(200).send({
               success: true,
               message: "Get single category successfully",
               category,
          });
     } catch (error) {
          res.status(500).send({
               success: false,
               message: "Error getting a single category",
               error,
          });
     }
};

//delete category
export const deleteCategory = async (req, res) => {
     try {
          const { id } = req.params;
          await categoryModel.findByIdAndDelete(id);
          res.status(200).send({
               success: true,
               message: "Category deleted",
          });
     } catch (error) {
          res.status(500).send({
               success: false,
               message: "Error deleteting category",
               error,
          });
     }
};
