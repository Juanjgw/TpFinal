import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function ModalEditarContacto({ show, handleClose, contacto, handleEditContacto }) {
  const [editedContacto, setEditedContacto] = useState(contacto);

  useEffect(() => {
    // Actualizar el estado local cuando el contacto cambie
    setEditedContacto(contacto);
  }, [contacto]); // Ejecutar el efecto cuando cambie el contacto

  // Verificar si el contacto está definido
  if (!contacto) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedContacto({ ...editedContacto, [name]: value });
  };

  const handleSubmit = () => {
    handleEditContacto(editedContacto); // Pasar el contacto editado al padre
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Contacto</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="Nombre">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              name="Nombre"
              value={editedContacto.Nombre}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="Apellido">
            <Form.Label>Apellido</Form.Label>
            <Form.Control
              type="text"
              name="Apellido"
              value={editedContacto.Apellido}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="Telefono">
            <Form.Label>Telefono</Form.Label>
            <Form.Control
              type="text"
              name="Telefono"
              value={editedContacto.Telefono}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="Direccion">
            <Form.Label>Direccion</Form.Label>
            <Form.Control
              type="text"
              name="Direccion"
              value={editedContacto.Direccion}
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
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalEditarContacto;
