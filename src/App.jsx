// import { useState } from "react";
import {
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import Todo from "./Components/Todo";
import { useContext } from "react";
import { TodoContext } from "./context/TodoContext";

const TodoApp = () => {
  const {
    todos,
    // setTodos,
    input,
    setInput,
    toggleCompletion,
    toggleDelete,
    addTodo,
  } = useContext(TodoContext);

  return (
    <div
      style={{
        backgroundColor: "#2b2b2b9c", // Light gray background
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: "20px",
      }}
    >
      <h1 style={{ marginBottom: "20px", fontSize: "2rem", color: "#333" }}>
        To-Do List
      </h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          width: "100%",
          maxWidth: "500px", // Limit width for better design on larger screens
          marginBottom: "20px",
        }}
      >
        <TextField
          label=""
          variant="outlined"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{
            marginBottom: "15px",
            width: "100%",
            padding: "12px",
            borderRadius: "8px",
            backgroundColor: "#fff", // White background to make the input pop
          }}
          placeholder="Enter a new task..." // Custom placeholder text
        />

        <Button
          variant="contained"
          onClick={addTodo}
          style={{
            width: "100%",
            backgroundColor: "#4CAF50", // Green button for contrast
            color: "#fff",
            padding: "12px",
            borderRadius: "8px",
            fontSize: "1rem",
            fontWeight: "bold",
          }}
        >
          Add Task
        </Button>
      </div>

      <TableContainer
        component={Paper}
        style={{
          width: "100%",
          maxWidth: "700px", // Limit table width for better design
          marginTop: "30px",
          padding: "20px",
          borderRadius: "8px",
          background: "#fff",
          boxShadow: "0 4px 12px rgba(255, 255, 255, 0.1)", // Add soft shadow
        }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell
                style={{
                  fontSize: "1.1rem",
                  fontWeight: "bold",
                  color: "#333",
                }}
              >
                Task
              </TableCell>
              <TableCell
                style={{
                  fontSize: "1.1rem",
                  fontWeight: "bold",
                  color: "#333",
                }}
              >
                Completed
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {todos?.map((todo, i) => (
              <Todo
                key={i}
                todo={todo}
                toggleCompletion={toggleCompletion}
                toggleDelete={toggleDelete}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TodoApp;
