 Register.jsx

import React, { useState } from "react";

export default function Register() {
  const [form, setForm] = useState({
    fullname: "",
    username: "",
    phone: "",
    password: "",
    otp: "",
  });
  const [step, setStep] = useState(1);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (step === 1) {
      // Enregistrer temporairement les infos (sans backend)
      localStorage.setItem("pendingUser", JSON.stringify(form));
      setStep(2);
    } else if (step === 2) {
      if (form.otp === "1111") {
        localStorage.setItem("user", JSON.stringify(form));
        alert("Inscription réussie ✅");
        window.location.href = "/login";
      } else {
        alert("Code OTP incorrect ❌");
      }
    }
  };

  return (
    <div className="container mt-5">
      <h2>Inscription</h2>
      <form onSubmit={handleRegister}>
        {step === 1 ? (
          <>
            <input className="form-control my-2" type="text" name="fullname" placeholder="Nom complet" onChange={handleChange} required />
            <input className="form-control my-2" type="text" name="username" placeholder="Nom d'utilisateur" onChange={handleChange} required />
            <input className="form-control my-2" type="text" name="phone" placeholder="Téléphone" onChange={handleChange} required />
            <input className="form-control my-2" type="password" name="password" placeholder="Mot de passe" onChange={handleChange} required />
            <button className="btn btn-primary w-100">S'inscrire</button>
          </>
        ) : (
          <>
            <input className="form-control my-2" type="text" name="otp" placeholder="Entrer le code OTP" onChange={handleChange} required />
            <button className="btn btn-success w-100">Vérifier OTP</button>
          </>
        )}
      </form>
    </div>
  );
}