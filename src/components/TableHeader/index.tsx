import "./tableHeader.style.css";

interface TableHeaderProps {
  tableAttributes: string[];
}

const TableHeader = ({ tableAttributes }: TableHeaderProps) => {
  return (
    <thead className='todo-list__table-head'>
      <tr className='todo-list__table-row'>
        {tableAttributes.map((attr) => (
          <th key={attr} className='todo-list__table-header'>
            {attr}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
