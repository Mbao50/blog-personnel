import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ArticleDetail() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const articles = JSON.parse(localStorage.getItem("articles")) || [];
    const found = articles.find((a) => a.id === parseInt(id));
    setArticle(found);
  }, [id]);

  if (!article) return <p className="mt-5 text-center">Article introuvable ❌</p>;

  return (
    <div className="container mt-5">
      <h2>{article.title}</h2>
      <p>{article.content}</p>
    </div>
  );
}
