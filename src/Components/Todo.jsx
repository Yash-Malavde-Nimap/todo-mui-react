/* eslint-disable react/prop-types */
import { Button, TableCell, TableRow } from "@mui/material";
import TodoDialog from "./TodoDialog";

const Todo = ({ todo, toggleCompletion, toggleDelete }) => {
  // const { todo } = useContext(TodoContext);
  const { title, id, completed } = todo;

  // console.log(todo)

  return (
    <TableRow key={id} >
      <TableCell
        align="center"
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
          color: "#b2b2b2",
          textWrap:'balance',
          // width:'10%'
        }}
      >
        {title}
      </TableCell>
      <TableCell
        align="center"
        style={{
          fontSize: "1.1rem",
          fontWeight: "bold",
          color: "#b2b2b2",
        }}
      >
        {todo.completed ? "Yes" : "No"}
      </TableCell>

      <TableCell style={{ display: "flex", gap: "20px" }}>
        <Button
          align="center"
          variant="outlined"
          color={completed ? "warning" : "success"}
          onClick={() => toggleCompletion(todo.id)}
        >
          {completed ? "Incomplete" : "Done"}
        </Button>
        <Button
          align="center"
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
