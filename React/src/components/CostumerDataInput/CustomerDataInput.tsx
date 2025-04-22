import React, { useState } from 'react';
import './CustomerDataInput.css';

interface CustomerDataInputProps {
  onCustomerDataSubmit: (data: { name: string; contact: string }) => void;
}

const CustomerDataInput: React.FC<CustomerDataInputProps> = ({ onCustomerDataSubmit }) => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (name.trim() && contact.trim()) {
      onCustomerDataSubmit({ name, contact });
      setName('');
      setContact('');
      alert('Información del cliente guardada correctamente.');
    } else {
      alert('Por favor, completa todos los campos.');
    }
  };

  return (
    <form className="customer-data-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Nombre:</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Ingresa tu nombre"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="contact">Contacto:</label>
        <input
          id="contact"
          type="text"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          placeholder="Ingresa tu número o email"
          required
        />
      </div>
      <button type="submit" className="submit-button">
        Guardar Información
      </button>
    </form>
  );
};

export default CustomerDataInput;