import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

const Header = (props) => {
  const { handleChange, handleSubmit, input } = props;
  const [userList, setUserList] = useState([]);

  const getUsers = () => {
    if (userList.length > 0) {
      return (
        userList.map((item) => (
          <div key={item.id}>
            <NavDropdown.Item eventKey={item.id}>{item.name}</NavDropdown.Item>
          </div>
        ))
      );
    }
    return null;
  };

  useEffect(() => {
    axios.get('api/users')
      .then((results) => {
        setUserList(results.data);
        getUsers();
      })
      .catch((err) => {
        console.error(err);
      });
  }, [input]);



  return (
    <Navbar bg="light" variant="light">
      <Navbar.Brand href="#home">TikTok Analytics</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav variant="pills" activeKey="1">
          <NavDropdown title="User List" id="nav-dropdown">
            {getUsers()}
          </NavDropdown>
        </Nav>
      </Nav>
      <Form inline onSubmit={handleSubmit}>
        <FormControl type="text" placeholder="TikTok Username" onChange={handleChange} value={input} className="mr-sm-2" />
        <Button type="submit" variant="outline-primary">Analyze</Button>
      </Form>
    </Navbar>
  );
};

export default Header;
