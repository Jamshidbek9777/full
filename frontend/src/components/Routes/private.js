import React, { useState, useEffect } from "react";
import { useAuth } from "../context/auth";
import { Outlet } from "react-router-dom";
import LoadingSpinner from "./Spinner";

export default function PrivateRoute() {
     const [ok, setOk] = useState(false);
     const [auth, setAuth] = useAuth();

     useEffect(() => {
          const authCheck = async () => {
               try {
                    const res = await fetch(
                         `http://localhost:8000/api/v1/auth/user-auth`,
                         {
                              method: "GET",
                              headers: {
                                   Authorization: auth.token,
                              },
                         }
                    );

                    const data = await res.json();

                    if (data.ok) {
                         console.log(data.ok);
                         setOk(true);
                    } else {
                         setOk(false);
                    }
               } catch (error) {
                    console.error("Error checking authentication:", error);
                    setOk(false);
               }
          };

          if (auth.token) {
               authCheck();
          }
     }, [auth.token]);

     return ok ? <Outlet /> : <LoadingSpinner />;
}
