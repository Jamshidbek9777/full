import React, { useState, useEffect } from "react";
import AdminDashboard from "../../Admin/adminDashboard";
import {
     MainWrapper,
     MainContent,
     StyledTable,
     StyledForm,
     Content,
} from "./style";
import { message, Button, Input } from "antd";
import { useAuth } from "../../context/auth";

export const CreateCategory = () => {
     const [name, setName] = useState("");
     const [categories, setCategories] = useState([]);
     const [auth] = useAuth();
     const [editingCategoryId, setEditingCategoryId] = useState(null);
     const [editedName, setEditedName] = useState("");
     const [deteletingCategoryId, setDeteletingCategoryId] = useState(null);

     // Add new category
     const handleSubmit = async (e) => {
          e.preventDefault();
          try {
               const res = await fetch(
                    `http://localhost:8000/api/v1/category/create-category`,
                    {
                         method: "POST",
                         headers: {
                              Authorization: auth.token,
                              "Content-Type": "application/json",
                         },
                         body: JSON.stringify({ name }),
                    }
               );
               const data = await res.json();
               if (data.success) {
                    message.success(`${data.category.name} is created`);
                    setCategories([...categories, data.category]);
                    setName("");
               } else {
                    message.error(data.message);
               }
          } catch (error) {
               console.log(error);
               message.error("Something went wrong");
          }
     };

     const handleEdit = (categoryId, categoryName) => {
          setEditingCategoryId(categoryId);
          setEditedName(categoryName);
     };

     const handleSave = async () => {
          try {
               const res = await fetch(
                    `http://localhost:8000/api/v1/category/update-category/${editingCategoryId}`,
                    {
                         method: "PUT",
                         headers: {
                              Authorization: auth.token,
                              "Content-Type": "application/json",
                         },
                         body: JSON.stringify({ name: editedName }),
                    }
               );

               const data = await res.json();

               if (data.success) {
                    message.success("Category updated successfully");
                    // Clear editing state
                    setEditingCategoryId(null);
                    setEditedName("");
                    // Fetch updated categories from the server
                    getAllCategories();
               } else {
                    message.error(data.message);
               }
          } catch (error) {
               console.log(error);
               message.error("Failed to save the changes");
          }
     };

     //delete
     const handleDelete = async (categoryId) => {
          try {
               const res = await fetch(
                    `http://localhost:8000/api/v1/category/delete-category/${categoryId}`,
                    {
                         method: "DELETE",
                         headers: {
                              Authorization: auth.token,
                              "Content-Type": "application/json",
                         },
                    }
               );

               const data = await res.json();

               if (data.success) {
                    message.success("Category deleted successfully");
                    // Fetch updated categories from the server
                    getAllCategories();
               } else {
                    message.error(data.message);
               }
          } catch (error) {
               console.log(error);
               message.error("Failed to delete the category");
          }
     };

     //getAll categories
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

     return (
          <MainContent>
               <MainWrapper>
                    <Content>
                         <h1>Manage Categories</h1>
                         <div>
                              <StyledTable>
                                   <thead>
                                        <tr>
                                             <th>Name</th>
                                             <th>Actions</th>
                                        </tr>
                                   </thead>
                                   <tbody>
                                        {categories.map((c) => (
                                             <tr key={c._id}>
                                                  <td>
                                                       {editingCategoryId ===
                                                       c._id ? (
                                                            <Input
                                                                 value={
                                                                      editedName
                                                                 }
                                                                 onChange={(
                                                                      e
                                                                 ) =>
                                                                      setEditedName(
                                                                           e
                                                                                .target
                                                                                .value
                                                                      )
                                                                 }
                                                            />
                                                       ) : (
                                                            c.name
                                                       )}
                                                  </td>
                                                  <td>
                                                       {editingCategoryId ===
                                                       c._id ? (
                                                            <Button
                                                                 type="primary"
                                                                 onClick={
                                                                      handleSave
                                                                 }>
                                                                 Save
                                                            </Button>
                                                       ) : (
                                                            <Button
                                                                 type="primary"
                                                                 onClick={() =>
                                                                      handleEdit(
                                                                           c._id,
                                                                           c.name
                                                                      )
                                                                 }>
                                                                 Edit
                                                            </Button>
                                                       )}
                                                       <Button
                                                            onClick={() =>
                                                                 handleDelete(
                                                                      c._id
                                                                 )
                                                            }
                                                            type="primary"
                                                            danger>
                                                            Delete
                                                       </Button>
                                                  </td>
                                             </tr>
                                        ))}
                                   </tbody>
                              </StyledTable>
                              <StyledForm onSubmit={handleSubmit}>
                                   <Input
                                        placeholder="Enter category name"
                                        value={name}
                                        onChange={(e) =>
                                             setName(e.target.value)
                                        }
                                   />
                                   <Button type="primary" htmlType="submit">
                                        Add Category
                                   </Button>
                              </StyledForm>
                         </div>
                    </Content>
               </MainWrapper>
          </MainContent>
     );
};

export default CreateCategory;
