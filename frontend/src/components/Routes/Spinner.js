import React from "react";
import { ClipLoader } from "react-spinners";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const LoadingSpinner = ({ loading, color }) => {
     const [count, setCount] = useState(3);
     const navigate = useNavigate();
     useEffect(() => {
          const interval = setInterval(() => {
               setCount((prevValue) => --prevValue);
          }, 1000);
          count === 0 && navigate("/login");
          return () => clearInterval(interval);
     }, [count, navigate]);
     return (
          <div
               style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "80vh",
               }}>
               <ClipLoader color={color} loading={loading} size={120} />
          </div>
     );
};

export default LoadingSpinner;
