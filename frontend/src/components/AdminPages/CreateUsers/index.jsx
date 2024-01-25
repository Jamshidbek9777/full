import React from "react";
import { MainWrapper, MainContent } from "./style";
import AdminDashboard from "../../Admin/adminDashboard";

export const CreateUsers = () => {
     return (
          <MainContent>
               <MainWrapper>
                    <AdminDashboard />
                    <div>Create Users</div>
               </MainWrapper>
          </MainContent>
     );
};
export default CreateUsers;
