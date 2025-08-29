import React, { useEffect, useState } from "react";

export default function Friends() {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    // Fake data (remplacé plus tard par backend)
    const fakeFriends = [
      { id: 1, name: "Ousmane Ba" },
      { id: 2, name: "Fatou Ndiaye" },
      { id: 3, name: "Mamadou Diallo" },
    ];
    setFriends(fakeFriends);
  }, []);

  return (
    <div className="container mt-5">
      <h2>Mes Amis 👥</h2>
      <ul className="list-group">
        {friends.map((f) => (
          <li key={f.id} className="list-group-item">{f.name}</li>
        ))}
      </ul>
    </div>
  );
}
