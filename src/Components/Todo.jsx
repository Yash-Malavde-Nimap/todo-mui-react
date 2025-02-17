/* eslint-disable react/prop-types */
import { Button, TableCell, TableRow } from "@mui/material";
import TodoDialog from "./TodoDialog";

const Todo = ({ todo, toggleCompletion, toggleDelete }) => {
  return (
    <TableRow key={todo.id}>
      <TableCell
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
        }}
      >
        {todo.title}
      </TableCell>
      <TableCell style={{ display: "flex", gap: "20px" }}>
        <Button
          variant="outlined"
          color={todo.completed ? "warning" : "success"}
          onClick={() => toggleCompletion(todo.id)}
        >
          {todo.completed ? "Incomplete" : "Done"}
        </Button>
        <Button
          variant="contained"
          color="warning"
          onClick={() => toggleDelete(todo.id)}
        >
          Delete
        </Button>

        <TodoDialog todo={todo}/>
      </TableCell>
    </TableRow>
  );
};

export default Todo;
