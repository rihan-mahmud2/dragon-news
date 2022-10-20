import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import {
  Facebook,
  Github,
  Linkedin,
  Pinterest,
  Twitch,
  Whatsapp,
} from "react-bootstrap-icons";

const RightNavbar = () => {
  return (
    <div>
      <div className="d-grid gap-2">
        <Button variant="outline-primary" size="lg">
          <Facebook className="me-2 fs-4" /> Sign with facebook
        </Button>
        <Button variant="outline-secondary" size="lg">
          <Github className="me-2 fs-4" /> Sign with github
        </Button>
      </div>
      <div>
        <h3>Find Us on</h3>
        <ListGroup>
          <ListGroup.Item>
            <Facebook /> Facebook
          </ListGroup.Item>
          <ListGroup.Item>
            {" "}
            <Whatsapp /> Whatsaap
          </ListGroup.Item>
          <ListGroup.Item>
            {" "}
            <Twitch></Twitch> Twitter
          </ListGroup.Item>
          <ListGroup.Item>
            {" "}
            <Linkedin></Linkedin> Linkdin
          </ListGroup.Item>
          <ListGroup.Item>
            {" "}
            <Pinterest></Pinterest> Pinterse
          </ListGroup.Item>
        </ListGroup>
      </div>
    </div>
  );
};

export default RightNavbar;
