import React from "react";
import { useLoaderData } from "react-router-dom";

const News = () => {
  const singleNews = useLoaderData();
  return (
    <div>
      <h1>{singleNews.title}</h1>
    </div>
  );
};

export default News;
