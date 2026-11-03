import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { PlusCircle } from "react-bootstrap-icons";

function App() {
  const [tasks, setTasks] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);

  const handleShowForm = () => setShowForm(true);
  const handleCloseForm = () => {
    setShowForm(false);
    setTaskToEdit(null);
  };

  const addTask = (task) => setTasks([...tasks, { ...task, id: Date.now() }]);
  const editTask = (updatedTask) =>
    setTasks(tasks.map((t) => (t.id === updatedTask.id ? updatedTask : t)));
  const deleteTask = (id) => setTasks(tasks.filter((t) => t.id !== id));
  const showEditForm = (task) => {
    setTaskToEdit(task);
    setShowForm(true);
  };

  return (
    <Container className="mt-5 text-center">
      <h2 className="fw-bold mb-4">Task List</h2>
      <Button className="btn-add mb-3" onClick={handleShowForm}>
        <PlusCircle size={18} className="me-2" /> Add Task
      </Button>
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
  );
}

export default App;
