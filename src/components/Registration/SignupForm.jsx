import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import "./style.css"

function SignupForm() {

  const [validated, setValidated] = useState(false);
  const [ formData, setFormData ] = useState({first_name: '',last_name: '',email: '',address: '',card_num: '',card_name: '',cvv_code: '',cc_exp: '',cc_exp_year: '',})

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div className='form'>
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label >First Name</Form.Label>
          <Form.Control
            required
            type="text"
            name="first_name"
            placeholder="First name"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            name="last_name"
            placeholder="Last name"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
       
      </Row>
      <Row>
        <Form.Group as={Col} md="4" controlId="validationCustom04">
          <Form.Label>Email</Form.Label>
          <Form.Control 
          type="email" 
          name="email"
          placeholder="Email" 
          required />
          <Form.Control.Feedback type="invalid">Please provide a valid email.</Form.Control.Feedback>
          <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>Address</Form.Label>
          <Form.Control 
          type="text" 
          name="address"
          placeholder="Address" 
          required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid Address.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>

      <Row><h4>Credit Card Information</h4></Row>
      <Row>
        <Form.Group as={Col} md="4" controlId="validationCustom03">
          <Form.Label>Credit Card Number</Form.Label>
          <Form.Control 
          type="text"
          name="card_num" 
          placeholder="credit card number" 
          required 
          pattern="[\d|-]{16}" />
          <Form.Control.Feedback type="invalid">
            Please provide a valid credit card number.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row>
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label >Name on card</Form.Label>
          <Form.Control
            required
            name="card_name"
            type="text"
            placeholder="Name on card"
            defaultValue=""
          />
        </Form.Group>
      </Row>
      <Row >
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label >Expiry Date</Form.Label>
          <Form.Control
            required
            type="date"
            placeholder="Name on card"
            defaultValue=""
          />
        </Form.Group>
      </Row>
      <Button type="submit">Submit form</Button>
    </Form>
    </div>
  );
}

export default SignupForm