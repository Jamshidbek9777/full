import React from "react";
import { MainWrapper, MainContent } from "./style";
import AdminDashboard from "../../Admin/adminDashboard";

export const CreateProducts = () => {
     return (
          <MainContent>
               <MainWrapper>
                    <AdminDashboard />
                    <div>Create Products</div>
               </MainWrapper>
          </MainContent>
     );
};
export default CreateProducts;
