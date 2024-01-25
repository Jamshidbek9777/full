import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
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
import CreateUsers from "./components/AdminPages/CreateUsers";
import MainPage from "./components/Admin/MainPage";
class App extends Component {
     render() {
          return (
               <div className="App">
                    {/* <BrowserRouter> */}
                    <Navbar />
                    <Routes>
                         <Route path="/" element={<Home />} />
                         <Route
                              path="*"
                              element={<h1>This page is not found</h1>}
                         />
                         <Route path="/contact" element={<Contact />} />{" "}
                         <Route path="/dashboard" element={<AdminRoute />}>
                              <Route path="admin" element={<MainPage />} />
                              <Route
                                   path="admin/create-category"
                                   element={<CreateCategory />}
                              />
                              <Route
                                   path="admin/create-product"
                                   element={<CreateProducts />}
                              />{" "}
                              <Route
                                   path="admin/create-users"
                                   element={<CreateUsers />}
                              />
                         </Route>
                         <Route path="/dashboard" element={<PrivateRoute />}>
                              <Route path="user" element={<Dashboard />} />
                         </Route>
                         <Route path="/about" element={<About />} />
                         <Route path="/category" element={<Category />} />
                         <Route path="/register" element={<Register />} />
                         <Route path="/login" element={<Login />} />
                         <Route path="/cart" element={<Cart />} />
                    </Routes>
                    {/* </BrowserRouter> */}
               </div>
          );
     }
}

export default App;
