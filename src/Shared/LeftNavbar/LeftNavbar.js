import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftNavbar = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/")
      .then((res) => res.json())
      .then((data) => setNews(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <h1>This is the LeftNavbar {news.length}</h1>
      {news.map((n) => (
        <p key={n.id}>
          <Link to={`category/${n.id}`}>{n.name}</Link>
        </p>
      ))}
    </div>
  );
};

export default LeftNavbar;
