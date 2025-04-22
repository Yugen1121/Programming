import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from 'react';
import image1 from "./assets/serious.png";
import image2 from "./assets/wow.png";

function Login() {


    return (
        <>
        <div>
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email:</Form.Label>
            <Form.Control  type="text" step="any" placeholder="Email" />
            <Form.Text className="text-muted">
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>password:</Form.Label>
            <Form.Control type="password" step="any" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit" >
            Submit
        </Button>
        </Form>
        </div>
        </>
    );
}

export default Login;

