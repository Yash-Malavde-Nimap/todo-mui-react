/* eslint-disable react/prop-types */
import { Button, TableCell, TableRow } from "@mui/material";
import TodoDialog from "./TodoDialog";

const Todo = ({ todo, toggleCompletion, toggleDelete }) => {
  // const { todo } = useContext(TodoContext);
  const { title, id, completed } = todo;

  // console.log(todo)

  return (
    <TableRow key={id}>
      <TableCell
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
        }}
      >
        {title}
      </TableCell>
      <TableCell style={{ display: "flex", gap: "20px" }}>
        <Button
          variant="outlined"
          color={completed ? "warning" : "success"}
          onClick={() => toggleCompletion(todo.id)}
        >
          {completed ? "Incomplete" : "Done"}
        </Button>
        <Button
          variant="contained"
          color="warning"
          onClick={() => toggleDelete(todo.id)}
        >
          Delete
        </Button>

        <TodoDialog key={id} todo={todo} />
      </TableCell>
    </TableRow>
  );
};

export default Todo;
