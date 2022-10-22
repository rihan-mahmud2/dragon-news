import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Contexts/ContextProvider/ContextProvider";
const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [error, setError] = useState("");
  const { signIn, setLoading } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        e.target.reset();
        if (user?.emailVerified) {
          navigate(from, { replace: true });
        }
      })
      .catch((e) => {
        console.log(e);
        setError(e.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name="email" type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
        <Form.Text>{error}</Form.Text>
      </Form>
    </div>
  );
};

export default Login;
