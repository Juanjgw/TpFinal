import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function ModalAgregarContacto({ show, handleClose, handleAddContacto }) {
  const [newContacto, setNewContacto] = useState({
    id: Date.now(), // Asignar un ID único al nuevo contacto
    Nombre: '',
    Apellido: '',
    Telefono: '',
    Direccion: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewContacto({ ...newContacto, [name]: value });
  };

  const handleSubmit = () => {
    handleAddContacto(newContacto);
    setNewContacto({ // Restablecer el estado después de agregar un contacto
      id: Date.now(),
      Nombre: '',
      Apellido: '',
      Telefono: '',
      Direccion: ''
    });
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Contacto</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="Nombre">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              name="Nombre"
              value={newContacto.Nombre}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="Apellido">
            <Form.Label>Apellido</Form.Label>
            <Form.Control
              type="text"
              name="Apellido"
              value={newContacto.Apellido}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="Telefono">
            <Form.Label>Telefono</Form.Label>
            <Form.Control
              type="text"
              name="Telefono"
              value={newContacto.Telefono}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="Direccion">
            <Form.Label>Direccion</Form.Label>
            <Form.Control
              type="text"
              name="Direccion"
              value={newContacto.Direccion}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Save Contacto
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalAgregarContacto;

