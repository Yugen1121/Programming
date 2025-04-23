import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

function SignUp(){
    const [email, updateEmil] = useState("")
    const [password, updatePassword] = useState("")
    const [Confirm, updateConfirm] = useState("")
    const [error, updateError] = useState(false)

    const handleEmail = (event)=>{
        updateEmil(event.target.value);
    }

    const handlePassword = (event)=>{
        updatePassword(event.target.value);
    }

    const handelConfirm = (event)=>{
        updateConfirm(event.target.value)
    }

    const handleSubmit = (event)=>{
        event.preventDefault()
        if (password != Confirm){
            updateError(true)
        }
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

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Confirm password:</Form.Label>
            <Form.Control onChange={handelConfirm} type="password" step="any" placeholder="Password" />
        </Form.Group>
        {error && 
            (<div>Password did not match</div>)
            }
        <Button onSubmit={handleSubmit} variant="primary" type="submit" >
            Submit
        </Button>
        </Form>
        </div>
        </>
    );
}

export default SignUp;