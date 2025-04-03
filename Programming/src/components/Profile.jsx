import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Styles.css";
import img from "./assets/serious.png"


function Profile() {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col>
            <img src={img} className='profile-image'/>
        </Col>
        <Col>
            <div>
                <h3>Name:</h3>
                <h3>DOB:</h3>
                <h3>Email:</h3>
            </div>
        </Col>
      </Row>
      <Row>
        <Col>1 of 3</Col>
        <Col>Variable width content</Col>
      </Row>
    </Container>
  );
}

export default Profile;