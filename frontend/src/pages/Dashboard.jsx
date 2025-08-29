 Dashboard.jsx

import React, { useEffect, useState } from "react";

export default function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem("user"));
    if (!localStorage.getItem("isLoggedIn")) {
      window.location.href = "/login";
    } else {
      setUser(loggedUser);
    }
  }, []);

  return (
    <div className="container mt-5">
      <h2>Bienvenue {user?.fullname} 👋</h2>
      <p>Voici votre tableau de bord personnel.</p>
    </div>
  );
}