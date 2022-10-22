import React from "react";
import { useLoaderData } from "react-router-dom";
import CardCategories from "../CardCategories/CardCategories";

const Category = () => {
  const news = useLoaderData();
  return (
    <div>
      {news.map((n) => (
        <CardCategories key={n._id} n={n}></CardCategories>
      ))}
    </div>
  );
};

export default Category;
