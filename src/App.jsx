import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);

  const handleShowForm = () => {
    setTaskToEdit(null);
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setTaskToEdit(null);
  };

  const addTask = (task) => {
    setTasks((prevTasks) => [
      ...prevTasks,
      {
        ...task,
        id: Date.now(),
      },
    ]);
  };

  const editTask = (updatedTask) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === updatedTask.id ? updatedTask : task,
      ),
    );
  };

  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const showEditForm = (task) => {
    setTaskToEdit(task);
    setShowForm(true);
  };

  return (
    <div className="app-background">
      <Container className="todo-container">
        <div className="todo-header">
          <h1>Task List</h1>

          <Button className="add-task-button" onClick={handleShowForm}>
            <i className="bi bi-plus-lg"></i> Add Task
          </Button>
        </div>

        <TaskList
          tasks={tasks}
          deleteTask={deleteTask}
          showEditForm={showEditForm}
        />

        <TaskForm
          show={showForm}
          handleClose={handleCloseForm}
          addTask={addTask}
          editTask={editTask}
          taskToEdit={taskToEdit}
        />
      </Container>
    </div>
  );
}

export default App;
