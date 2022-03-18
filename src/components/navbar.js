import React, { useState } from "react";
import { Navbar, NavLink, Nav } from "react-bootstrap";

const Navigate = ({ setCurrentPage }) => {
  return (
      <Nav variant="tabs" className="align-items-center border-dark mx-3">
        <Nav.Item>
          <NavLink onClick={() => setCurrentPage("About")} className="text-black h-100 p-4 border-none">About Me</NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink onClick={() => setCurrentPage("WorkSamples")} className="text-black p-4 border-none">Work Samples</NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink onClick={() => setCurrentPage("Resume")} className="text-black p-4 border-none">Resume</NavLink>
        </Nav.Item>
      </Nav>
  );
};

export default Navigate;
