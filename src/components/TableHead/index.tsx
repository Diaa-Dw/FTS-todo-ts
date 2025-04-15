import "./tableHead.style.css";

interface TableHeadProps {
  tableAttributes: string[];
}

const TableHead = ({ tableAttributes }: TableHeadProps) => {
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

export default TableHead;
