import './ExploreContainer.css';
import DateTimeSelector from '../components/DateTimeSelector/DateTimeSelector';
import CustomerDataInput from '../components/CustomerDataInput/CustomerDataInput';
import TableSelection from '../components/TableSelector/TableSelector';
import React from 'react';

interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
  const handleDateTimeChange = (dateTime: string) => {
    console.log('Fecha y hora seleccionadas:', dateTime);
  };

  const handleCustomerDataChange = (data: { name: string; contact: string }) => {
    console.log('Datos del cliente:', data);
  };

  const handleTableSelect = (tableId: number) => {
    console.log('Mesa seleccionada:', tableId);
  };

  const tables = [
    { id: 1, name: 'Mesa 1', available: true },
    { id: 2, name: 'Mesa 2', available: true },
    { id: 3, name: 'Mesa 3', available: true },
    { id: 4, name: 'Mesa 4', available: true },
  ];

  return (
    <div id="container">
      <h1>Gestión de Reservas</h1>
      <p>Aquí se integrarán los componentes reutilizables:</p>
      <div className="component-container">
        <DateTimeSelector onDateTimeChange={handleDateTimeChange} />
      </div>
      <div className="component-container">
        <CustomerDataInput onCustomerDataChange={handleCustomerDataChange} />
      </div>
      <div className="component-container">
        <TableSelection tables={tables} onTableSelect={handleTableSelect} />
      </div>
    </div>
  );
};

export default ExploreContainer;