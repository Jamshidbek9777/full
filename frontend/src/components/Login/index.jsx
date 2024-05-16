import React, { useState } from "react";
import { Container, Wrapper } from "./style";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
import { useAuth } from "../context/auth";
export const Login = () => {
     const [auth, setAuth] = useAuth();
     const [name, setName] = useState("");
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     const [address, setAddress] = useState("");
     const navigate = useNavigate();
     //handle Submit
     const handleSubmit = async (e) => {
          e.preventDefault();
          try {
               const res = await fetch(
                    `http://localhost:8000/api/v1/auth/login`,
                    {
                         method: "POST",
                         headers: {
                              "Content-Type": "application/json",
                         },
                         body: JSON.stringify({
                              email,
                              password,
                         }),
                    }
               );
               const data = await res.json();
               if (data.success) {
                    message.success(data.message);
                    setAuth({
                         ...auth,
                         user: data.user,
                         token: data.token,
                    });
                    localStorage.setItem("auth", JSON.stringify(data));
                    navigate("/");
               } else {
                    message.error(data.message);
                    console.log(data);
               }
          } catch (error) {
               console.log(error);
               message.error("Something went wrong");
          }
     };
     return (
          <Container>
               <Wrapper>
                    <h2>Login</h2>
                    <form onSubmit={handleSubmit}>
                         <div>
                              <input
                                   onChange={(e) => setEmail(e.target.value)}
                                   value={email}
                                   placeholder="Enter you email here"
                                   type="email"
                                   required
                              />
                         </div>{" "}
                         <div>
                              <input
                                   onChange={(e) => setPassword(e.target.value)}
                                   value={password}
                                   placeholder="Password"
                                   type="password"
                                   required
                              />
                         </div>{" "}
                         <button type="submit">Submit</button>
                    </form>
               </Wrapper>
          </Container>
     );
};
export default Login;
