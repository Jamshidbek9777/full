import React from "react";
import { useState, useEffect } from "react";
import {
     MainWrapper,
     MainContent,
     Content,
     Label,
     SelectWrapper,
} from "./style";
import AdminDashboard from "../../Admin/adminDashboard";
import { Select, message } from "antd";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth";
const { Option } = Select;
export const CreateProducts = () => {
     const [auth] = useAuth();
     const navigate = useNavigate();
     const [categories, setCategories] = useState([]);
     const [name, setName] = useState("");
     const [description, setDescription] = useState("");
     const [price, setPrice] = useState("");
     const [category, setCategory] = useState("");
     const [quantity, setQuantity] = useState("");
     const [shipping, setShipping] = useState("");
     const [photo, setPhoto] = useState("");

     //get all categories
     const getAllCategories = async () => {
          try {
               const res = await fetch(
                    `http://localhost:8000/api/v1/category/get-categories`,
                    {
                         method: "GET",
                    }
               );
               const data = await res.json();
               if (data.success) {
                    setCategories(data.category);
               }
          } catch (error) {
               console.log(error);
               message.error("Something went wrong");
          }
     };

     useEffect(() => {
          getAllCategories();
     }, []);
     const handleSubmit = async (e) => {
          e.preventDefault();
          try {
               const productData = new FormData();
               productData.append("name", name);
               productData.append("description", description);
               productData.append("price", price);
               productData.append("quantity", quantity);
               productData.append("category", category);
               productData.append("shipping", shipping);
               productData.append("photo", photo);

               const res = await fetch(
                    `http://localhost:8000/api/v1/products/create-product`,
                    {
                         method: "POST",
                         headers: {
                              Authorization: auth.token,
                         },
                         body: productData,
                    }
               );

               const data = await res.json();
               if (data.success) {
                    message.success("Product Created successfully");
                    navigate("/dashboard/admin/products");
               }
          } catch (error) {
               console.log(error);
               message.error("Something went wrong");
          }
     };

     return (
          <MainContent>
               <MainWrapper>
                    <Content>
                         <h1>Manage Products</h1>
                         <SelectWrapper>
                              <Select
                                   placeholder="Select a category"
                                   showSearch
                                   onChange={(value) => setCategory(value)}>
                                   {categories.map((c) => (
                                        <Option key={c._id} value={c._id}>
                                             {c.name}
                                        </Option>
                                   ))}
                              </Select>
                         </SelectWrapper>
                         <div className="mb-3">
                              <Label className="btn btn-outline-secondary col-md-12">
                                   {photo ? photo.name : "Upload Photo"}
                                   <input
                                        type="file"
                                        name="photo"
                                        accept="image/*"
                                        onChange={(e) =>
                                             setPhoto(e.target.files[0])
                                        }
                                        hidden
                                   />
                              </Label>
                         </div>
                         <div className="mb-3">
                              {photo && (
                                   <div className="text-center">
                                        <img
                                             src={URL.createObjectURL(photo)}
                                             alt="product photo"
                                        />
                                   </div>
                              )}
                         </div>
                         <div className="mb-3">
                              <input
                                   type="text"
                                   value={name}
                                   placeholder="Write the name of product"
                                   className="form-control"
                                   onChange={(e) => setName(e.target.value)}
                              />
                         </div>
                         <div className="mb-3">
                              <textarea
                                   type="text"
                                   value={description}
                                   placeholder="Type description for this product"
                                   className="form-control"
                                   onChange={(e) =>
                                        setDescription(e.target.value)
                                   }
                              />
                         </div>
                         <div className="mb-3">
                              <input
                                   type="number"
                                   value={price}
                                   placeholder="Type price here"
                                   className="form-control"
                                   onChange={(e) => setPrice(e.target.value)}
                              />
                         </div>{" "}
                         <div className="mb-3">
                              <input
                                   type="number"
                                   value={quantity}
                                   placeholder="Choose quantity"
                                   className="form-control"
                                   onChange={(e) => setQuantity(e.target.value)}
                              />
                         </div>{" "}
                         <div className="mb-3">
                              <Select
                                   type="text"
                                   variant={false}
                                   placeholder="Choose shipping"
                                   className="form-control"
                                   showSearch
                                   size="normal"
                                   onChange={(value) => {
                                        setShipping(value);
                                   }}>
                                   <Option value="0">YES</Option>
                                   <Option value="1">NO</Option>
                              </Select>
                         </div>
                         <div className="mb-3">
                              <button
                                   onClick={handleSubmit}
                                   className="btn btn-primary">
                                   Create product
                              </button>
                         </div>
                    </Content>
               </MainWrapper>
          </MainContent>
     );
};
export default CreateProducts;
