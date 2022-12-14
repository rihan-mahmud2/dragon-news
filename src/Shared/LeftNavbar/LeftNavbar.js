import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftNavbar = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch("https://dragon-news-server-phi-lovat.vercel.app/")
      .then((res) => res.json())
      .then((data) => setNews(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      {news.map((n) => (
        <p key={n.id}>
          <Link to={`category/${n.id}`}>{n.name}</Link>
        </p>
      ))}
    </div>
  );
};

export default LeftNavbar;
