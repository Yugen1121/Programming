import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function BMI() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Weight(in kg):</Form.Label>
        <Form.Control type="number" placeholder="Enter your weight" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Height(in meter):</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default BMI;
