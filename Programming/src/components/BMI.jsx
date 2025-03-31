import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

function BMI() {

    const [height, updateHeight] = useState(0);
    const [weight, updateWeight] = useState(0);

    const HandleHeight = (event)=>{
        updateHeight(event.target.value);
    }

    const HandlelWeight = (event)=>{
        updateWeight(event.target.value);
    }

    const HandleSubmit = ()=>{
        const bmi = weight/(height**2);
        console.log(bmi)
    }


    return (
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Weight(in kg):</Form.Label>
            <Form.Control onChange={HandlelWeight} type="number" step="any" placeholder="Enter your weight" />
            <Form.Text className="text-muted">
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Height(in meter):</Form.Label>
            <Form.Control onChange={HandleHeight} type="numper" step="any" placeholder="Height" />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={HandleSubmit}>
            Submit
        </Button>
        </Form>
    );
}

export default BMI;
