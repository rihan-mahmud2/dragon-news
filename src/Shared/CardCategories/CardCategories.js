import React from "react";
import { Card, Image } from "react-bootstrap";
import { IoBookmarkOutline, IoShareSocialSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const CardCategories = ({ n }) => {
  const { author, details, image_url, title, total_view, _id } = n;
  return (
    <Card className="mb-5">
      <Card.Header className="d-flex justify-content-between align-items-center">
        <div className="d-flex">
          <Image
            src={author?.img}
            roundedCircle
            style={{ width: "60px" }}
          ></Image>
          <div>
            <p>{author?.name}</p>
            <p>{author?.published_date}</p>
          </div>
        </div>
        <div>
          <IoShareSocialSharp className="me-3 fs-4"></IoShareSocialSharp>
          <IoBookmarkOutline className="fs-4"></IoBookmarkOutline>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Image src={image_url} className="w-100"></Image>
        <Card.Text>
          {details.length > 250 ? (
            <p>
              {details.slice(0, 250)}
              <Link to={`/news/${_id}`}>Read More</Link>
            </p>
          ) : (
            <p>{details}</p>
          )}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
  );
};

export default CardCategories;
