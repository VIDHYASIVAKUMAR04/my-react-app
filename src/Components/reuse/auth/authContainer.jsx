import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div
      className="min-h-screen w-full flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dxutqk10a/image/upload/v1740464480/2176_n1tkmt.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="bg-white rounded-lg shadow-lg  w-full max-w-md">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;