import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Pages
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Friends from "./pages/Friends";
import ArticleForm from "./pages/ArticleForm";
import ArticleDetail from "./pages/ArticleDetail";
import NotFound from "./pages/NotFound";

function App() {
  const isLoggedIn = localStorage.getItem("isLoggedIn"); // simple auth temporaire

  // route protégée
  const PrivateRoute = ({ children }) => {
    return isLoggedIn ? children : <Navigate to="/login" replace />;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/friends"
          element={
            <PrivateRoute>
              <Friends />
            </PrivateRoute>
          }
        />
        <Route
          path="/articles/new"
          element={
            <PrivateRoute>
              <ArticleForm />
            </PrivateRoute>
          }
        />
        <Route
          path="/articles/:id"
          element={
            <PrivateRoute>
              <ArticleDetail />
            </PrivateRoute>
          }
        />

        {/* Route 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
