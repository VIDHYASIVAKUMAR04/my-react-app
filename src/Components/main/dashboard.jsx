import React from "react";
import { auth } from "../reuse/auth/firebase";
import { signOut } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log("User logged out successfully");
        navigate("/"); 
      })
      .catch((error) => {
        console.error("Error during logout:", error);
      });
  };

  return (
    <div className="min-h-screen  flex items-center justify-center">
      <div className=" rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Welcome to the Dashboard</h1>
        <p className="text-gray-600 mb-6">You are now logged in.</p>

        <div className="space-y-4">
          <Link
            to="/profile"
            className="block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
          >
            View Profile
          </Link>
          <button
            onClick={handleLogout}
            className="w-full px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;