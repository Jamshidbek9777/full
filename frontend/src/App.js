import React, { Component } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Category from "./components/Category";
import Register from "./components/Register";
import Login from "./components/Login";
import Cart from "./components/Cart";
import Dashboard from "./components/User/dashboard";
import PrivateRoute from "./components/Routes/private";
import AdminDashboard from "./components/Admin/adminDashboard";
import AdminRoute from "./components/Routes/adminRoute";
import CreateCategory from "./components/AdminPages/CreateCategory";
import CreateProducts from "./components/AdminPages/CreateProducts";
import MainPage from "./components/Admin/MainPage";
import Products from "./components/AdminPages/Products";
import UserNavbar from "./components/UserNavbar";
import { useAuth } from "./components/context/auth";

class App extends Component {
     render() {
          return (
               <div className="App">
                    <UserNavbar />
                    <Routes>
                         <Route
                              path="*"
                              element={<h1>This page is not found</h1>}
                         />

                         <Route path="/" element={<Home />} />

                         <Route
                              path="/adminpage"
                              element={<ConditionalNavbar />}>
                              <Route path="dashboard" element={<AdminRoute />}>
                                   <Route path="admin" element={<MainPage />} />
                                   <Route
                                        path="admin/create-category"
                                        element={<CreateCategory />}
                                   />
                                   <Route
                                        path="admin/create-product"
                                        element={<CreateProducts />}
                                   />
                              </Route>
                         </Route>

                         <Route path="/login" element={<Login />} />
                         <Route path="/category" element={<Category />} />
                         <Route path="/about" element={<About />} />
                         <Route path="/register" element={<Register />} />
                         <Route path="/cart" element={<Cart />} />
                    </Routes>
               </div>
          );
     }
}

function ConditionalNavbar() {
     const [auth] = useAuth();

     // Check if the user is an admin
     const isAdmin = auth.role === "1";

     // Render Navbar conditionally based on the user's role
     return isAdmin ? null : <Navbar />;
}

export default App;
