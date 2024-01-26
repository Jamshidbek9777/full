import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, MainWrapper, Lists, List } from "./adminpstyle";
export const AdminDashboard = () => {
     const navigate = useNavigate();
     return (
          <Container>
               <h1>Admin panel</h1>
               <MainWrapper>
                    <Lists>
                         <List
                              onClick={() =>
                                   navigate("/dashboard/admin/create-category")
                              }>
                              Create Product Category
                         </List>
                         <List
                              onClick={() =>
                                   navigate("/dashboard/admin/create-product")
                              }>
                              Create Product{" "}
                         </List>
                         <List
                              onClick={() =>
                                   navigate("/dashboard/admin/products")
                              }>
                              Products
                         </List>
                    </Lists>
               </MainWrapper>
          </Container>
     );
};
export default AdminDashboard;
