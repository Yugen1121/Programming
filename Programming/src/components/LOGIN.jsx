import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from 'react';
import image1 from "./assets/serious.png";
import image2 from "./assets/wow.png";

function Login() {

    const [email, updateEmil] = useState("")
    const [password, updatePassword] = useState("")
    const [errir, updateError] = useState(false)
    
    const handleEmail = (event)=>{
        updateEmil(event.target.value);
    }

    const handlePassword = (event)=>{
        event.preventDefault()
        updatePassword(event.target.value);
    }

    const handleSubmit = ()=>{

    }

    return (
        <>
        <div>
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email:</Form.Label>
            <Form.Control onChange={handleEmail}  type="text" step="any" placeholder="Email" />
            <Form.Text className="text-muted">
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>password:</Form.Label>
            <Form.Control onChange={handlePassword} type="password" step="any" placeholder="Password" />
        </Form.Group>
        <Button onSubmit={handleSubmit} variant="primary" type="submit" >
            Submit
        </Button>
        </Form>
        </div>
        </>
    );
}

export default Login;

