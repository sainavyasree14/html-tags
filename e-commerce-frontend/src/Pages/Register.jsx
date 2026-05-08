import { useState } from 'react';
import { ToastContainer } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { toast } from 'react-toastify';

function register() {
  const[details,setdetails]=useState({
    name:"",
    email:"",
    phone:"",
    password:"",
    address:"",
    city:"",
    usertype:"user",
    state:"",
    zipcode:"",
  });
  const handlechange=(e)=>{
    setdetails(...details)
  }
  const handlesubmit=(e)=>{
    e.preventdetails();
    console.log(details);
    toast.success("registered successfully😁")
  }
  return (
    <div id="form-container"><Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" required placeholder="Enter full name" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPhone">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="tel" pattern="[6-9]{1}[0-9]{9}" required placeholder="+91" />
        </Form.Group>
      </Row>
      <Row className="mb-3">

        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" required placeholder="Enter email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridusertype">
          <Form.Label>usertype</Form.Label>
          <Form.Select name="usertype" onchange={handlechange}>
            <option>choose user type</option>
            <option value="user">user</option>
            <option value="admin">admin</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Create Password</Form.Label>
          <Form.Control type="password" required placeholder="Password" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control required placeholder="Enter address" />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control required />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select required defaultValue="Choose...">
            <option>Choose State...</option>
            <option value="andhra pradesh">AP</option>
            <option value="tamil nadu">TN</option>
            <option value="telangana">TS</option>
            <option value="karnataka">KA</option>
            <option value="arunachal pradesh">AR</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control  required/>
        </Form.Group>
      </Row>

      <Form.Group className="mb-3">
        <span>If you already have registered account click here to {""}<a href="/login">Login</a></span>
      </Form.Group>

      <Button variant="primary" type="submit" >
        Submit
      </Button>
    </Form>
    <ToastContainer/>
    </div>
  );
}

export default register;