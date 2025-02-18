/* eslint-disable react/prop-types */
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";

const TodoDialog = ({ todo }) => {
  const [open, setOpen] = useState(false);
  const [dialogTitle, setDialogTitle] = useState(todo.title);

  const { setTodos } = useContext(TodoContext);

  const handleEdit = (e) => {
    e.preventDefault();
    
    setOpen(false)

    setTodos((prevTodos) =>
      prevTodos.map((t) =>
        t.id === todo.id ? { ...t, title: dialogTitle } : t
      )
    );
  };

  return (
    <div>
      <Button onClick={() => setOpen(!open)}>Edit</Button>

      <Dialog
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <DialogTitle>Edit Task</DialogTitle>

        <DialogContent>
          <TextField
            value={dialogTitle}
            onChange={(e) => {
              setDialogTitle(e.target.value);
            }}
          />
        </DialogContent>

        <DialogActions>
          <Button
            onClick={() => {
              setOpen(false);
            }}
            variant="outlined"
            color="error"
          >
            Cancel
          </Button>
          <Button onClick={handleEdit} variant="contained" color="success">
            Edit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default TodoDialog;
