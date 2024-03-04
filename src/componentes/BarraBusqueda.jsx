import React from 'react';
import { Form } from 'react-bootstrap';

function BarraBusqueda({ searchTerm, handleSearchChange }) {
  return (
    <Form.Group controlId="search">
      <Form.Control
        type="text"
        placeholder="Buscar por nombre o apellido"
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </Form.Group>
  );
}

export default BarraBusqueda;