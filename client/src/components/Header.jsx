import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

const Header = (props) => {
  const { handleChange, handleSubmit, input } = props;

  return (
    <Navbar bg="light" variant="light">
      <Navbar.Brand href="#home">TikTok Analytics</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
      </Nav>
      <Form inline onSubmit={handleSubmit}>
        <FormControl type="text" placeholder="TikTok Username" onChange={handleChange} value={input} className="mr-sm-2" />
        <Button type="submit" variant="outline-primary">Analyze</Button>
      </Form>
    </Navbar>
  );
};

export default Header;
