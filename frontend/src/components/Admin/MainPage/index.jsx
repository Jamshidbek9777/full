import React from "react";
import AdminDashboard from "../adminDashboard";
import AdminInfo from "../../AdminPages/AdminInfo";
import { MainContent } from "./style";

export const MainPage = () => {
     return (
          <MainContent>
               <AdminDashboard />
               <AdminInfo />
          </MainContent>
     );
};
export default MainPage;
