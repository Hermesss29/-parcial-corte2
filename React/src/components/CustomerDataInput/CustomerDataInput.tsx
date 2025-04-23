import React, { useState } from 'react';
import './CustomerDataInput.css';

interface CustomerDataInputProps {
  onCustomerDataChange: (data: { name: string; phone: string; email: string }) => void;
}

const CustomerDataInput: React.FC<CustomerDataInputProps> = ({ onCustomerDataChange }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newName = e.target.value;
    setName(newName);
    onCustomerDataChange({ name: newName, phone, email });
  };

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newContact = e.target.value;
    setPhone(newContact);
    onCustomerDataChange({ name, phone: newContact, email });
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    onCustomerDataChange({ name, phone, email: newEmail });
  };

  return (
    <form className="customer-data-form">
      <h1>Datos del Cliente</h1>
      <div className="form-group">
        <label htmlFor="name">Nombre:</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder="Ingresa tu nombre"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="contact">Contacto:</label>
        <input
          id="contact"
          type="text"
          value={phone}
          onChange={handleContactChange}
          placeholder="Ingresa tu número o contacto"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Correo Electrónico:</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Ingresa tu correo electrónico"
          required
        />
      </div>
    </form>
  );
};

export default CustomerDataInput;