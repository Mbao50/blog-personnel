import React, { useState } from "react";

export default function ArticleForm() {
  const [form, setForm] = useState({ title: "", content: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let articles = JSON.parse(localStorage.getItem("articles")) || [];
    const newArticle = { ...form, id: Date.now() };
    articles.push(newArticle);
    localStorage.setItem("articles", JSON.stringify(articles));
    alert("Article ajouté ✅");
    window.location.href = "/dashboard";
  };

  return (
    <div className="container mt-5">
      <h2>Nouvel Article 📝</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="form-control my-2"
          type="text"
          name="title"
          placeholder="Titre de l'article"
          onChange={handleChange}
          required
        />
        <textarea
          className="form-control my-2"
          name="content"
          placeholder="Contenu de l'article"
          onChange={handleChange}
          required
        />
        <button className="btn btn-success w-100">Publier</button>
      </form>
    </div>
  );
}
