import TableRow from "../TableRow";
import "./tableBody.style.css";

const TableBody = () => {
  return (
    <tbody className='todo-list__table-body'>
      <TableRow
        todo={{
          id: 1,
          todo: "Do something nice for someone you care about",
          completed: false,
        }}
      />
    </tbody>
  );
};

export default TableBody;
