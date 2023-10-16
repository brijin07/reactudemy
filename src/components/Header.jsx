import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import { Globe, Search, ShoppingCart } from "react-feather";
import Stack from "@mui/material/Stack";
import { Button } from "@mui/material";


function Header() {
  return (
    <div className="nav1 container-fluid">
      <Navbar className="ms-4">
     
        <Navbar.Brand className="" href="#home">
          <img
            src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
            width="80"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>

        <Nav.Link href="#home">Catogories</Nav.Link>

        <Form
          className="d-flex ms-3 "
          style={{
            borderRadius: "50px",
            width: "550px",
            height: "48px",
            border: "1px solid black",
          }}
        >
          <div className="m-2 ms-3">
            <Search color="grey" size={"20px"} />
          </div>
          <input
            style={{
              width: "420px",
              border: "none",
              outline: "none",
              marginLeft: "10px",
            }}
            type="text"
            placeholder="search for anything"
          />
        </Form>

        <Nav.Link className="ms-3" href="#home">
          Udemy business
        </Nav.Link>
        <Nav.Link className="ms-3" href="#home">
          Teach on udemy
        </Nav.Link>
        <Nav.Link className="ms-3" href="#home">
          {" "}
          <ShoppingCart />
        </Nav.Link>

        <Stack direction="row" spacing={0.5} className="ms-3">
          
          <Button variant="outlined" className="text-dark " style={{borderRadius:'1px', textTransform:'initial',border:'1px black solid', fontWeight:'bold'}}>Log in</Button>
          <Button variant="contained" className="bg-dark" style={{ fontWeight:'bold',borderRadius:'1px', textTransform:'initial'}}>Sign up </Button>
          <Button variant="outlined" className="text-dark " style={{fontWeight:'bold',borderRadius:'1px',border:'1px black solid'}}><Globe /></Button>

        </Stack>
      </Navbar>
    
    </div>
  );
}

export default Header;
