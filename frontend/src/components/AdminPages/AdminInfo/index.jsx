import React from "react";
import { Content } from "./style";
import { useAuth } from "../../context/auth.js";
export const AdminInfo = () => {
     const [auth] = useAuth();
     return (
          <div>
               <Content>
                    <h3>Admin name: {auth.user.name} </h3>
                    <h3>Admin Email: {auth.user.email} </h3>
                    <h3>Admin Contact: {auth.user.role} </h3>
               </Content>
          </div>
     );
};
export default AdminInfo;
