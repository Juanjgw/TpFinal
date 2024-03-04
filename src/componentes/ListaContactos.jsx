import React, { useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import ContactoComponente from './ContactoComponente';

function ListaContactos({ contacts, handleEdit, handleDelete }) {
  const [selectedContacto, setSelectedContacto] = useState(null);

  const handleView = (contacto) => {
    setSelectedContacto(contacto);
  };

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Accion</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contacto) => (
            <tr key={contacto.id}>
              <td>{contacto.Nombre}</td>
              <td>{contacto.Apellido}</td>
              <td>
                <Button variant="info" onClick={() => handleView(contacto)}>Ver</Button>{' '}
                <Button variant="warning" onClick={() => handleEdit(contacto)}>Editar</Button>{' '}
                <Button variant="danger" onClick={() => handleDelete(contacto.id)}>Borrar</Button>{' '}
                
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {selectedContacto && <ContactoComponente contacto={selectedContacto} handleClose={() => setSelectedContacto(null)} />}
    </>
  );
}

export default ListaContactos;