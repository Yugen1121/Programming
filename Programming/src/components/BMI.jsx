import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from 'react';
import image1 from "./assets/serious.png";
import image2 from "./assets/wow.png";

function BMI() {

    // image initialization
    const [image, updateImage] = useState(null);

    const [bmi, updateBMI] = useState(null);

    // initialising state
    const [height, updateHeight] = useState(0);
    const [weight, updateWeight] = useState(0);

    // updates the height variable when height is changed
    const HandleHeight = (event)=>{
        updateHeight(event.target.value);
    }

    // updates the weight variable when weight is changed
    const HandlelWeight = (event)=>{
        updateWeight(event.target.value);
    }

    // under work. currently shows the bmi in console
    const HandleSubmit = (event)=>{
        event.preventDefault()
        updateBMI((weight/(height**2)).toFixed(2))
    }

    useEffect(()=>{
        if (bmi > 21){
            updateImage(image1)
        }
        else if(bmi > 18){
            updateImage(image2)
        }
        else{
            updateImage(image1)
        }
    }, [bmi])

    return (
        <>
        <div>
        {(image !== null && bmi !== null)? <>
        <div><img src={image}/></div>
        <div>Your BMI is {bmi}</div>
        
        </>: ""}
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Weight(in kg):</Form.Label>
            <Form.Control onChange={HandlelWeight} type="number" step="any" placeholder="Enter your weight" />
            <Form.Text className="text-muted">
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Height(in meter):</Form.Label>
            <Form.Control onChange={HandleHeight} type="number" step="any" placeholder="Height" />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={HandleSubmit}>
            Submit
        </Button>
        </Form>
        </div>
        </>
    );
}

export default BMI;
