import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Wrapper } from "./style";
import { message } from "antd";
const Register = () => {
     const [name, setName] = useState("");
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     const [phone, setPhone] = useState("");
     const [address, setAddress] = useState("");
     const navigate = useNavigate();
     const handleSubmit = async (e) => {
          e.preventDefault();
          try {
               const res = await fetch(
                    `http://localhost:8000/api/v1/auth/register`,
                    {
                         method: "POST",
                         headers: {
                              "Content-Type": "application/json",
                         },
                         body: JSON.stringify({
                              name,
                              email,
                              password,
                              address,
                         }),
                    }
               );
               const data = await res.json();
               if (data.success) {
                    message.success(data.message);
                    navigate("/login");
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
                    <h2>Register now</h2>
                    <form onSubmit={handleSubmit}>
                         <div>
                              <input
                                   onChange={(e) => setName(e.target.value)}
                                   value={name}
                                   placeholder="Enter your name here"
                                   type="text"
                                   required
                              />
                         </div>
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
                         <div>
                              <input
                                   onChange={(e) => setAddress(e.target.value)}
                                   value={address}
                                   placeholder="Address"
                                   type="address"
                              />
                         </div>
                         <button type="submit">Submit</button>
                    </form>
               </Wrapper>
          </Container>
     );
};
export default Register;
