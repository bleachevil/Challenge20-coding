import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export default function Contact() {
  return (
    <div>
      <h1 style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "20px"
        }}>Contact me</h1>
      <InputGroup style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "20px"
        }}>
      <InputGroup.Text id="Name"> Name :  </InputGroup.Text>
      <Form.Control
        placeholder="Name"
        aria-label="Name"
        aria-describedby="basic-addon1"
      />
    </InputGroup>

    <Form className="border-dark rounded m-4">
      <Form.Group style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "20px"
        }} controlId="Email">
        <Form.Label > Email address : </Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "20px"
        }} controlId="Text">
        <Form.Label> Message :</Form.Label>
        <Form.Control as="textarea" rows={3} />
        <Button variant="primary" type="submit">
        Submit
      </Button>
      </Form.Group>
    </Form>

    </div>
  );
}