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
// import { makeStyles } from "@mui/styles";
import "./App.scss";

// const useStyles = makeStyles(() => ({
  // button: {
  //   width: "30%",
  //   backgroundColor: "#4CAF50", // Green button for contrast
  //   color: "#fff",
  //   padding: "12px",
  //   borderRadius: "8px",
  //   fontSize: "1rem",
  //   fontWeight: "bold",
  // },
  // heading: {
  //   fontFamily: "monospace",
  // },
// }));

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

  // const classes = useStyles();

  // console.log(classes);
  return (
    <div
      // style={{
      //   backgroundColor: "#212121", // Light gray background
      //   height: "100vh",
      //   display: "flex",
      //   justifyContent: "center",
      //   alignItems: "center",
      //   flexDirection: "column",
      //   padding: "20px",
      // }}
      className="main-body"
    >
      <h1
        className="main-heading"
        //  style={{ marginBottom: "20px", fontSize: "2rem", color: "#b2b2b2" }}
      >
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
          className="todo-input"
          label=""
          variant="standard"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          // style={{
          //   marginBottom: "15px",
          //   width: "100%",
          //   padding: "20px",
          //   borderRadius: "8px",
          //   backgroundColor: "#2f2f2f",
          //   color: "#fff",
          // }}
          inputProps={{
            style: {
              color: "#b2b2b2",
              outlineColor: "#0d0d0d",
            },
          }}
          placeholder="Enter a new task..."
        />

        <Button
          variant="contained"
          onClick={addTodo}
          className="todo-button"
          // style={{
          //   background: "#f9f9f9",
          //   color:#0d0d0d "",
          // }}
          // className={classes.button}
        >
          Add Task
        </Button>
      </div>

      <TableContainer
        component={Paper}
        className="todos"
        style={{
          width: "100%",
          maxWidth: "700px", // Limit table width for better design
          marginTop: "30px",
          padding: "10px",
          borderRadius: "8px",
          background: "#2f2f2f",
          // color:'#b2b2b2'
          // boxShadow: "0 4px 12px rgba(255, 255, 255, 0.1)", // Add soft shadow
        }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell
                align="center"
                // style={{
                //   fontSize: "1.1rem",
                //   fontWeight: "bold",
                //   color: "#b2b2b2",
                // }}
                className="table-header"
              >
                Task
              </TableCell>
              <TableCell
                className="table-header"
                align="center"
                // style={{
                //   fontSize: "1.1rem",
                //   fontWeight: "bold",
                //   color: "#b2b2b2",
                // }}
              >
                Completed
              </TableCell>

              <TableCell
                className="table-header"
                align="center"
                // style={{
                //   fontSize: "1.1rem",
                //   fontWeight: "bold",
                //   color: "#b2b2b2",
                // }}
              >
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody className="todo-item">
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
