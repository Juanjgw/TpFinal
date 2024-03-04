import React from 'react';
import { Modal, Button, Card, ListGroup } from 'react-bootstrap';

function ContactoComponente({ contacto, handleClose }) {
  return (
    <Modal show={true} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Contacto Detalle</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Card className="bg-gris-600">
          <ListGroup variant="flush">
            <ListGroup.Item><strong>Nombre:</strong> {contacto.Nombre}</ListGroup.Item>
            <ListGroup.Item><strong>Apellido:</strong> {contacto.Apellido}</ListGroup.Item>
            <ListGroup.Item><strong>Teléfono:</strong> {contacto.Telefono}</ListGroup.Item>
            <ListGroup.Item><strong>Dirección:</strong> {contacto.Direccion}</ListGroup.Item>
          </ListGroup>
        </Card>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}//prueba git

export default ContactoComponente; 


