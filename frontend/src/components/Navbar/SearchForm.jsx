import { Form, Button, Modal, NavLink } from "react-bootstrap";
import { useState } from "react";
import { styled } from "styled-components";

function SearchForm() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <NavLink
        onClick={handleShow}
        className="search_button"
        style={{ marginRight: "10px" }}
      >
        <img className="icon_search" src="\src\icons8-поиск.svg" height="18px" alt="" /> Поиск
      </NavLink>
      <Modal className="my-modal" show={show} onHide={handleClose}>
        <Modal.Header closeButton className="my-modal-header">
          <Modal.Title>Поиск</Modal.Title>
        </Modal.Header>
        <Modal.Body className="my-modal-content">
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Название фильма или серияла"
              className="me-2 my_input"
              aria-label="Search"
            />
            <Button variant="outline-success">Искать</Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default SearchForm;
