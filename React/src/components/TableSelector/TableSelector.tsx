import React, { useState } from 'react';
import './TableSelection.css';


interface TableSelectionProps {
  tables: { id: number; name: string; available: boolean }[];
  onTableSelect: (tableId: number) => void;
}

const TableSelection: React.FC<TableSelectionProps> = ({ tables, onTableSelect }) => {
  return (
    <div className="table-selection-container">
      <h3>Selecciona una mesa</h3>
      <div className="table-list">
        {tables.map((table) => (
          <button
            key={table.id}
            className={`table-item ${table.available ? 'available' : 'unavailable'}`}
            onClick={() => table.available && onTableSelect(table.id)}
            disabled={!table.available}
          >
            {table.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TableSelection;