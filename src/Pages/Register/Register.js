import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AuthContext } from "../../Contexts/ContextProvider/ContextProvider";

const Register = () => {
  const { signWithEmail, updateUser, verifyEmail } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [checked, setChecked] = useState(true);
  const handleChecked = () => {
    setChecked(!checked);
  };
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoUrl = form.photoUrl.value;
    const email = form.email.value;
    const password = form.password.value;
    signWithEmail(email, password)
      .then((result) => {
        const profile = {
          displayName: name,
          photoURL: photoUrl,
        };
        const user = result.user;
        console.log(user);
        setError("");
        form.reset();
        updateUser(profile)
          .then(() => {})
          .catch((error) => console.error(error));
        sendEmailVerification();
      })
      .catch((e) => {
        console.log(e);
        setError(e.message);
      });

    const sendEmailVerification = () => {
      verifyEmail()
        .then(() => {})
        .catch((error) => console.log(error));
    };
  };
  return (
    <Form onSubmit={handleRegister}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control
          name="name"
          type="text"
          placeholder="Enter Name"
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Photo url</Form.Label>
        <Form.Control
          name="photoUrl"
          type="text"
          placeholder="Enter photoUrl"
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          name="email"
          type="email"
          placeholder="Enter email"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          name="password"
          type="password"
          placeholder="Password"
          required
        />
      </Form.Group>
      <Form.Group
        onClick={handleChecked}
        className="mb-3"
        controlId="formBasicCheckbox"
      >
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button disabled={checked} variant="primary" type="submit">
        Register
      </Button>
      <Form.Text className="text-danger">{error}</Form.Text>
    </Form>
  );
};

export default Register;
