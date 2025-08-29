Login.jsx

import React, { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"));

    if (user && user.username === username && user.password === password) {
      localStorage.setItem("isLoggedIn", true);
      alert("Connexion réussie ✅");
      window.location.href = "/dashboard";
    } else {
      alert("Nom d'utilisateur ou mot de passe incorrect ❌");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Connexion</h2>
      <form onSubmit={handleLogin}>
        <input className="form-control my-2" type="text" placeholder="Nom d'utilisateur" onChange={(e) => setUsername(e.target.value)} required />
        <input className="form-control my-2" type="password" placeholder="Mot de passe" onChange={(e) => setPassword(e.target.value)} required />
        <button className="btn btn-primary w-100">Se connecter</button>
      </form>
    </div>
  );
}