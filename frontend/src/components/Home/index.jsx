import React, { useState } from "react";
import { useAuth } from "../context/auth.js";
export const Home = () => {
     const [auth, setAuth] = useAuth();
     return (
          <div>
               <h1>Homepage</h1>
               <pre>{JSON.stringify(auth, null, 4)}</pre>
          </div>
     );
};
export default Home;
