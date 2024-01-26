import React, { useState, useEffect } from "react";

import AdminDashboard from "../../Admin/adminDashboard";
import { MainWrapper, MainContent, Content } from "./style";
import { message } from "antd";
export const Products = () => {
     const [products, setProducts] = useState([]);
     const getAllProducts = async () => {
          try {
               const res = await fetch(
                    `http://localhost:8000/api/v1/products/get-products`,
                    {
                         method: "GET",
                    }
               );
               const data = await res.json();
               if (data.success) {
                    setProducts(data.products);
               }
          } catch (error) {
               console.log(error);
               message.error("Something went wrong");
          }
     };
     useEffect(() => {
          getAllProducts();
     }, []);
     return (
          <MainContent>
               <MainWrapper>
                    <AdminDashboard />
                    <Content className="col-md-9">
                         <h1 className="text-center">All products list</h1>

                         {products.map((p) => (
                              <div className="card" style={{ width: "18rem" }}>
                                   <img
                                        src={`http://localhost:8000/api/v1/products/product-photo/${p._id}`}
                                        className="card-img-top"
                                        alt="..."
                                   />
                                   <div className="card-body">
                                        <h5 className="card-title">{p.name}</h5>
                                        <p className="card-text">
                                             {p.description}
                                        </p>
                                   </div>
                              </div>
                         ))}
                    </Content>
               </MainWrapper>
          </MainContent>
     );
};
export default Products;
