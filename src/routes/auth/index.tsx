import React from "react";
import { Route, Routes } from "react-router";
import Login from "../../pages/Login";
import Register from "../../pages/Register";
import bgImage from "../../assets/bg-image.jpg";
import { Toaster } from 'react-hot-toast'

export const AuthRoutes: React.FC = () => {
  return (
    <div
      className="h-screen w-screen bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <Toaster/>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};
