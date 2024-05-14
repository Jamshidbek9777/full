import React, { useState } from "react";

import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth";
import { message } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";

//icons import
import { AiOutlineDashboard } from "react-icons/ai";
import { TbCategory } from "react-icons/tb";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";

import {
     MenuFoldOutlined,
     MenuUnfoldOutlined,
     UploadOutlined,
     UserOutlined,
     VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme } from "antd";
const { Header, Sider, Content } = Layout;
export const Navbar = () => {
     //antd
     const [collapsed, setCollapsed] = useState(false);
     const {
          token: { colorBgContainer, borderRadiusLG },
     } = theme.useToken();

     //
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
                                   `/dashboard/${
                                        auth.user.role == 1 ? "admin" : "user"
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
          <Layout>
               <Sider trigger={null} collapsible collapsed={collapsed}>
                    <div className="demo-logo-vertical" />
                    <Menu
                         theme="dark"
                         mode="inline"
                         defaultSelectedKeys={["1"]}
                         onClick={({ key }) => {
                              if (key == "1") {
                                   navigate("/adminpage/dashboard");
                              }
                              if (key == "2") {
                                   navigate(
                                        "/adminpage/dashboard/admin/create-category"
                                   );
                              }
                              if (key == "3") {
                                   navigate(
                                        "/adminpage/dashboard/admin/create-product"
                                   );
                              }
                         }}
                         items={[
                              {
                                   key: "1",
                                   icon: <AiOutlineDashboard />,
                                   label: "Dashboard",
                              },
                              {
                                   key: "2",
                                   icon: <TbCategory />,
                                   label: "Categories",
                              },
                              {
                                   key: "3",

                                   icon: <MdOutlineProductionQuantityLimits />,
                                   label: "Products",
                              },
                         ]}
                    />
               </Sider>
               <Layout>
                    <Header
                         style={{
                              padding: 0,
                              background: colorBgContainer,
                         }}>
                         <Button
                              type="text"
                              icon={
                                   collapsed ? (
                                        <MenuUnfoldOutlined />
                                   ) : (
                                        <MenuFoldOutlined />
                                   )
                              }
                              onClick={() => setCollapsed(!collapsed)}
                              style={{
                                   fontSize: "16px",
                                   width: 64,
                                   height: 64,
                              }}
                         />
                    </Header>
                    <Content
                         style={{
                              margin: "24px 16px",
                              padding: 24,
                              minHeight: 280,
                              background: colorBgContainer,
                              borderRadius: borderRadiusLG,
                         }}>
                         <Outlet />
                    </Content>
               </Layout>
          </Layout>
     );
};
export default Navbar;
