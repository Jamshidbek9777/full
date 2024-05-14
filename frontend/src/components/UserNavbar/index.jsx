import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, RightSide, Wrapper } from "./style";
import { useAuth } from "../context/auth";
import { message } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
export const UserNavbar = () => {
     const navigate = useNavigate();

     const handleLogout = () => {
          setAuth({
               ...auth,
               user: null,
               token: "",
          });
          localStorage.removeItem("auth");
          // Redirect to login after logout
          navigate("/login");
          message.success("Logout successfully");
     };
     const items = [
          {
               key: "1",
               label: (
                    <a
                         onClick={() => {
                              navigate(
                                   `/${
                                        auth.user.role === 1
                                             ? "adminpage/dashboard/admin"
                                             : "dashboard/user"
                                   }`
                              );
                         }}>
                         Dashboard
                    </a>
               ),
          },
          {
               key: "2",
               label: <a onClick={handleLogout}>Logout</a>,
          },
     ];

     const [auth, setAuth] = useAuth();
     return (
          <Container>
               <Wrapper>
                    <div>
                         <h1 onClick={() => navigate("/")}>Ecommerce app</h1>
                    </div>
                    <RightSide>
                         <h4 onClick={() => navigate("/")}>Home</h4>
                         <h4 onClick={() => navigate("/category")}>Category</h4>
                         {!auth.user ? (
                              <div>
                                   <h4 onClick={() => navigate("/register")}>
                                        Register{" "}
                                   </h4>
                                   <h4 onClick={() => navigate("/login")}>
                                        Login
                                   </h4>
                              </div>
                         ) : (
                              <div>
                                   <h4>
                                        <Dropdown
                                             menu={{
                                                  items,
                                             }}>
                                             <a
                                                  onClick={(e) =>
                                                       e.preventDefault()
                                                  }>
                                                  <Space>
                                                       {auth.user.name}
                                                       <DownOutlined
                                                            size={60}
                                                       />
                                                  </Space>
                                             </a>
                                        </Dropdown>
                                   </h4>
                              </div>
                         )}
                         <h4 onClick={() => navigate("/cart")}>Cart</h4>
                    </RightSide>
               </Wrapper>
          </Container>
     );
};
export default UserNavbar;
