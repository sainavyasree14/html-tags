import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import Container from 'react-bootstrap/Container';
import emailjs from "@emailjs/browser"
import { toast ,ToastContainer} from 'react-toastify';
const Login = () => {
  const [logindetails, setlogindetails] = React.useState({
    username: "",
    password: "",
    otp: "",
  })
  const [mailotp,setmailotp]=useState(0);
  /* to control from submit*/
  const handlelogin = (e) => {
    try{
      e.preventDefault();
      if(mailotp==logindetails.otp&logindetails.password!=""){
        toast.success("login successfull😉")
      }else if(mailotp!=logindetails.otp){
        toast.warn("invalid otp")
      }
      console.log(logindetails);
      console.log(mailotp)
    }catch(err){
      console.log(err);
    }
  };
  /*function to fetch input values*/
  const handlechange = (e) => {
    setlogindetails({ ...logindetails, [e.target.name]: e.target.value })
  };
  /*form reset function*/
  const handlereset = () => {
    setlogindetails({
      username: "",
      password: "",
      otp: "",
    });
  };
  /*for generating otp*/
  const generateotp = async () => {
    try {
      let generatedotp = Math.floor(Math.random() * 1000000);
      let time = new Date();
      let expiredtime = `${time.getHours()}:${time.getMinutes() + 15}:00`;
      setmailotp(generatedotp);
      
      let formdata = {
        email: logindetails.username,
        otp: generatedotp,
        time: expiredtime,
      };

      console.log(logindetails);
      
      await emailjs.send("service_09mtgel", "template_9o3cah8", formdata, { publicKey: "eebfiTLpS74IYWmzR" });
      toast.success("otp has been send to email successfully😁")
    } catch (err) {
      console.log(err);
      toast.error("failed to generate otp")
    }
  };
  return (
    <div id="form-Container">
      <Form onSubmit={handlelogin}>
        <Row>
          <Form.Group>
            <Form.Label>Username</Form.Label>
            <Form.Control type="email" placeholder="enter email" name="username" onChange={handlechange} value={logindetails.username}></Form.Control>
          </Form.Group>
        </Row>
        <Row>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" placeholder="enter your password" onChange={handlechange} value={logindetails.password} ></Form.Control>
          </Form.Group>
        </Row>
        <Row className="my-2">
          <Col>
            <Button onClick={generateotp} type="button" className="btn btn-info">Generate otp</Button>
          </Col>
          <Col>
            <Form.Control type="number" name="otp" placeholder="enter otp" onChange={handlechange} value={logindetails.otp}></Form.Control>
          </Col>
        </Row>
        <Row className="my-2">
          <Col>
            <Button type="submit" >Sign in</Button>
          </Col>
          <Col>
            <Button onClick={handlereset} className="btn btn-warning">Reset</Button>
          </Col>
        </Row>
      </Form>
      <ToastContainer />
    </div>
  )
}

export default Login