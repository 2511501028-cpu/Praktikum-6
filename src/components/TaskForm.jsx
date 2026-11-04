import React, { useEffect, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const TaskForm = ({ show, handleClose, addTask, editTask, taskToEdit }) => {
  const [task, setTask] = useState({
    name: "",
    priority: "Medium",
    status: "To Do",
  });

  useEffect(() => {
    if (taskToEdit) {
      setTask({
        name: taskToEdit.name || "",
        priority: taskToEdit.priority || "Medium",
        status: taskToEdit.status || "To Do",
        id: taskToEdit.id,
      });
    } else {
      setTask({
        name: "",
        priority: "Medium",
        status: "To Do",
      });
    }
  }, [taskToEdit, show]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!task.name.trim()) {
      alert("Nama tugas tidak boleh kosong!");
      return;
    }

    if (taskToEdit) {
      editTask(task);
    } else {
      addTask(task);
    }

    setTask({
      name: "",
      priority: "Medium",
      status: "To Do",
    });

    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{taskToEdit ? "Edit Task" : "Add New Task"}</Modal.Title>
      </Modal.Header>

      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Nama Tugas</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Masukkan nama tugas..."
              value={task.name}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Priority</Form.Label>
            <Form.Select
              name="priority"
              value={task.priority}
              onChange={handleChange}
            >
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Status</Form.Label>
            <Form.Select
              name="status"
              value={task.status}
              onChange={handleChange}
            >
              <option value="To Do">To Do</option>
              <option value="In Progress">In Progress</option>
              <option value="Done">Done</option>
            </Form.Select>
          </Form.Group>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Batal
          </Button>

          <Button variant="primary" type="submit">
            {taskToEdit ? "Simpan Perubahan" : "Tambah Tugas"}
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default TaskForm;
