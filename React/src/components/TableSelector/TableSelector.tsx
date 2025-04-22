import React, { useState } from 'react';
import './TableSelection.css';

interface TableSelectionProps {
  tables: { id: number; name: string; available: boolean }[];
  onTableSelect: (tableId: number) => void;
}

const TableSelection: React.FC<TableSelectionProps> = ({ tables, onTableSelect }) => {
  const [selectedTable, setSelectedTable] = useState<number | null>(null);

  const handleTableClick = (tableId: number) => {
    setSelectedTable(tableId);
    onTableSelect(tableId);
  };

  return (
    <div className="table-selection">
      <h3>Selecciona una mesa</h3>
      <div className="table-list">
        {tables.map((table) => (
          <button
            key={table.id}
            className={`table-item ${selectedTable === table.id ? 'selected' : ''} ${
              table.available ? 'available' : 'unavailable'
            }`}
            onClick={() => handleTableClick(table.id)}
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