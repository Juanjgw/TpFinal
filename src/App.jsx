import React, { useState, useEffect } from 'react';
import { Modal, Button, Card } from 'react-bootstrap'; // Agrega Card a los componentes importados
import 'bootstrap/dist/css/bootstrap.min.css';
import ModalAgregarContacto from './componentes/ModalAgregarContacto';
import ModalEditarContacto from './componentes/ModalEditarContacto';
import ListaContactos from './componentes/ListaContactos';
import BarraBusqueda from './componentes/BarraBusqueda';
import ContactoComponente from './componentes/ContactoComponente';
import './App.css'; // Importa tu archivo CSS aquí
function App() {
  const [contacts, setContacts] = useState([]);
  const [mostrarModalAgregar, setmostrarModalAgregar] = useState(false);
  const [MostrarModalEditar, setMostrarModalEditar] = useState(false);
  const [ContactoSeleccionado, setContactoSeleccionado] = useState(null);
  const [TerminoBusqueda, setTerminoBusqueda] = useState('');

  useEffect(() => {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      setContacts(JSON.parse(storedContacts));
    }
  }, []);

  const handleAddContacto = (newContacto) => {
    const updatedContacts = [...contacts, newContacto];
    setContacts(updatedContacts);
    localStorage.setItem('contacts', JSON.stringify(updatedContacts));
    setmostrarModalAgregar(false);
  };

  const handleEditContacto = (editedContacto) => {
    const updatedContacts = contacts.map((contacto) =>
      contacto.id === editedContacto.id ? editedContacto : contacto
    );
    setContacts(updatedContacts);
    localStorage.setItem('contacts', JSON.stringify(updatedContacts));
    setMostrarModalEditar(false);
  };

  const handleDeleteContacto = (contactoId) => {
    const updatedContacts = contacts.filter((contacto) => contacto.id !== contactoId);
    setContacts(updatedContacts);
    localStorage.setItem('contacts', JSON.stringify(updatedContacts));
  };

  const handleSearchChange = (e) => {
    setTerminoBusqueda(e.target.value);
  };

  const filteredContacts = contacts.filter((contacto) => {
    const fullName = `${contacto.Nombre} ${contacto.Apellido}`.toLowerCase();
    return fullName.includes(TerminoBusqueda.toLowerCase());
  });

  return (
    <div className="container mt-4">
      <Card className="bg-light text-dark"> {/* Agrega la clase bg-light para el color acero */}
        <Card.Body>
          <h1>Listado de Contactos</h1>
          <BarraBusqueda TerminoBusqueda={TerminoBusqueda} handleSearchChange={handleSearchChange} />
          <Button onClick={() => setmostrarModalAgregar(true)}>Agregar Contacto</Button>
          <ModalAgregarContacto show={mostrarModalAgregar} handleClose={() => setmostrarModalAgregar(false)} handleAddContacto={handleAddContacto} />
          {ContactoSeleccionado && (
            <ModalEditarContacto
              show={MostrarModalEditar}
              handleClose={() => setMostrarModalEditar(false)}
              handleEditContacto={handleEditContacto}
              contacto={ContactoSeleccionado}
            />
          )}
          <ListaContactos contacts={filteredContacts} handleEdit={(contacto) => { setContactoSeleccionado(contacto); setMostrarModalEditar(true);}} handleDelete={handleDeleteContacto} />
        </Card.Body>
      </Card>
    </div>
  );
}

export default App;


