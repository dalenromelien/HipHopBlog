import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/Home/Home";
import ProfilePage from "./Pages/Profile/Profile";
import AdminPage from "./Pages/Admin/Admin";
import ArticlePage from "./Pages/Article/Article";
import Layout from "./Components/Layout/Layout";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="admin" element={<AdminPage />} />
            <Route path="article" element={<ArticlePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
