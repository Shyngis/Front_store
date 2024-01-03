import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import logo from "../../Assets/logo.png";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

export const Header = () => {
  const size = "md";
  return (
    <>
      <Navbar key={size} expand={size} className="bg-body-tertiary mb-3">
        <Container fluid>
          <Form
            className="d-flex  flex-md-row align-items-center"
            style={{ margin: "10px", maxHeight: "66px" }}
          >
            <Navbar.Brand href="#" className="me-2">
              <a className="nav-link" href="/main">
                <img
                  src={logo}
                  alt="logosure"
                  className="logo"
                />
              </a>
            </Navbar.Brand>
            {/* <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button
              variant="outline-danger"
              style={{ paddingTop: "5px", margin: "10px" }}
            >
              Поиск
            </Button> */}
            <div className="search-input">
              <div className="input-group">
                <input type="text" class="form-control" placeholder="Поиск" aria-label="Поиск" aria-describedby="basic-addon2" />
                <div className="input-group-append">
                  <button className="btn btn-outline-secondary" type="button"><i className="fa fa-search"></i></button>
                </div>
              </div>
            </div>

            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${size}`} />
          </Form>
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${size}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${size}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${size}`}>
                SantehPlast
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3  ">
                <a className="nav-underline nav-link" href="/main">Главная</a>
                <a className="nav-underline nav-link" href="/aboutus">О нас</a>
                <a className="nav-underline nav-link" href="/contacts">Контакты</a>
                {/* <a className="nav-underline nav-link" href="/adminpage">Управление</a> */}
                <a className="nav-underline nav-link" href="tel:+7(705)2396303">+7(705)2396303</a>
                <a className="nav-underline nav-link" href="/adminpage"><i className="fa fa-sign-in"></i></a>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

<div className="jogargysy ">
  <header>
    <input type="checkbox" name="" id="chk1" />
    <div className="logo"></div>
    <div className="search-box">
      <form action="">
        <input type="text" name="search" id="srch" placeholder="Поиск" />
        <button type="submit">
          <i className="fa fa-search"></i>
        </button>
      </form>
    </div>
    <ul className="nav nav-underline  flex-column flex-sm-row">
      <li className="nav-item">
        <Link className="nav-link" to="/catalog">
          Главная
        </Link>
      </li>

      <li>
        <a className="nav-link" href="">
          О нас
        </a>
      </li>
      <li>
        <a className="nav-link" href="">
          Контакты
        </a>
      </li>
      <li>
        <Link className="nav-link" to="/adminpage">
          Управление
        </Link>
      </li>
      <li>
        <Link className="nav-link" to="/login">
          Вход
        </Link>
      </li>
      <li>
        <i className="fa-solid fa-phone"></i>
        8(700) 496-9087
      </li>
    </ul>
    <div className="menu">
      <label htmlFor="chk1">
        <i className="fa fa-bars"></i>
      </label>
    </div>
  </header>
</div>;
