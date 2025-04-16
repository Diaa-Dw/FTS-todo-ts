import "./tableHead.style.css";
import { TableHeadProps } from "./tableHead.type";

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
