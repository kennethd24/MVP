import React from 'react';
import { Nav } from 'react-bootstrap';

const Sidebar = () => (
  // <>

  //   <Nav
  //     className="col-md-12 d-none d-md-block bg-light sidebar"
  //     activeKey="/home"
  //     onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
  //   >
  //     <div className="sidebar-sticky" />
  //     <Nav.Item>
  //       <Nav.Link href="/home">Active</Nav.Link>
  //     </Nav.Item>
  //     <Nav.Item>
  //       <Nav.Link eventKey="link-1">Link</Nav.Link>
  //     </Nav.Item>
  //     <Nav.Item>
  //       <Nav.Link eventKey="link-2">Link</Nav.Link>
  //     </Nav.Item>
  //     <Nav.Item>
  //       <Nav.Link eventKey="disabled" disabled>
  //         Disabled
  //         hello
  //       </Nav.Link>
  //     </Nav.Item>
  //   </Nav>

  // </>
  <Nav defaultActiveKey="/home" className="flex-column">
  <Nav.Link href="/home">Active</Nav.Link>
  <Nav.Link eventKey="link-1">Link</Nav.Link>
  <Nav.Link eventKey="link-2">Link</Nav.Link>
  <Nav.Link eventKey="disabled" disabled>
    Disabled
  </Nav.Link>
</Nav>
);
export default Sidebar;
