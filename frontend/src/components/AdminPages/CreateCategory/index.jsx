import React from "react";
import { useState, useEffect } from "react";
import AdminDashboard from "../../Admin/adminDashboard";
import { MainWrapper, MainContent } from "./style";
import { message } from "antd";
export const CreateCategory = () => {
     const [categories, setCategories] = useState([]);

     const getAllCategories = async () => {
          try {
               const { data } = await fetch(
                    `https://localhost/api/v1/category/get-category`
               );
               if (data.success) {
                    setCategories(data);
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
                    <AdminDashboard />
                    <div>
                         <h1>Manage Categories</h1>
                    </div>
               </MainWrapper>
          </MainContent>
     );
};
export default CreateCategory;
