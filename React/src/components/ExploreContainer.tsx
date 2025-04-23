import './ExploreContainer.css';
import DateTimeSelector from '../components/DateTimeSelector/DateTimeSelector';
import CustomerDataInput from '../components/CustomerDataInput/CustomerDataInput';
import TableSelection from '../components/TableSelector/TableSelector';
import React, { useState } from 'react';

interface ReservationData {
  dateTime: string;
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  tableId: number | null;
}

const ExploreContainer: React.FC = () => {
  const [reservationData, setReservationData] = useState<ReservationData>({
    dateTime: '',
    customerName: '',
    customerPhone: '',
    customerEmail: '',
    tableId: null,
  });

  const [tables, setTables] = useState<
    { id: number; name: string; available: boolean }[]
  >([
    { id: 1, name: 'Mesa 1', available: true },
    { id: 2, name: 'Mesa 2', available: true },
    { id: 3, name: 'Mesa 3', available: true },
    { id: 4, name: 'Mesa 4', available: true },
  ]);

  const handleDateTimeChange = (dateTime: string) => {
    setReservationData((prev) => ({ ...prev, dateTime }));
  };

  const handleCustomerDataChange = (data: { name: string; phone: string; email: string }) => {
    setReservationData((prev) => ({
      ...prev,
      customerName: data.name,
      customerPhone: data.phone,
      customerEmail: data.email,
    }));
  };

  const handleTableSelect = (tableId: number) => {
    setReservationData((prev) => ({ ...prev, tableId }));
  };

  const handleReservationSubmit = () => {
    if (!reservationData.dateTime || !reservationData.customerName || !reservationData.tableId || !reservationData.customerEmail) {
      alert('Por favor, completa todos los campos antes de enviar.');
      return;
    }

    // Simula el envío de datos y muestra un mensaje de éxito
    console.log('Datos enviados:', {
      dateTime: reservationData.dateTime,
      name: reservationData.customerName,
      phone: reservationData.customerPhone,
      email: reservationData.customerEmail,
      tableId: reservationData.tableId,
    });

    alert('Reserva realizada con éxito.');

    // Limpia los datos de la reserva y actualiza las mesas
    setReservationData({
      dateTime: '',
      customerName: '',
      customerPhone: '',
      customerEmail: '',
      tableId: null,
    });

    setTables((prevTables) =>
      prevTables.map((table) =>
        table.id === reservationData.tableId ? { ...table, available: false } : table
      )
    );
  };

  return (
    <div id="container">
      <h1>Gestión de Reservas</h1>
      <div className="component-container">
        <DateTimeSelector onDateTimeChange={handleDateTimeChange} />
      </div>
      <div className="component-container">
        <CustomerDataInput onCustomerDataChange={handleCustomerDataChange} />
      </div>
      <div className="component-container">
        <TableSelection tables={tables} onTableSelect={handleTableSelect} />
      </div>
      <button className="submit-reservation-button" onClick={handleReservationSubmit}>
        Confirmar Reserva
      </button>
    </div>
  );
};

export default ExploreContainer;