import { Navbar, Nav, Container, Button, ButtonToolbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import SearchForm from "./SearchForm";
import "./Navbar.css";

function MyNavbar() {
  return (
    <Navbar
      expand="lg"
      fixed="top"
      data-bs-theme="dark"
      className="bg-body-tertiary"
    >
      <Container fluid>
        <Navbar.Brand href="#">Кино для всех</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">
              <Link to="/">Главная</Link>
            </Nav.Link>
            <Nav.Link href="#action1">
              <Link to="/">Фильмы</Link>
            </Nav.Link>
            <Nav.Link href="#action2">
              <Link to="/">Сериалы</Link>
            </Nav.Link>
            <Nav.Link href="#action2">
              <Link to="/">Жанры</Link>
            </Nav.Link>
            <Nav.Link href="#action2">
              <Link to="/">Войти/</Link>
              <Link to="/">Зарегистрироваться</Link>
            </Nav.Link>
          </Nav>
          <SearchForm />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
