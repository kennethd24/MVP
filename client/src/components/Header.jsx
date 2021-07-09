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
  const [userList, setUserList] = useState([
    {
      id: '99284569248576',
      name: 'boxycharm123',
      following: 118,
      fans: 1300000,
      heart: 32500000,
      video: 1838,
    },
    {
      id: '9928456924sdfgsd8576',
      name: 'bsdfgoxycharm123',
      following: 118,
      fans: 1300000,
      heart: 32500000,
      video: 1838,
    },
    {
      id: '99284569396248576',
      name: 'boxycharm',
      following: 118,
      fans: 1300000,
      heart: 32500000,
      video: 1838,
    },
  ]);

  // useEffect(() => {
  //   (async () => {
  //     const results = await axios.get('api/users');
  //     setUserList(results);
  //     getUsers();
  //   })();
  // }, [userList]);

  // const getUsers = () => {
  //   userList.map((item) => (
  //     <div>
  //       <NavDropdown.Item eventKey={item.id}>{item.name}</NavDropdown.Item>
  //     </div>
  //   ));
  // };
  const getUsers = () => (
    userList.map((user) => (
      <div key={user.id}>
        <NavDropdown.Item>{user.name}</NavDropdown.Item>
      </div>
    ))
  );

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
