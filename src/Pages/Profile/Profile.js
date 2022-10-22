import React, { useContext, useRef, useState } from "react";
import { AuthContext } from "../../Contexts/ContextProvider/ContextProvider";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName);
  const photoURLRef = useRef(user?.photoURL);

  const handleOnSubmit = (event) => {
    event.preventDefault();
    console.log(photoURLRef.current.value);
  };
  const handleNameChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };
  return (
    <Form onSubmit={handleOnSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          readOnly
          defaultValue={user?.email}
          type="email"
          placeholder="Enter email"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Name</Form.Label>
        <Form.Control
          onChange={handleNameChange}
          defaultValue={name}
          type="text"
          placeholder="Password"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>photoURL</Form.Label>
        <Form.Control
          ref={photoURLRef}
          onChange={handleNameChange}
          defaultValue={user?.photoURL}
          type="text"
          placeholder="Password"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default Profile;
