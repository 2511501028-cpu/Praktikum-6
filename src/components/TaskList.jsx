import React from "react";
import { Button, Card, Badge } from "react-bootstrap";
import { PencilSquare, Trash } from "react-bootstrap-icons";

const TaskList = ({ tasks, deleteTask, showEditForm }) => {
  const getPriorityBadge = (priority) => {
    switch (priority) {
      case "High":
        return <Badge bg="danger">High</Badge>;
      case "Medium":
        return (
          <Badge bg="warning" text="dark">
            Medium
          </Badge>
        );
      default:
        return <Badge bg="success">Low</Badge>;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "To Do":
        return "secondary";
      case "In Progress":
        return "info";
      case "Done":
        return "success";
      default:
        return "light";
    }
  };

  return (
    <div>
      {tasks.map((task) => (
        <Card className="mb-3 shadow-sm border-0 rounded-3" key={task.id}>
          <Card.Body className="d-flex justify-content-between align-items-center">
            <div className="text-start">
              <div className="fw-semibold">Task: {task.name}</div>
              <div>Priority: {getPriorityBadge(task.priority)}</div>
              <div>
                Status:{" "}
                <Badge bg={getStatusColor(task.status)}>{task.status}</Badge>
              </div>
            </div>
            <div>
              <Button
                variant="outline-dark"
                className="me-2"
                onClick={() => showEditForm(task)}
              >
                <PencilSquare />
              </Button>
              <Button
                variant="outline-danger"
                onClick={() => deleteTask(task.id)}
              >
                <Trash />
              </Button>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default TaskList;
